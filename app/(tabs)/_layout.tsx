import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { Image, StyleSheet } from 'react-native';
import HomeScreen from '.';
import Library from './library';
import Search from './search';
import Profile from './Profile';

export default function TabLayout() {
 const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        flexDirection: "row",
        padding: 15,
        height: 73,
        backgroundColor: "#0A0C20",
        position: "absolute",
        width: "100%",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
      },
      headerShown: false,
      tabBarLabel: () => null
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require('../../assets/images/activeHome.png')
                : require('../../assets/images/home.png')
            }
            style={styles.icon} />
        ),
      }} />
      <Tab.Screen name="Library" component={Library} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require('../../assets/images/activeLibrary.png')
                : require('../../assets/images/library.png')
            }
            style={styles.icon} />
        ),
      }} />
      <Tab.Screen name="Search" component={Search} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require('../../assets/images/activeFind.png')
                : require('../../assets/images/find.png')
            }
            style={styles.icon} />
        ),
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require('../../assets/images/activeProfile.png')
                : require('../../assets/images/profile.png')
            }
            style={styles.icon} />
        ),
      }} />
    </Tab.Navigator>
  );
  
}
const styles = StyleSheet.create({
      icon: {
        width: 30,
        height: 30,
      },
    });
