import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import ArrowLeftIcon from 'react-native-vector-icons/AntDesign';
import TimeIcon from 'react-native-vector-icons/Entypo';
import YouTubeIcon from 'react-native-vector-icons/Entypo';
import { Avatar, Button, Image, Input } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { modelOpenAction, selectCategoryAction, SelectSideBarOpen, SelectThemeAction, sideBarOpenAction, themeAction } from './Redux copy/Redux_Slice';
import { categories } from '../Common/Constants';

import { useRoute } from '@react-navigation/native';


const Header = ({navigation,history}) => {
  const route = useRoute();
  // console.log(route.name);
  // let [sidebarmoreContent,setsidebarmoreContent]=useState(false)
// let selectReducer=useSelector(state=>state.info.state)
// console.log(selectReducer)
// let selectTheme=useSelector(state=>state?.info?.themeWhite)
// console.log(selectTheme)
// console.log(auth()?._user?.email)
// let selectThemeAction=useSelector(SelectThemeAction)
// let selectSideBarOpen=useSelector(SelectSideBarOpen)

let dispatch=useDispatch()

  let [input, setInput]=useState({
    moreSearch:false,
    inputText:'',
    userMoreInfo:false

  })

  // console.log(auth()?._user?.displayName[0].toUpperCase())

  // let handleLogout=()=>{

  //   Alert.alert('Warning','Are you sure to Logout!',[

  //     {text:"Yes",
  //     onPress:()=>{ auth().signOut().then(()=>{
  //       navigation.replace("Login")
  //     })},
  //     style:'cancel'
  //     },
  //     {text:"No",
  //     // onPress:()=>alert('Cancelled deleting'),
  //     style:'default'
  //     },
      
      
  //     ],
  //     {cancelable:true}
  //         )

   
  // }

//   let handleDarkTheme=()=>{
//     // alert('dark')
//     dispatch(
//       themeAction(
//          false
       
    
//        )
    
//      )
    
// }

// let handleLightTheme=()=>{
//     // alert('whitew')
//     dispatch(  themeAction(
//       true
//     )
//       )
  
    

// }

let handlePressMoreOptions=(val)=>{
    // alert(item.name)
    dispatch(
    selectCategoryAction(val),
    )
    if(route.name!=='Home'){
    navigation.navigate('Home')}

    // dispatch(
    // sideBarOpenAction(false)

    // )
}

  return (
    <View style={styles.header}>
      {!input.moreSearch ?
     
      <View style={styles.headerInside}>
        <View style={{
          alignSelf:'center',
          flexDirection:'row'
        }}
        >
        {/* <Icon  
onPress={()=>{
 dispatch(sideBarOpenAction(!selectSideBarOpen))

}}

name= {!selectSideBarOpen ? 'reorder-horizontal': 'align-horizontal-distribute'} color='white'  size={30}/> */}
   <View
    // style={{backgroundColor:'white',height:30,alignSelf:'stretch'}}
    >
   <YouTubeIcon  


name='youtube' color='red'  size={30} />
</View>
<View style={{alignSelf:'center', marginLeft:5}}>
  <Text style={{
    color:'white',
    fontSize:17,
    fontWeight:'700'
  }}>
    YouTube
  </Text>
  </View>
        </View>


        <View style={styles.headerInsideRight}>
        <View style={{
          alignSelf:'center',
          marginRight:15
        }}
        >
        <SearchIcon  
onPress={()=>{
  setInput({
    ...input,
    moreSearch:true
  })

}}

name='ios-search-outline' color='white'  size={27}/>
        </View>
        {/* <View style={styles.headerInsideModes}>
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
        </View> */}
    
        <View style={{
          alignSelf:'center',
          position:'relative',
          marginRight:10
        }}
        >
        <Avatar
         size="small"
        rounded 
        title={`${auth()?._user?.displayName[0].toUpperCase()}`}
        onPress={() => {
        setInput({
          ...input,
          userMoreInfo:!input.userMoreInfo
          
        })

        dispatch(modelOpenAction(true))}
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
{/* {

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
          </View>} */}
        </View>

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

name= 'arrowleft' color='white'  size={30}/>
        </View>
        <View style={{
          width:'95%',
          // paddingVertical:5
          // paddingTop:'auto'
          alignSelf:'center'

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

      <View>
      <FlatList 
         data={categories}
       
         keyExtractor={item => Math.random()}
         horizontal={true}
         renderItem={({item,})=>{
          // console.log(item)
         return(
          <View key={Math.random()}>
           <TouchableOpacity
    onPress={()=>{
      handlePressMoreOptions(item.name)}}
    >
    <View style={styles.sideBarComponent}>
     <View style={styles.sideBarComponentInside}>
    <View >
        {item.icon}

    </View>
    <View>
        <Text style={styles.sideBarComponentInsideText}>{item.name}</Text>
    </View>
   </View>
    </View>
    </TouchableOpacity>
           
            </View>
         )}}
       
      />
      </View>
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
    height:75,


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
    height:75,
    // paddingVertical:5
    // padding:5
    
  },
  headerInsideMoreSearchInput:{
   
    width:'95%',
    backgroundColor:'white',
    


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
    
  },
  headerInsideRight:{
    flexDirection:'row'
  },
  sideBarComponent:{
    backgroundColor:'#070124',
    // marginTop:3,
    borderColor:'white',
    borderWidth:1,
    marginLeft:5,
    borderRadius:25,
    marginBottom:5

},
sideBarComponentInside:{
    flexDirection:'row',
    // alignSelf:'center'
    // width:'65%',
    // marginLeft:"auto",
    // marginRight:"auto",
    padding:5
},
sideBarComponentInsideText:{
    color:'white',
    fontWeight:'700',
    fontSize:17,
    marginLeft:5

}
})