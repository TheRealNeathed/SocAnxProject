import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
import {Audio} from 'expo-av';
import db from '../config';
import firebase from 'firebase';



export default class CalmScreen extends Component{
  constructor(){
    super();
    this.state={
     
    }
  }
  

    playSound = async () => {
      await Audio.Sound.createAsync(
        { uri: 'https://www.soundjay.com/button/sounds/beep-02.mp3' },
        {shouldPlay: true }
      )


  }

  render(){
    return(
      <View style={styles.container}>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>

        </View>
          <TouchableOpacity style={styles.SoundButton} onPress = {this.playSound}>
            <Text>Play Sound</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Calm</Text>
          <TouchableOpacity style={styles.ImageButton}>
            <Text>Next Image</Text>
          </TouchableOpacity>
 
         
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#F8BE85',
   alignItems: 'center',
   justifyContent: 'center'
 },
 profileContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
 },
 title :{
   fontSize:65,
   fontWeight:'300',
   paddingBottom:30,
   color : '#ff3d00'
 },
 loginBox:{
   width: 300,
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   paddingLeft:10
 },
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#ff5722',
   margin:50
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 registerButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:10,
   marginTop:30
 },
 registerButtonText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold'
 },
 SoundButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
 },

 ImageButton:{
   width:300,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"#ff9800",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'200',
   fontSize:20
 }
})
