import React from 'react';
import {StyleSheet} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen'
import Navigation from './src/navigations/Navigation';
import 'react-native-gesture-handler';


export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({});
