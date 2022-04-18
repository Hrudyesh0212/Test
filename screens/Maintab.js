import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './Profile';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const Maintab = () => {
 return(
  <Tab.Navigator shifting={true}
  initialRouteName="Feed"
  activeColor="#ffff"
  
>
  <Tab.Screen
    name="Feed"
    component={HomeStackScreen}
    options={{
      tabBarLabel: 'Home',
      tabBarColor:'#009387',
      tabBarIcon: ({ color }) => (
        <Icon name="ios-home" name="home" color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="Notifications"
    component={DetailsStackScreen}
    options={{
      tabBarLabel: 'Updates',
      tabBarColor:'#1f65ff',
      tabBarIcon: ({ color }) => (
        <Icon name="ios-notifications"  color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen  
    name="Profile"
    component={ProfileStackScreen}
    options={{
      tabBarLabel: 'Profile',
      tabBarColor:'#694fad',
      tabBarIcon: ({ color }) => (
        <Icon name="ios-person"  color={color} size={26} />
      ),
    }}
  />
</Tab.Navigator>
 );
};
const HomeStackScreen = ({ navigation }) => {
    return (
      <HomeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <HomeStack.Screen name="Home" component={HomeScreen}  options={{
          headerLeft: () => (
            <AntDesign name="menu-fold" size={25}
              backgroundColor='#009387'  onPress={() => { navigation.openDrawer(); }}
            />
          )
        }} />
      </HomeStack.Navigator>
    );
  }
  const DetailsStackScreen = ({ navigation }) => {
    return (
      <DetailsStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
          headerLeft: () => (
            <AntDesign name="menu-fold" size={25}
              backgroundColor='#1f65ff' onPress={() => { navigation.openDrawer(); }}
            />
          )
        }} />
      </DetailsStack.Navigator>
    );
  }
  
  const ProfileStackScreen = ({ navigation }) => {
    return (
      <ProfileStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#694fad',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
          headerLeft: () => (
            <AntDesign name="menu-fold" size={25}
              backgroundColor='#694fad' onPress={() => { navigation.openDrawer(); }}
            />
          )
        }} />
      </ProfileStack.Navigator>
    );
  }
  
  
  export default Maintab;