import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  LaunchingScreen: undefined;
  SignInSignUp: undefined;
  SignUp: undefined;

  FirstOnboardingScreen: undefined;
  SecondOnboardingScreen: undefined;
  ThirdOnboardingScreen: undefined;
  FourthOnboardingScreen: undefined;
  RestaurantMenuScreen: undefined;

  // Add other screen names here as needed
};

type LaunchingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LaunchingScreen'>;

interface Props {
  navigation: LaunchingScreenNavigationProp;
}

const LaunchingScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    // Simulate loading time for demonstration purposes
    const fakeLoadingTime = 6000; // 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('FirstOnboardingScreen');
    }, fakeLoadingTime);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/RENDER.gif')} style={styles.logo1} resizeMode="contain" />
      {/* Add any loading animation or branding elements */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242428',
  },
  logo1: {
    width: 500,
    height: 890,
    marginBottom: 20,
  },

});

export default LaunchingScreen;
