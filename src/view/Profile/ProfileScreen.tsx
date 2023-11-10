import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  LaunchingScreen: undefined;
  SignInSignUp: undefined;
  SignUp: undefined;
  Home: undefined;

  CustomerSupportScreen: undefined;
  ChangePasswordScreen: undefined;

  FirstOnboardingScreen: undefined;
  SecondOnboardingScreen: undefined;
  ThirdOnboardingScreen: undefined;
  FourthOnboardingScreen: undefined;

  // Add other screen names here as needed
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignInSignUp'>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}


const ProfileScreen: React.FC<Props> = ({navigation}) => {
    const deviceWidth = Dimensions.get('window').width;
    const borderRadiusPercentage = 50; // 10% (adjust this value as needed)
  
    // Calculate the borderRadius in pixels based on the percentage
    const borderRadiusPixel = (deviceWidth * borderRadiusPercentage) / 100;
  
    const handleReport = () => {
      // Implement your login logic here
      navigation.navigate('CustomerSupportScreen');
    };

    const handleChangePassword = () => {
      // Implement your login logic here
      navigation.navigate('ChangePasswordScreen');
    };

  return (
    <View style={styles.container}>
      {/* Top Navbar */}
      <View style={styles.topNavbar}>
        <TouchableOpacity>
          <Image source={require('../../../assets/images/ArrowLeftShort.png')} style={styles.backButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/images/BoxArrowRight.png')} style={styles.logoutButton} />
        </TouchableOpacity>
      </View>

      {/* User Image */}
      
      <View style={styles.userImageContainer}>
        <TouchableOpacity>
            <Image source={require('../../../assets/images/MonaLisa.png')} style={[styles.userImage, { borderRadius: borderRadiusPixel }]} />
        </TouchableOpacity>
      </View>

      {/* User Details */}
      <View style={styles.userDetailsContainer}>
        <Text style={styles.label}>Username</Text>
        <View style={styles.textFieldContainer}>
          <TextInput
            placeholder="Enter username"
            placeholderTextColor="white"
            style={styles.textField}
          />
          <Image source={require('../../../assets/images/PencilFill.png')} style={styles.pencilIcon} />
        </View>

        <Text style={[styles.label, { marginTop: 15 }]}>Email</Text>
        <View style={styles.textFieldContainer}>
          <TextInput
            placeholder="Enter email"
            placeholderTextColor="white"
            style={styles.textField}
          />
          <Image source={require('../../../assets/images/PencilFill.png')} style={styles.pencilIcon} />
        </View>

        <Text style={[styles.label, { marginTop: 15 }]}>Mobile</Text>
        <View style={styles.textFieldContainer}>
          <TextInput
            placeholder="Enter phone number"
            placeholderTextColor="white"
            style={styles.textField}
          />
          <Image source={require('../../../assets/images/PencilFill.png')} style={styles.pencilIcon} />
        </View>
      </View>

      {/* Support and Update Password */}
      <View style={styles.supportUpdateContainer}>
        <TouchableOpacity onPress={handleReport}>
          <Image source={require('../../../assets/images/Headset.png')} style={styles.tabIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChangePassword}>
          <Text style={styles.updatePasswordLink}>Update Password?</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242428',
    },
    topNavbar: {
      backgroundColor: '#646465',
      paddingTop: 40,
      paddingBottom: 20,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    backButton: {
      width: 24,
      height: 24,
      tintColor: '#FFDD95',
    },
    logoutButton: {
      width: 24,
      height: 24,
      tintColor: '#FFDD95',
    },
    userImageContainer: {
      marginTop: 50,
      alignItems: 'center',
    },
    userImage: {
      width: 200,
      height: 200,
      backgroundColor: '#FFDD95',
    },
    userDetailsContainer: {
      marginTop: 50,
      paddingHorizontal: 20,
    },
    label: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 24, 
    },
    textFieldContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#646465',
      borderRadius: 8,
      borderWidth: 1,
      marginTop: 6,
      paddingVertical: 10, // Add vertical padding
    paddingHorizontal: 15, 
    },
    textField: {
      flex: 1,
      color: 'white',
      padding: 10,
      fontSize: 16,
    },
    pencilIcon: {
      width: 20,
      height: 20,
      tintColor: '#FFDD95',
      marginRight: 10,
    },
    supportUpdateContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      paddingHorizontal: 20,
    },
    updatePasswordLink: {
      color: '#FFDD95',
    },
    bottomTabNav: {
        backgroundColor: '#646465',
        paddingTop: 20,
        paddingBottom: 40,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      },
    tabIcon: {
      width: 24,
      height: 24,
      tintColor: '#FFDD95',
    },
  });
  