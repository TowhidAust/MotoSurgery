import {NativeStackScreenProps} from '@react-navigation/native-stack';

// ---- (HOME SCREEN) PACKAGE LIST ------
export interface packageFeatures {
  id: string;
  title: string;
  description: string;
}
export interface servicePakage {
  id: string;
  title: string;
  price: number;
  description: String;
  features: packageFeatures[];
}

// ----- API RESPONSE TYPES ------

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
    features: packageFeatures[];
  };
};

export type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'HomeScreen'
>;
export type PackageScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'PackageDetails'
>;
