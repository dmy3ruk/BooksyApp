import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthProvider, { useAuth } from '@/providers/AuthProvider';
import SignIn from '@/app/SignIn';
import SignUp from '@/app/SignUp';
import HomeEmpty from '@/app/HomeEmpty';
import HomeTabs from './(tabs)/_layout'; // Імпорт з папки (tabs)

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="HomeEmpty" component={HomeEmpty} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  const { session } = useAuth();
  return session ? <HomeTabs /> : <AuthStack />;
}

export default function App() {
  return (
    <AuthProvider>
        <AppNavigator />
            </AuthProvider>
  );
}
