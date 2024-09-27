import {NativeStackScreenProps} from '@react-navigation/native-stack';

// ---- (HOME SCREEN) PACKAGE LIST ------
export interface packageFeatures {
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
// types.ts
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
    features: any[];
  };
};

export type PackageProps = NativeStackScreenProps<
  HomeStackParamList,
  'PackageDetails'
>;
