import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import HomeScreeen from "./home";
import Homes from ".";
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default function RootLayout() {
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerBackground: () => {
            return (<LinearGradient
              colors={['#7DD49E', '#2CB398']}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 0, y: 1 }}
            />)
          },
          headerLeft: (props) => {
            return (
              <Feather name="menu" size={24} color="black" backgroundColor='white'
                style={{
                  marginLeft: 10,
                  padding: 5,
                  borderRadius: 5
                }}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />)
          },

        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Homes',
            title: 'Homes',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
