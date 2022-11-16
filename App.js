
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {

  Image,
  StyleSheet,
  Text,

  View,
} from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';



const Stack = createNativeStackNavigator();

// const colorScheme = Appearance.getColorScheme();
// if (colorScheme === 'dark') {
//   // Use dark color scheme
//   alert("dark mode on")
// }

const globalScreenOptions={
  headerStyle:{
    backgroundColor:"#ffffff",
    
    

  
  },
    headerTitleStyle:{
      color:'white',
      
    },
    headerTintColor:"white",
    headerTitleAlign: 'center',
   

  }

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
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName="Login" screenOptions={globalScreenOptions}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Tables" component={TablesInfoScreen} /> */}
      {/* <Stack.Screen name="Admin" component={AdminDashBoard} /> */}
    </Stack.Navigator>
  </NavigationContainer>
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
