import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../Context/AuthProvider';

const ProfileScreen = () => {
  const { user, signOut } = useAuth();
  const deviceWidth = Dimensions.get('window').width;
  const borderRadiusPercentage = 50;

  const [email, setEmail] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);

  const borderRadiusPixel = (deviceWidth * borderRadiusPercentage) / 100;
  const navigation = useNavigation();

  useEffect(() => {
    if (user) {
      setEmail(user.email || null);
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut();
      console.log('User signed out');
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navbar */}
      <View style={styles.topNavbar}>
        <TouchableOpacity
          onPress={() => {
            // Navigate back to the previous screen using navigation.goBack()
            navigation.goBack();
          }}
        >
          <Image source={require('../../../assets/images/ArrowLeftShort.png')} style={styles.backButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
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
        <Text style={[styles.label, { marginTop: 15 }]}>Email</Text>
        <View style={styles.textFieldContainer}>
          <TextInput
            value={email || ''}
            placeholder="Enter email"
            placeholderTextColor="white"
            style={styles.textField}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242428',
  },
  topNavbar: {
    backgroundColor: '#646465',
    paddingTop: 20,
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
    paddingVertical: 10,
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

export default ProfileScreen;
