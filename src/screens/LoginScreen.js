import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
  Image,
  Switch,
  TextInput,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

class LoginScreen extends Component {
  constructor(props){
   super(props);
   this.state={
     value:"",
     pass:'',

    }
  }
  render(){
    const {value,pass}= this.state
    const {lang} = this.props
    console.log("language:",lang);
  return (      
      <LinearGradient  start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.2 }} style={styles.container} colors={['#1FC191', '#1AB5A9', '#16ABBC']} >
       <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor='#19B3AD'
        translucent={true}
        
      />

      <View style={styles.headerContainer}>
      <View/>
      <Text style={styles.login}>{lang ? "تسجيل الدخول":"Login"}</Text>
      <AntDesign name="arrowright" size={30} color="#DBF4F1"/>

      </View>

      <View style={styles.bottomContainer}>
      <Text style={{...styles.login,fontSize:29,color:'#55807D'}}>{lang ? "تسجيل الدخول":"Login"}</Text>

      <View style={styles.usernameContainer}>

      <TextInput
      placeholder={lang ? "اسم االمستخدم":"username"}
      style={{width:WIDTH-20,paddingLeft:20
      }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
      </View>
      <View style={{...styles.usernameContainer,color:'black',marginTop:HEIGHT*0.04}}>
      <TextInput
      placeholder={lang ? "كلمه السر":"password"}
      secureTextEntry={true}
      style={{width:WIDTH-20,paddingLeft:20
      }}
      onChangeText={text => setPass(text)}
      value={pass}
    />
      </View>
      <View style={{alignSelf:'flex-end',marginTop:10,alignItems:'center',flexDirection:'row'}}>
        <Text style={{paddingHorizontal:15,fontSize:16}}>{lang ? "Change Language" :"تغيير اللغة"}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={"#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={this.props.toogleButtonAction}
        value={lang}
      />
      </View>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}>
      <View style={styles.loginButton}>
        <Text style={styles.loginText}>{lang ? "تسجيل الدخول":"Login"}</Text>
      </View>
      </TouchableOpacity>

      </View>
</LinearGradient>    
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#EFF2F9',
  },
      
  login:
  {
    alignSelf:'center',
    fontSize:21,
    color:'#DBF4F1'
  },

  headerContainer:
  {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20,
    marginTop:10
  },

  bottomContainer:
  {
    backgroundColor:'#E7F7F7',
    flex:1,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    marginTop:8,
    paddingTop:HEIGHT*0.12
    

  },
  usernameContainer:
  {
    width:WIDTH-20,
    height:HEIGHT*0.055,
    backgroundColor:"#ffffff",
    borderRadius:10,
    alignSelf:'center',
    marginTop:HEIGHT*0.08
  },

  loginButton:
  {
    width:148,
    height:45,
    borderRadius:10,
    backgroundColor:'#21C38D',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginTop:HEIGHT*0.08
  },

  loginText:
  {
    color:'#ffffff'
  }
  
});

const mapStateToProps =(state)=>{
  console.log("language",state);
  return { lang: state.Reducer };
} 

const mapDispatchToProps = (dispatch) => {
    return {
      toogleButtonAction: () => 
      dispatch({
        type: 'TOOGLE_BUTTON',
      })
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);