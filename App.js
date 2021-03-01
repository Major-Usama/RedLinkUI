import React from 'react';
import {StyleSheet} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen'
import Navigation from './src/navigations/Navigation';
import 'react-native-gesture-handler';
import Drawers from './src/navigations/Drawer';

export default function App() {
  return <Drawers />;
}

const styles = StyleSheet.create({});
