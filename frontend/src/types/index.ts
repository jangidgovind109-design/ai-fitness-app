/**
 * Type definitions for the entire application
 */

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  profile: UserProfile;
  settings: UserSettings;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  age: number;
  height: number; // cm
  weight: number; // kg
  goal: 'weight_loss' | 'muscle_gain' | 'endurance' | 'general_fitness';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'very_active';
  gender: 'male' | 'female' | 'other';
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'auto';
  notifications: boolean;
  language: string;
  units: 'metric' | 'imperial';
}

export interface FitnessData {
  id: string;
  userId: string;
  date: Date;
  steps: number;
  calories: number;
  distance: number; // km
  workouts: Workout[];
  sleep: SleepData;
  water: number; // liters
  heartRate?: number;
}

export interface Workout {
  id: string;
  type: 'walking' | 'running' | 'cycling' | 'gym' | 'sports' | 'yoga';
  duration: number; // minutes
  intensity: 'low' | 'moderate' | 'high';
  calories: number;
  distance?: number; // km
  startTime: Date;
  endTime: Date;
  notes?: string;
}

export interface SleepData {
  hours: number;
  quality: 'poor' | 'fair' | 'good' | 'excellent';
  bedTime: Date;
  wakeTime: Date;
}

export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface AICoachChat {
  id: string;
  userId: string;
  messages: AIMessage[];
  context: {
    fitnessLevel: string;
    goals: string[];
    recentProgress: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Recommendation {
  id: string;
  userId: string;
  type: 'workout' | 'diet' | 'motivation' | 'goal';
  title: string;
  description: string;
  action?: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

export interface Goal {
  id: string;
  userId: string;
  title: string;
  description: string;
  type: 'steps' | 'calories' | 'distance' | 'workouts' | 'sleep' | 'water';
  targetValue: number;
  currentValue: number;
  startDate: Date;
  endDate: Date;
  status: 'active' | 'completed' | 'abandoned';
}

export interface WeeklyReport {
  id: string;
  userId: string;
  week: number;
  year: number;
  totalSteps: number;
  totalCalories: number;
  totalDistance: number;
  totalWorkouts: number;
  averageSleep: number;
  bestDay: string;
  insights: string[];
  goalsAchieved: number;
  createdAt: Date;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface FitnessState {
  currentData: FitnessData | null;
  historicalData: FitnessData[];
  loading: boolean;
  error: string | null;
}

export interface AIState {
  messages: AIMessage[];
  recommendations: Recommendation[];
  loading: boolean;
  error: string | null;
}

export interface UIState {
  theme: 'light' | 'dark';
  loading: boolean;
  notification: {
    message: string;
    type: 'success' | 'error' | 'info';
    visible: boolean;
  };
}

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  ProfileSetup: undefined;
  MainApp: undefined;
  Home: undefined;
  Workout: undefined;
  Analytics: undefined;
  Coach: undefined;
  Profile: undefined;
};
