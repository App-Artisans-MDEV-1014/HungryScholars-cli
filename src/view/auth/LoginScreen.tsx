import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';


const LoginScreen: React.FC = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
const navigation = useNavigation();
  const handleRegister = () => {
    navigation.navigate('Register');
  }
  const handleLogin = async () => {
    try {
      setError(null);
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in:', userCredential.user);
        navigation.navigate('Home');
    } catch (e) {
      setError(e.message);
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" 
onPress={handleRegister}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
