import React from 'react';
import {StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/Store/Store';
import Navigation from './src/navigations/Navigation';
import 'react-native-gesture-handler';


export default function App() {
  return( 
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

const styles = StyleSheet.create({});
