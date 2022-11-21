import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import ArrowLeftIcon from 'react-native-vector-icons/AntDesign';
import TimeIcon from 'react-native-vector-icons/Entypo';
import { Avatar, Button, Input } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { SelectSideBarOpen, SelectThemeAction, sideBarOpenAction, themeAction } from './Redux copy/Redux_Slice';




const Header = ({navigation,history}) => {
  // let [sidebarmoreContent,setsidebarmoreContent]=useState(false)
// let selectReducer=useSelector(state=>state.info.state)
// console.log(selectReducer)
// let selectTheme=useSelector(state=>state?.info?.themeWhite)
// console.log(selectTheme)
// console.log(auth()?._user?.email)
let selectThemeAction=useSelector(SelectThemeAction)
let selectSideBarOpen=useSelector(SelectSideBarOpen)

let dispatch=useDispatch()

  let [input, setInput]=useState({
    moreSearch:false,
    inputText:'',
    userMoreInfo:false

  })

  // console.log(auth()?._user?.displayName[0].toUpperCase())

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

  let handleDarkTheme=()=>{
    // alert('dark')
    dispatch(
      themeAction(
         false
       
    
       )
    
     )
    
}

let handleLightTheme=()=>{
    // alert('whitew')
    dispatch(  themeAction(
      true
    
 
    )
      )
  
    

}

  return (
    <View style={styles.header}>
      {!input.moreSearch ?
     
      <View style={styles.headerInside}>
        <View style={{
          alignSelf:'center'
        }}
        >
        <Icon  
onPress={()=>{
 dispatch(sideBarOpenAction(!selectSideBarOpen))

}}

name= {!selectSideBarOpen ? 'reorder-horizontal': 'align-horizontal-distribute'} color='white'  size={25}/>
        </View>
        <View style={{
          alignSelf:'center'
        }}
        >
        <SearchIcon  
onPress={()=>{
  setInput({
    ...input,
    moreSearch:true
  })

}}

name='search' color='white'  size={25}/>
        </View>
        <View style={styles.headerInsideModes}>
          <View style={{flexDirection:'row',justifyContent:'center'}}>

        <Avatar
         size={27}
        rounded 
        // title="MD"
        onPress={
          handleLightTheme

        }
        activeOpacity={0.7}
        titleStyle={{
          color:'#070124'
        }}
        containerStyle={{
          backgroundColor:selectThemeAction? 'yellow':'white',

          marginRight:4
          // size:25
        }}
        />

<Avatar
 size={27}

        rounded 
        // title="MD"
        onPress={handleDarkTheme}
        activeOpacity={0.7}
        titleStyle={{
          color:'#070124'
        }}
        containerStyle={{
          // backgroundColor:'white',
          backgroundColor:selectThemeAction? 'black':'yellow',
          borderColor:'white',
          borderWidth:0.5
        }}
        />
        </View>
        <View style={{marginTop:-5}}>

        <Text style={{
          color:'white',
          textAlign:"center"
        }}>
          {selectThemeAction ? 'light mode':'dark mode'}
        </Text>
        </View>
        </View>
    
        <View style={{
          alignSelf:'center',
          position:'relative'
        }}
        >
        <Avatar
         size="small"
        rounded 
        title={`${auth()?._user?.displayName[0].toUpperCase()}`}
        onPress={() => 
        setInput({
          ...input,
          userMoreInfo:!input.userMoreInfo
          
        })
        }
        activeOpacity={0.7}
        titleStyle={{
          color:'#070124',
          fontWeight:'900'
        }}
        containerStyle={{
          backgroundColor:'white'
        }}
        />
{

input.userMoreInfo &&
        <View style={[styles.avatarMoreInfo,{
           height: history ? 55:100,
           borderRadius:10
        }]}>
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
          {!history &&
          <Button 
           containerStyle={{
            marginTop:5,
            width:'95%',
            marginLeft:'auto',
            marginRight:'auto'
          }}
          title={
            <View style={{flexDirection:'row'}}>
              <View>
              <TimeIcon  
// onPress={()=>{
//   setInput({
//     ...input,
//     moreSearch:true
//   })

// }}

name='back-in-time' color='white'  size={25}/>
                </View>

                <View>

              <Text style={{
                color:'white',
                fontSize:16,
                fontWeight:'600',
                marginLeft:5
              }}>
                History
              </Text>
              </View>
              </View>
          }
          onPress={()=>{
            navigation.navigate('History')
          }}

          />}
          </View>}
        </View>
      </View>
:
      <View style={styles.headerInsideMoreSearch}>
        <View style={{
          width:'10%',
          alignSelf:'center',
          paddingVertical:5
        }}>
        <ArrowLeftIcon
onPress={()=>{
 setInput({
  ...input,
  moreSearch:false
 })

}}

name= 'arrowleft' color='white'  size={25}/>
        </View>
        <View style={{
          width:'95%',
          paddingVertical:5

        }}>
         

          <TextInput 
          
          placeholder='Search Youtube'
          style={styles.headerInsideMoreSearchInput}
          onChangeText={(text)=>{
            setInput({
              ...input,
              inputText:text
            })
          }}
          />
        </View>
      </View> }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header:{
    borderBottomColor:'white',
    backgroundColor:'#070124',
    zIndex:3
    // backgroundColor:'white'

  },
  headerInside:{
    display:'flex',
    flexDirection:'row',
    width:'90%',
    marginLeft:'auto',
    marginRight:"auto",
    justifyContent:'space-between',
    height:50,


  },
  headerInsideMoreSearch:{
    // flexDirection:'row',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    // justifyContent:'space-evenly',
    width:'95%',
    marginLeft:'auto',
    marginRight:'auto',
    // backgroundColor:'red',
    height:50,
    // paddingVertical:5
    // padding:5
    
  },
  headerInsideMoreSearchInput:{
   
    width:'95%',
    backgroundColor:'white'


  },
  headerInsideModes:{
    // flexDirection:'row',
    borderColor:'white',
    borderWidth:1,
    height:40,
    alignSelf:'center',
    width:85

  },
  avatarMoreInfo:{
    position:'absolute',
    top:45,
    width:150,
    right:0,
   
    backgroundColor:'#070124',
    borderColor:'white',
    borderWidth:1,
    display:'flex',
    // justifyContent:'center',
    alignContent:'space-between',
    // zIndex:3,
    
  }
})