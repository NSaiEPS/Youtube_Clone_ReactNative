import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useReducer, useRef, useState } from 'react'
import Header from '../Components/Header'
import Icon from 'react-native-vector-icons/FontAwesome5';
import SideBar from '../Components/SideBar';
import VideoCart from '../Components/VideoCart';
import { useSelector } from 'react-redux';
import { SelectThemeAction } from '../Components/Redux copy/Redux_Slice';


const HomeScreen = ({navigation}) => {
  useLayoutEffect(()=>{
    navigation.setOptions({headerShown: false})
  },[])
  let [sidebarmoreContent,setsidebarmoreContent]=useState(false)


const scrollRef = useRef();
const [scrolToTopCheck, setscrolToTopCheck]=useState(false)
// let selectReducer=useSelector(state=>state.info.state)
// console.log(selectReducer)
let selectThemeAction=useSelector(SelectThemeAction)

const onPressTouch = () => {
  
  scrollRef.current?.scrollTo({
    y: 0,
    animated: true,
  });

  if(scrolToTopCheck){

  }
    else {
  scrollRef.current?.scrollToEnd({ animated: true });}
}



let handleScroll=(e)=>{
  let scrolYval=(e.nativeEvent.contentOffset.y)
  
  if(scrolYval>1500){
    setscrolToTopCheck(true)
  }
  else {
    setscrolToTopCheck(false)
  }

}
  return (
    <SafeAreaView>
         {
            Platform.OS !== "ios" &&
         <StatusBar
        translucent={false}
        backgroundColor='red'
        barStyle={"light-content"}
        // barStyle={statusColor ? "light-content" : "dark-content"}
      />}

      <View>

      <Header navigation={navigation}
      setsidebarmoreContent={setsidebarmoreContent}
      sidebarmoreContent={sidebarmoreContent}
      />
      </View>
{
  !sidebarmoreContent &&

      <View style={[styles.ontouchScroll,{

      }]}   >
        <TouchableOpacity onPress={onPressTouch}>
        <Text style={{alignSelf:'center', color:'red'}} >
          
<Icon  name= {scrolToTopCheck ? 'angle-double-up': 'angle-double-down'} color='white'  size={35}/>
        </Text>
        </TouchableOpacity>

      </View>}

      <View>
        {sidebarmoreContent ?
        <View style={styles.sidebarComponenent}>
          <SideBar />
          </View>:


          <View style={[,styles.homeScreen,{
            backgroundColor:selectThemeAction ?'white':'black'
            
          }]}>
      <VideoCart navigation={navigation}/>

            </View>
            
            
            
            }
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  ontouchScroll:{
    borderColor:'white',
    borderWidth:3,
    position:'absolute',
    
    bottom:125,
    right:10,
    backgroundColor:'#102041',
    elevation:3,
    zIndex:3,
    width:70,
    height:70,
    borderRadius:40,
    display:'flex',
    // alignContent:'center',
    justifyContent:'center',
    // alignSelf:'center'

  },
  sidebarComponenent:{
    marginBottom:100
  },
  homeScreen:{
    // backgroundColor:"black"
  }
})