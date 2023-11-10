import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import RestaurantMenuScreen from './src/view/Menu/RestaurantMenuScreen';
import HomeScreen from './src/view/Home/Home';
import PaymentMethodSection from './src/view/PaymentMethod/PaymentMethodSection';
import CheckoutScreen from './src/view/Checkout/CheckoutScreen';
import ProfileScreen from './src/view/Profile/ProfileScreen';
import Item from './src/view/Item/Item';
import StarRating from './src/view/StarRating/StarRating';
import LaunchingScreen from './src/view/LaunchingScreen/LaunchingScreen';
import { Text, View } from 'react-native';
import LoginScreen from './src/view/auth/LoginScreen';
import RegisterScreen from './src/view/auth/RegisterScreen';


const Stack = createStackNavigator();

// Define the User type based on your project's Firebase user object structure
interface User {
  uid: string;
  email: string;
  // Add other properties as needed
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser as User); // Cast authUser to your defined User type
      } else {
        setUser(null);
      }
    });

    return unsubscribe; // Unsubscribe when the component unmounts
  }, []);

  return (
    <NavigationContainer>
   
      <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="RestaurantMenuScreen" component={RestaurantMenuScreen} />
            <Stack.Screen name="PaymentMethod" component={PaymentMethodSection} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Item" component={Item} />
            <Stack.Screen name="StarRating" component={StarRating} />
            <Stack.Screen name="Launching" component={LaunchingScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

export default App;
