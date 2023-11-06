import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';

import HomeScreen from './src/view/Home/Home';
import RestaurantCard from './src/view/RestaurantCard/RestaurantCard';
import PaymentMethodSection from './src/view/PaymentMethod/PaymentMethodSection';
import CheckoutScreen from './src/view/Checkout/CheckoutScreen';
import ProfileScreen from './src/view/Profile/ProfileScreen';
import Item from './src/view/Item/Item';
import StarRating from './src/view/StarRating/StarRating';
import LaunchingScreen from './src/view/LaunchingScreen/LaunchingScreen';
import { Text, View } from 'react-native';
import LoginScreen from './src/view/auth/LoginScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import RegisterScreen from './src/view/auth/RegisterScreen';



const Tab = createBottomTabNavigator();
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
    <NavigationContainer  >
      {user ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: 'bold',
            },
            tabBarStyle: {
              backgroundColor: 'white',
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="RestaurantCard" component={RestaurantCard} />
          <Tab.Screen name="PaymentMethod" component={PaymentMethodSection} />
          <Tab.Screen name="Checkout" component={CheckoutScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Item" component={Item} />
          <Tab.Screen name="StarRating" component={StarRating} />
          <Tab.Screen name="Launching" component={LaunchingScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
     

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Define other screens here if needed */}
      </Stack.Navigator>
        
  
      )}
    </NavigationContainer>
  );
}

export default App;
