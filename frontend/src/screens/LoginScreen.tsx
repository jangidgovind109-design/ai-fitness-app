import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { COLORS, SPACING, FONT_SIZES, SHADOW } from '@/utils/constants';
import { validateEmail, validatePassword } from '@/utils/formatters';
import Button from '@/components/common/Button';
import InputField from '@/components/common/InputField';
import useAuth from '@/hooks/useAuth';
import useTheme from '@/hooks/useTheme';

interface LoginScreenProps {
  onLoginSuccess?: () => void;
  onSignupPress?: () => void;
}

/**
 * Login Screen Component
 */
const LoginScreen: React.FC<LoginScreenProps> = ({
  onLoginSuccess,
  onSignupPress,
}) => {
  const { theme } = useTheme();
  const { login, loading, error } = useAuth();
  const colors = COLORS[theme];

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = async () => {
    // Validate inputs
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }

    try {
      await login(email, password);
      onLoginSuccess?.();
    } catch (err) {
      // Error is handled by Redux
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Welcome Back</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Login to your fitness account
        </Text>
      </View>

      {/* Error Message */}
      {error && (
        <View
          style={[
            styles.errorContainer,
            { backgroundColor: colors.secondary + '20' },
          ]}
        >
          <Text style={[styles.errorText, { color: colors.secondary }]}>
            {error}
          </Text>
        </View>
      )}

      {/* Form */}
      <View style={styles.form}>
        <InputField
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError('');
          }}
          error={emailError}
          theme={theme}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <InputField
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setPasswordError('');
          }}
          error={passwordError}
          theme={theme}
          secureTextEntry
        />

        {/* Forgot Password Link */}
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={[styles.forgotPasswordText, { color: colors.primary }]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <Button
        label={loading ? 'Logging in...' : 'Login'}
        onPress={handleLogin}
        disabled={loading}
        loading={loading}
        fullWidth
        theme={theme}
      />

      {/* Google Sign-In Button */}
      <TouchableOpacity
        style={[
          styles.googleButton,
          {
            backgroundColor: colors.surface,
            borderColor: colors.border,
          },
        ]}
      >
        <Text style={[styles.googleButtonText, { color: colors.text }]}>
          Sign in with Google
        </Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <View style={styles.signupContainer}>
        <Text style={[styles.signupText, { color: colors.textSecondary }]}>
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={onSignupPress}>
          <Text style={[styles.signupLink, { color: colors.primary }]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: SPACING.lg,
    justifyContent: 'center',
    minHeight: '100%',
  },
  header: {
    marginBottom: SPACING.xxl,
    alignItems: 'center',
  },
  title: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 'bold',
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: FONT_SIZES.md,
  },
  form: {
    marginBottom: SPACING.xl,
  },
  errorContainer: {
    borderRadius: 8,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
  },
  errorText: {
    fontSize: FONT_SIZES.sm,
    fontWeight: '500',
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginTop: SPACING.md,
  },
  forgotPasswordText: {
    fontSize: FONT_SIZES.sm,
    fontWeight: '600',
  },
  googleButton: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: SPACING.md,
    alignItems: 'center',
    marginVertical: SPACING.lg,
  },
  googleButtonText: {
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SPACING.xl,
  },
  signupText: {
    fontSize: FONT_SIZES.md,
  },
  signupLink: {
    fontSize: FONT_SIZES.md,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
