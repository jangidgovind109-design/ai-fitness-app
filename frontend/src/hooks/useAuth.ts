import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/store/store';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  signupStart,
  signupSuccess,
  signupFailure,
  logout,
  updateUser,
} from '@/store/slices/authSlice';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth, db } from '@/services/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { User } from '@/types';

/**
 * Custom hook for authentication
 */
export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth_state = useSelector((state: RootState) => state.auth);

  const login = async (email: string, password: string) => {
    dispatch(loginStart());
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const userDoc = await getDoc(doc(db, 'users', result.user.uid));
      const userData: User = {
        uid: result.user.uid,
        email: result.user.email || '',
        displayName: result.user.displayName || '',
        photoURL: result.user.photoURL || '',
        profile: userDoc.data()?.profile || {},
        settings: userDoc.data()?.settings || {},
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      dispatch(loginSuccess(userData));
      return userData;
    } catch (error: any) {
      const errorMessage = error.message || 'Login failed';
      dispatch(loginFailure(errorMessage));
      throw error;
    }
  };

  const signup = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    dispatch(signupStart());
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, { displayName });

      const userData: User = {
        uid: result.user.uid,
        email: result.user.email || '',
        displayName,
        photoURL: '',
        profile: {
          age: 0,
          height: 0,
          weight: 0,
          goal: 'general_fitness',
          activityLevel: 'moderate',
          gender: 'other',
        },
        settings: {
          theme: 'light',
          notifications: true,
          language: 'en',
          units: 'metric',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Save user to Firestore
      await setDoc(doc(db, 'users', result.user.uid), userData);
      dispatch(signupSuccess(userData));
      return userData;
    } catch (error: any) {
      const errorMessage = error.message || 'Signup failed';
      dispatch(signupFailure(errorMessage));
      throw error;
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error: any) {
      console.error('Logout error:', error);
    }
  };

  const updateUserProfile = async (updates: Partial<User>) => {
    if (auth_state.user) {
      dispatch(updateUser(updates));
      // Also update in Firestore
      try {
        await setDoc(
          doc(db, 'users', auth_state.user.uid),
          { ...auth_state.user, ...updates },
          { merge: true }
        );
      } catch (error) {
        console.error('Error updating user profile:', error);
      }
    }
  };

  return {
    ...auth_state,
    login,
    signup,
    logout: logoutUser,
    updateUserProfile,
  };
};

export default useAuth;
