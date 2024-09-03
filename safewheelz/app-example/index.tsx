
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {
  createDrawerNavigator,
  type DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  type DrawerScreenProps,
} from '@react-navigation/drawer';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CompositeScreenProps } from '@react-navigation/native';
import {
  Image,
  StyleSheet,
  Appearance,
  I18nManager,
  Linking,
  Platform,
  ScrollView,
  StatusBar,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const Drawer = createDrawerNavigator();

import ProfileScreen from './profile';


export default function HomeScreen() {
  return (
    <></>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
