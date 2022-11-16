
import React, { useEffect, useState } from 'react';
import {

  Image,
  StyleSheet,
  Text,

  View,
} from 'react-native';




const App= () => {
  let [splashScreen,setsplashScreen]=useState(true)
  useEffect(()=>{
setTimeout(() => {
  setsplashScreen(false)
  
}, 2000);
  },[])

if(splashScreen){
  return(
    <View 
    style={{
      justifyContent:'center',
      flex:1,
      // backgroundColor:"green"
    }}
    >
      <View style={{
        display:'flex',
        justifyContent:'center',
        width:'100%',
        height:'100%',
        // backgroundColor:'red',
        alignSelf:'center',
        
      }}>
    <Image 
  source={require('./Constants/YouTube_SPlashScreeen..jpg')}
  // source={require('./Constants/splash.jpg')}
    style={{
      width:'100%',
      height:'100%',
      // width:'85%',
      //     height:'85%',
        
        // borderRadius:150,
        resizeMode: 'contain'
        
        
        
    }}
    />
    </View>
    </View>)
}
  return (
    <View>
      <Text>Thank you Jesus for this..</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
