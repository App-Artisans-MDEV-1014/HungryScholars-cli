import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

interface Props {
  navigation: any; // Replace 'any' with the correct navigation prop type
}

const ThirdOnboardingScreen: React.FC<Props> = ({ navigation }) => {
  const handleNextButtonPress = () => {
    // Navigate to the fourth onboarding screen
    navigation.navigate('FourthOnboardingScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Skip the Waiting</Text>
      <Image source={require('../../assets/images/img-thirdonboardingscreen.png')} style={styles.image} resizeMode="contain" />

      <TouchableOpacity onPress={handleNextButtonPress}>
        <ImageBackground
          source={require('../../assets/images/img-nextbutton.png')}
          style={styles.button}
          resizeMode="contain"
        >
          {/* Add any text or other components on the image button */}
        </ImageBackground>
      </TouchableOpacity>
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFDD95',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  button: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop:100
  },
});

export default ThirdOnboardingScreen;