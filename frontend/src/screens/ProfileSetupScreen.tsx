import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, FONT_SIZES } from '@/utils/constants';
import Button from '@/components/common/Button';
import InputField from '@/components/common/InputField';
import useAuth from '@/hooks/useAuth';
import useTheme from '@/hooks/useTheme';
import { calculateBMI, calculateDailyCalories } from '@/utils/formatters';
import { ACTIVITY_LEVELS, FITNESS_GOALS } from '@/utils/constants';

interface ProfileSetupScreenProps {
  onSetupComplete?: () => void;
}

/**
 * Profile Setup Screen Component
 */
const ProfileSetupScreen: React.FC<ProfileSetupScreenProps> = ({
  onSetupComplete,
}) => {
  const { theme } = useTheme();
  const { user, updateUserProfile, loading } = useAuth();
  const colors = COLORS[theme];
  const screenWidth = Dimensions.get('window').width;

  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'other'>('male');
  const [goal, setGoal] = useState('general_fitness');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [bmi, setBmi] = useState<number | null>(null);
  const [dailyCalories, setDailyCalories] = useState<number | null>(null);

  // Calculate BMI and daily calories when inputs change
  useEffect(() => {
    if (height && weight) {
      const heightCm = parseInt(height) || 0;
      const weightKg = parseInt(weight) || 0;
      if (heightCm > 0 && weightKg > 0) {
        const bmiValue = calculateBMI(weightKg, heightCm);
        setBmi(bmiValue);

        if (age) {
          const ageNum = parseInt(age) || 0;
          if (ageNum > 0) {
            const calories = calculateDailyCalories(
              weightKg,
              heightCm,
              ageNum,
              gender,
              activityLevel
            );
            setDailyCalories(calories);
          }
        }
      }
    }
  }, [age, height, weight, gender, activityLevel]);

  const handleSetupComplete = async () => {
    if (!age || !height || !weight) {
      alert('Please fill in all required fields');
      return;
    }

    const profileData = {
      profile: {
        age: parseInt(age),
        height: parseInt(height),
        weight: parseInt(weight),
        goal,
        activityLevel,
        gender,
      },
    };

    try {
      await updateUserProfile(profileData);
      onSetupComplete?.();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Complete Your Profile</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Help us personalize your fitness experience
        </Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Age */}
        <InputField
          label="Age"
          placeholder="Enter your age"
          value={age}
          onChangeText={setAge}
          keyboardType="number-pad"
          theme={theme}
        />

        {/* Height */}
        <InputField
          label="Height (cm)"
          placeholder="Enter your height in cm"
          value={height}
          onChangeText={setHeight}
          keyboardType="number-pad"
          theme={theme}
        />

        {/* Weight */}
        <InputField
          label="Weight (kg)"
          placeholder="Enter your weight in kg"
          value={weight}
          onChangeText={setWeight}
          keyboardType="number-pad"
          theme={theme}
        />

        {/* BMI Display */}
        {bmi && (
          <View
            style={[
              styles.infoBox,
              { backgroundColor: colors.surface, borderColor: colors.border },
            ]}
          >
            <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>
              Your BMI: {bmi.toFixed(1)}
            </Text>
            <Text style={[styles.infoValue, { color: colors.primary }]}>
              {bmi < 18.5
                ? 'Underweight'
                : bmi < 25
                ? 'Normal'
                : bmi < 30
                ? 'Overweight'
                : 'Obese'}
            </Text>
          </View>
        )}

        {/* Daily Calories */}
        {dailyCalories && (
          <View
            style={[
              styles.infoBox,
              { backgroundColor: colors.surface, borderColor: colors.border },
            ]}
          >
            <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>
              Estimated Daily Calorie Needs
            </Text>
            <Text style={[styles.infoValue, { color: colors.primary }]}>
              {dailyCalories} kcal/day
            </Text>
          </View>
        )}

        {/* Activity Level Picker */}
        <View style={styles.pickerSection}>
          <Text style={[styles.label, { color: colors.text }]}>Activity Level</Text>
          <View style={styles.optionsContainer}>
            {ACTIVITY_LEVELS.map((level) => (
              <Button
                key={level.id}
                label={level.label}
                onPress={() => setActivityLevel(level.id)}
                variant={activityLevel === level.id ? 'primary' : 'secondary'}
                size="small"
                theme={theme}
              />
            ))}
          </View>
        </View>

        {/* Fitness Goal Picker */}
        <View style={styles.pickerSection}>
          <Text style={[styles.label, { color: colors.text }]}>Fitness Goal</Text>
          <View style={styles.optionsContainer}>
            {FITNESS_GOALS.map((goalOption) => (
              <Button
                key={goalOption.id}
                label={goalOption.label}
                onPress={() => setGoal(goalOption.id)}
                variant={goal === goalOption.id ? 'primary' : 'secondary'}
                size="small"
                theme={theme}
              />
            ))}
          </View>
        </View>
      </View>

      {/* Complete Setup Button */}
      <Button
        label={loading ? 'Saving Profile...' : 'Complete Setup'}
        onPress={handleSetupComplete}
        disabled={loading || !age || !height || !weight}
        loading={loading}
        fullWidth
        theme={theme}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: SPACING.lg,
  },
  header: {
    marginBottom: SPACING.xxl,
    alignItems: 'center',
  },
  title: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: FONT_SIZES.md,
  },
  form: {
    marginBottom: SPACING.xl,
  },
  label: {
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
    marginBottom: SPACING.md,
  },
  infoBox: {
    borderWidth: 1,
    borderRadius: 12,
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  infoLabel: {
    fontSize: FONT_SIZES.sm,
    marginBottom: SPACING.sm,
  },
  infoValue: {
    fontSize: FONT_SIZES.lg,
    fontWeight: 'bold',
  },
  pickerSection: {
    marginBottom: SPACING.xl,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
});

export default ProfileSetupScreen;
