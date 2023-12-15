import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../Context/AuthProvider'; 

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();
  const { signIn } = useAuth(); // Use the signIn function from AuthProvider

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = async () => {
    try {
      setError(null);
      await signIn(email, password);
      // Additional actions after successful login
      console.log('User logged in:', email);
      navigation.navigate('Home');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <Image source={require('../../../assets/APP_logo_lg.png')} style={styles.logo} resizeMode="contain" />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#FFDD95"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#FFDD95"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.createAccountText}>Don't have an account? Create One</Text>
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#FFDD95',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginVertical: 10,
    color: '#FFDD95',
  },
  button: {
    backgroundColor: '#FFDD95',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#242428',
    textAlign: 'center',
  },
  createAccountText: {
    color: '#FFDD95',
    marginTop: 20,
  },
});

export default LoginScreen;