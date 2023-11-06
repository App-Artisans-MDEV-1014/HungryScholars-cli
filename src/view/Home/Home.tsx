import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Home() {
  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        // Successfully signed out
        console.log('User signed out');
      })
      .catch(error => {
        // Handle sign-out errors
        console.error('Sign-out error:', error);
      });
  };

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
}
