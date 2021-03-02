import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DrawerContent from './DrawerContent';


const Drawer = createDrawerNavigator();
export default function Drawers() {
    return (
        <Drawer.Navigator initialRouteName="HomeScreen"  drawerContent={ props => <DrawerContent {...props} />}> 
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />          
        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({})
