import React from 'react';
import HomeScreen from './index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './profile';
import DrawerIcon from '@/components/navigation/drawerIcon';
import LinearGradient from 'react-native-linear-gradient';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';



export default function TabLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'overview',
        }}
      />
    </GestureHandlerRootView>

  );
}
