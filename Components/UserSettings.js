import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CancelIcon from 'react-native-vector-icons/Fontisto';
import ToggleIcon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { modelOpenAction, SelectThemeAction, themeAction } from './Redux copy/Redux_Slice';
import { Avatar, Button } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import TimeIcon from 'react-native-vector-icons/Entypo';
import ThemeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemesIcon from 'react-native-vector-icons/Foundation';





const UserSettings = ({navigation}) => {
    let dispatch=useDispatch()
let selectThemeAction=useSelector(SelectThemeAction)

let [themesOpen,setThemesOpen]=useState(false)


  let handleLogout=()=>{

    Alert.alert('Warning','Are you sure to Logout!',[

      {text:"Yes",
      onPress:()=>{ auth().signOut().then(()=>{
        navigation.replace("Login")
      })},
      style:'cancel'
      },
      {text:"No",
      // onPress:()=>alert('Cancelled deleting'),
      style:'default'
      },
      
      
      ],
      {cancelable:true}
          )

   
  }
  return (
    <View style={[styles.centered_view,{
        backgroundColor:selectThemeAction ?'white':'black'

    }]} >
        <View style={styles.userSettingsInside}>

        <View >
        <CancelIcon 
        onPress={()=>{
            dispatch(modelOpenAction(false))

        }}
         name='close-a' color={selectThemeAction ?'black':'white'}  size={25}/>

        </View>

        <View style={styles.userSettingsInsideUserDetails}>
            
        <View style={{
            width:'15%'
        }}>
            <Avatar
         size="small"
        rounded 
        title={`${auth()?._user?.displayName[0].toUpperCase()}`}
       
        
        activeOpacity={0.7}
        titleStyle={{
        //   color:'#070124',
          color:selectThemeAction ?'white':'#070124',
          fontWeight:'900'
        }}
        containerStyle={{
          backgroundColor:selectThemeAction ?'black':'white'
        }}
        />
            </View>
            <View style={{
            width:'50%'
        }}>
                <View>
                     <Text style={[styles.userSettingsInsideText,{
                        color:selectThemeAction ?'black':'white'
                     }]}> {auth()?._user?.displayName}</Text> 
                     </View>
                <View> 
                    <Text style={[styles.userSettingsInsideText,{
                        color:selectThemeAction ?'black':'white'
                    }]}> {auth()?._user?.email}</Text>
                     </View>
            </View>
            <View style={{
            width:'30%'
        }}>
            <Button 
          title='Logout'
          onPress={handleLogout}
          containerStyle={{
            marginTop:5,
            width:'95%',
            marginLeft:'auto',
            marginRight:'auto'
          }}
          />
            </View>
            </View>

         
<TouchableOpacity style={styles.userSettingsInsideUserDetails}
onPress={()=>{
    setThemesOpen(!themesOpen)
}}
>
<View style={{
            width:'15%'}}>
    <Text style={[styles.userSettingsInsideText,{
        color:selectThemeAction ?'black':'white'
    }]}>
        {/* <ToggleIcon 
       
         name='toggle-on' color={selectThemeAction ?'black':'white'}  size={25}/> */}

           <ThemeIcon 
       
         name='theme-light-dark' color={selectThemeAction ?'black':'white'}  size={25}/>
         
         </Text>
         </View>
         <View style={{width:'50%'}}>
            <View>

         <Text style={[styles.userSettingsInsideText,{
            color:selectThemeAction ?'black':'white'
         }]}>
            Themes
         </Text>
         </View>
         {themesOpen &&
         
         <TouchableOpacity style={styles.userSettingsInsideThemesInside}>
           <TouchableOpacity style={styles.userSettingsInsideThemesInsideTexts}
           onPress={()=>{ dispatch( themeAction(true ) )}}
           >
           <View style={{width:'25%',alignSelf:'center',marginLeft:5}}>
            <ThemesIcon 
       
       name='lightbulb' color={'white'}  size={25}/>
            </View>

            <View style={{alignSelf:'center'}}>
          
                 <Text style={[styles.userSettingsInsideText,{
                    color:'white'
                 }]}>Light Mode  {selectThemeAction && ('(Active)')}</Text>
                 </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.userSettingsInsideThemesInsideTexts}
            onPress={()=>{ dispatch( themeAction(false ) )}}
            >
            <View style={{width:'25%',alignSelf:'center',marginLeft:5}}>
            <ThemesIcon 
       
       name='lightbulb' color='black'  size={25}/>
            </View>

            <View style={{alignSelf:'center'}}>
          
                 <Text style={[styles.userSettingsInsideText,{
                    color:'white'
                 }]}>Dark Mode  {!selectThemeAction && ('(Active)')}</Text>
                 </View>
            </TouchableOpacity>
            </TouchableOpacity>
         }
         </View>




</TouchableOpacity>

<TouchableOpacity style={styles.userSettingsInsideUserDetails}

onPress={()=>{
    navigation.navigate('History')
    dispatch(modelOpenAction(false))

  }}
>
<View style={{
            width:'15%'}}>
    <Text style={[styles.userSettingsInsideText,{
        color:selectThemeAction ?'black':'white'
    }]}>
    <TimeIcon  


name='back-in-time' color={selectThemeAction ?'black':'white'}  size={25}/>
         </Text>
         </View>

    <Text style={[styles.userSettingsInsideText,{
        color:selectThemeAction ?'black':'white'
    }]}
  
    
    >History</Text>

</TouchableOpacity>
     
    </View>
    </View>
  )
}

export default UserSettings

const styles = StyleSheet.create({
    centered_view: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
       
        // width:'90%'
      },
      dropdownIconView:{
        position:'absolute',
        right:19,
        top:25
      },
      userSettingsInside:{
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:25
      },
      userSettingsInsideUserDetails:{
        width:"95%",
        marginLeft:'auto',
        marginRight:'auto',
        flexDirection:'row',
        // backgroundColor:'red',
        marginTop:25,
      },
      userSettingsInsideText:{
        color:'white'
      },
      userSettingsInsideThemesInside:{
        backgroundColor:'blue',
        width:'120%',
        marginTop:10
      },
      userSettingsInsideThemesInsideTexts:{
        flexDirection:'row',
       height:50,
       borderColor:'red',
       borderWidth:1,
    //    justifyContent:'center'


      }
})