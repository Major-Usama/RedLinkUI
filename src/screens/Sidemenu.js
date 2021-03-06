import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
} from 'react-native';

import { connect } from 'react-redux';
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

function Sidemenu({lang}) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#16AAC0"
        translucent={true}
      />


      <View style={styles.boxContainer}>

      <View style={styles.login}>
    <Text style={styles.loginText}>{lang ? "تسجيل الدخول":"Login"}</Text>


      </View>

      <View style={styles.login}>
    <Text style={styles.loginText}>{lang ? "القائمة 2":"Menu 2"}</Text>


      </View>


      <View style={styles.login}>
    <Text style={styles.loginText}>{lang ? "القائمة 2":"Menu 2"}</Text>


      </View>

      </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

container:
{
    flex:1,
    paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,
    backgroundColor:'#16AAC0'
},

boxContainer:
{
    marginTop:HEIGHT*0.12,

},

login:
{
    width:WIDTH-20,
    padding: 16,
    alignSelf:'center',
    backgroundColor:'#ffffff',
    borderRadius:12,
    flexDirection:'row-reverse',
    marginBottom:14,
},

loginText:
{
    color:'#C2D8D6',
    fontSize:24,
}

})

function mapStateToProps(state) {
  return { lang: state.Reducer };
}

export default connect(mapStateToProps)(Sidemenu)