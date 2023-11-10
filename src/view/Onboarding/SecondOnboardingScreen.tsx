import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

interface Props {
  navigation: any; // Replace 'any' with the correct navigation prop type
}

const SecondOnboardingScreen: React.FC<Props> = ({ navigation }) => {
  const handleNextButtonPress = () => {
    // Navigate to the third onboarding screen
    navigation.navigate('ThirdOnboardingScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order your favorite food</Text>
      <Image source={require('../../assets/images/img-secondonboardingscreen.png')} style={styles.image} resizeMode="contain" />

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

export default SecondOnboardingScreen;
