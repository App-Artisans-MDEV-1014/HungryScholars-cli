import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

interface Props {
  navigation: any; // Replace 'any' with the correct navigation prop type
}

const FourthOnboardingScreen: React.FC<Props> = ({navigation}) => {
  const handleLoginButtonPress = () => {
    // Navigate to the login screen
    navigation.navigate('LoginScreen');
  };

  const handleSignupButtonPress = () => {
    // Navigate to the signup screen
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ready to Go</Text>
      {/* Add your content for the fourth onboarding screen here */}
      <Image source={require('../../assets/images/img-fourthonboardingscreen.png')} style={styles.image} resizeMode="contain" />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignupButtonPress}>
          <ImageBackground
            source={require('../../assets/images/signup-img.png')}
            style={styles.imageButton}
            resizeMode="contain"
          >
            {/* Add any text or other components on the image button */}
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLoginButtonPress}>
          <ImageBackground
            source={require('../../assets/images/login-img.png')}
            style={styles.imageButton}
            resizeMode="contain"
          >
            {/* Add any text or other components on the image button */}
          </ImageBackground>
        </TouchableOpacity>
      </View>
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
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
    marginTop:20
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
  imageButton: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default FourthOnboardingScreen;
