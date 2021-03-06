import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView from 'react-native-maps';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export default function HomeScreen({navigation}) {
    
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0.5, y: 0.2}}
      style={styles.container}
      colors={['#1FC191', '#1AB5A9', '#16ABBC']}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#19B3AD"
        translucent={true}
      />

      <View style={styles.headerContainer}>
        <View />
        <Image source={require('../images/logo.png')} />
        <MaterialCommunityIcons
          onPress={()=>navigation.openDrawer()}
          name="microsoft-xbox-controller-menu"
          size={40}
          color="#DBF4F1"
        />
      </View>
        
    <View style={{flex:1,borderTopLeftRadius:60,overflow:'hidden'}}>

    <MapView
        
        style={{flex:1, ...StyleSheet.absoluteFillObject,}}
        region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
      >
      </MapView>

    </View>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#EFF2F9',
  },

  login: {
    alignSelf: 'center',
    fontSize: 21,
    color: '#DBF4F1',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  
});
