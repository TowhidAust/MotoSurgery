import {NativeStackScreenProps} from '@react-navigation/native-stack';

// ---- (HOME SCREEN) PACKAGE LIST ------
export interface PackageFeatures {
  id: string;
  title: string;
  description: string;
}
export interface ServicePakage {
  id: string;
  title: string;
  price: number;
  description: String;
  features: PackageFeatures[];
}
export interface Slot {
  date: Date;
  startTime: string;
  endTime: string;
}
// ---- REACT NAVIGATION TYPES -----
export type RootTabParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  PackageDetails: {
    packageId: string;
    title: string;
    features: PackageFeatures[];
  };
  Booking: undefined;
};

// Passing proptypes to screen components
export type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'HomeScreen'
>;

export type PackageScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'PackageDetails'
>;

// React Native Calendar Types
