import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
//import { HomeScreen, SignInScreen, SignUpScreen, Screen} from './src/screens';
import HomeScreen from './src/screens/HomeScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import About from './src/screens/About';
import QuizScreen from './src/screens/QuizScreen';
import ArticleScreen from './src/screens/ArticleScreen';
import EventsScreen from './src/screens/EventsScreen';
import { QuizHomeScreen } from './src/screens';
import { QuizResultsScreen } from './src/screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { authenticatin } from './firebase/firebase-config';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='SignInScreen'>
      <Drawer.Screen name="SignUpScreen" component={SignUpScreen} />
      <Drawer.Screen name="SignInScreen" component={SignInScreen} />
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="QuizScreen" component={QuizScreen} />
      <Drawer.Screen name="About" component={About} /> 
      <Drawer.Screen name="ArticleScreen" component={ArticleScreen} />
      <Drawer.Screen name="EventsScreen" component={EventsScreen} />
      <Drawer.Screen name="QuizHomeScreen" component={QuizHomeScreen} />
      <Drawer.Screen name="QuizResultsScreen" component={QuizResultsScreen} />
      
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


