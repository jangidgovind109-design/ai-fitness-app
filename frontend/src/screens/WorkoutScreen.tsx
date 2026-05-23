import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, FONT_SIZES, WORKOUT_TYPES, INTENSITY_LEVELS } from '@/utils/constants';
import Button from '@/components/common/Button';
import InputField from '@/components/common/InputField';
import useTheme from '@/hooks/useTheme';
import useFitness from '@/hooks/useFitness';
import useAuth from '@/hooks/useAuth';

interface WorkoutScreenProps {
  onWorkoutLogged?: () => void;
}

/**
 * Workout Tracking Screen Component
 */
const WorkoutScreen: React.FC<WorkoutScreenProps> = ({ onWorkoutLogged }) => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const { addWorkout, loading } = useFitness(user?.uid);
  const colors = COLORS[theme];

  const [selectedWorkoutType, setSelectedWorkoutType] = useState('walking');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('moderate');
  const [distance, setDistance] = useState('');
  const [calories, setCalories] = useState('');
  const [notes, setNotes] = useState('');

  const handleLogWorkout = async () => {
    if (!duration) {
      alert('Please enter workout duration');
      return;
    }

    const workoutData = {
      type: selectedWorkoutType,
      duration: parseInt(duration),
      intensity,
      distance: distance ? parseFloat(distance) : 0,
      calories: calories ? parseInt(calories) : 0,
      notes,
      startTime: new Date(),
      endTime: new Date(),
    };

    try {
      await addWorkout(workoutData);
      // Reset form
      setDuration('');
      setDistance('');
      setCalories('');
      setNotes('');
      onWorkoutLogged?.();
    } catch (error) {
      console.error('Error logging workout:', error);
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Log Workout</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Track your fitness activities
        </Text>
      </View>

      {/* Workout Type Selection */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Workout Type</Text>
        <View style={styles.workoutGrid}>
          {WORKOUT_TYPES.map((workout) => (
            <TouchableOpacity
              key={workout.id}
              style={[
                styles.workoutCard,
                {
                  backgroundColor:
                    selectedWorkoutType === workout.id
                      ? colors.primary
                      : colors.surface,
                  borderColor: colors.border,
                  borderWidth: selectedWorkoutType === workout.id ? 0 : 1,
                },
              ]}
              onPress={() => setSelectedWorkoutType(workout.id)}
            >
              <Text style={styles.workoutIcon}>{workout.icon}</Text>
              <Text
                style={[
                  styles.workoutLabel,
                  {
                    color:
                      selectedWorkoutType === workout.id
                        ? '#fff'
                        : colors.text,
                  },
                ]}
              >
                {workout.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Duration Input */}
      <InputField
        label="Duration (minutes)"
        placeholder="Enter duration"
        value={duration}
        onChangeText={setDuration}
        keyboardType="number-pad"
        theme={theme}
      />

      {/* Intensity Selection */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Intensity</Text>
        <View style={styles.intensityContainer}>
          {INTENSITY_LEVELS.map((level) => (
            <TouchableOpacity
              key={level.id}
              style={[
                styles.intensityCard,
                {
                  backgroundColor:
                    intensity === level.id ? level.color : colors.surface,
                  borderColor: colors.border,
                  borderWidth: intensity === level.id ? 0 : 1,
                },
              ]}
              onPress={() => setIntensity(level.id)}
            >
              <Text
                style={[
                  styles.intensityLabel,
                  {
                    color: intensity === level.id ? '#fff' : colors.text,
                    fontWeight: intensity === level.id ? 'bold' : 'normal',
                  },
                ]}
              >
                {level.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Distance Input */}
      <InputField
        label="Distance (km)"
        placeholder="Enter distance (optional)"
        value={distance}
        onChangeText={setDistance}
        keyboardType="decimal-pad"
        theme={theme}
      />

      {/* Calories Input */}
      <InputField
        label="Calories Burned"
        placeholder="Enter calories (optional)"
        value={calories}
        onChangeText={setCalories}
        keyboardType="number-pad"
        theme={theme}
      />

      {/* Notes Input */}
      <InputField
        label="Notes"
        placeholder="Add any notes about your workout"
        value={notes}
        onChangeText={setNotes}
        multiline
        numberOfLines={3}
        theme={theme}
      />

      {/* Log Workout Button */}
      <Button
        label={loading ? 'Logging Workout...' : 'Log Workout'}
        onPress={handleLogWorkout}
        disabled={loading || !duration}
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
    marginBottom: SPACING.lg,
  },
  title: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: FONT_SIZES.md,
  },
  section: {
    marginBottom: SPACING.lg,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '600',
    marginBottom: SPACING.md,
  },
  workoutGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
  },
  workoutCard: {
    width: (Dimensions.get('window').width - SPACING.lg * 2 - SPACING.md * 2) / 3,
    aspectRatio: 1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  workoutIcon: {
    fontSize: FONT_SIZES.xxxl,
    marginBottom: SPACING.sm,
  },
  workoutLabel: {
    fontSize: FONT_SIZES.sm,
    fontWeight: '600',
    textAlign: 'center',
  },
  intensityContainer: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  intensityCard: {
    flex: 1,
    paddingVertical: SPACING.md,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
  },
  intensityLabel: {
    fontSize: FONT_SIZES.md,
    fontWeight: '500',
  },
});

export default WorkoutScreen;
