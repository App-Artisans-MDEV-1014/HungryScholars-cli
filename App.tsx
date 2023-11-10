import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

import RestaurantMenuScreen from './src/view/Menu/RestaurantMenuScreen';
import HomeScreen from './src/view/Home/Home';
import PaymentMethodSection from './src/view/PaymentMethod/PaymentMethodSection';
import CheckoutScreen from './src/view/Checkout/CheckoutScreen';
import ProfileScreen from './src/view/Profile/ProfileScreen';
import Item from './src/view/Item/Item';
import StarRating from './src/view/StarRating/StarRating';
import LaunchingScreen from './src/view/LaunchingScreen/LaunchingScreen';
import LoginScreen from './src/view/auth/LoginScreen';
import RegisterScreen from './src/view/auth/RegisterScreen';
import FirstOnboardingScreen from './src/view/Onboarding/FirstOnboardingScreen';
import SecondOnboardingScreen from './src/view/Onboarding/SecondOnboardingScreen';
import ThirdOnboardingScreen from './src/view/Onboarding/ThirdOnboardingScreen';
import FourthOnboardingScreen from './src/view/Onboarding/FourthOnboardingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

  const TabNavigator = () => (
    <Tab.Navigator
   
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarActiveTintColor: '#FFDD95',
        tabBarInactiveTintColor: 'white',
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'RestaurantMenuScreen') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'Checkout') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else {
            iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#646465',
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="RestaurantMenuScreen" component={RestaurantMenuScreen} />
      <Tab.Screen name="Checkout" component={CheckoutScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LaunchingScreen"
      screenOptions={{
        headerShown:false
      }}>
  {user ? (
    <>
      <Stack.Screen 
        name="LaunchingScreen" 
        component={LaunchingScreen} 
      />
      <Stack.Screen 
        name="FirstOnboardingScreen" 
        component={FirstOnboardingScreen} 
      />
      <Stack.Screen 
        name="SecondOnboardingScreen" 
        component={SecondOnboardingScreen} 
      />
      <Stack.Screen
        name="ThirdOnboardingScreen" 
        component={ThirdOnboardingScreen} 
      />
      <Stack.Screen 
        name="FourthOnboardingScreen" 
        component={FourthOnboardingScreen} 
      />
      <Stack.Screen
        name="Home"
        component={TabNavigator}  
      />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethodSection}
        options={{
          headerStyle: { backgroundColor: 'transparent' },
        }}
      />
      <Stack.Screen
        name="Item"
        component={Item}
        options={{
          headerStyle: { backgroundColor: 'transparent' },
        }}
      />
      <Stack.Screen
        name="StarRating"
        component={StarRating}
        options={{
          headerStyle: { backgroundColor: 'transparent' },
        }}
      />
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerStyle: { backgroundColor: 'transparent' },
        }}
      />
        <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerStyle: { backgroundColor: 'transparent' },
        }}
      />
    </>
  ) : (
    <>
    <Stack.Screen 
        name="LaunchingScreen" 
        component={LaunchingScreen} 
      />
      
      <Stack.Screen 
        name="FirstOnboardingScreen" 
        component={FirstOnboardingScreen} 
      />
      <Stack.Screen 
        name="SecondOnboardingScreen" 
        component={SecondOnboardingScreen} 
      />
      <Stack.Screen
        name="ThirdOnboardingScreen" 
        component={ThirdOnboardingScreen} 
      />
      <Stack.Screen 
        name="FourthOnboardingScreen" 
        component={FourthOnboardingScreen} 
      />
      

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerStyle: { backgroundColor: 'transparent' },
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerStyle: { backgroundColor: 'transparent' },
        }}
      />
    </>
  )}
</Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
