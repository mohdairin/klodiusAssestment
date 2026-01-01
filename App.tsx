import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/AuthContext';
import LoginScreen from './screens/LoginScreens';
import SignupScreen from './screens/SignupScreens';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#6200ee',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          // options={{ title: 'Login' }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
          // options={{ title: 'Sign Up' }}
          />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
          // options={{ title: 'Home' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}