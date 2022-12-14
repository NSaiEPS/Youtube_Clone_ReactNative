import { Modal, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react'
import Header from '../Components/Header'
import Icon from 'react-native-vector-icons/FontAwesome5';
import SideBar from '../Components/SideBar';
import VideoCart from '../Components/VideoCart';
import { useDispatch, useSelector } from 'react-redux';
import { modelOpenAction, SelectCategoryAction, SelectModelOpen, SelectSideBarOpen, SelectThemeAction, usersDataAction } from '../Components/Redux copy/Redux_Slice';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { fetchFromAPI } from '../Components/FetchAPI';
import UserSettings from '../Components/UserSettings';


const HomeScreen = ({navigation}) => {
  useLayoutEffect(()=>{
    navigation.setOptions({headerShown: false})
  },[])

  let dispatch=useDispatch()
let userEmail=auth()?._user?.email



  const [usersData, setusersdata] = useState([])
  useEffect(() => {
   
    firestore().collection('users').onSnapshot((data)=>{
      setusersdata((data.docs.map((item)=>({
        id:item.id,
        data:item.data()
      }
      ))))
    })
   
  }, [])


  // console.log(userss?.email)


usersData.map((data)=>
{
  if(data?.data?.email===userEmail){
    dispatch(
      usersDataAction({
        userid:(data.id),
        userName:(data.data?.name),
        userEmail:(data.data?.email)
      })
    )

  }

})


  let [sidebarmoreContent,setsidebarmoreContent]=useState(false)


const scrollRef = useRef();
const [scrolToTopCheck, setscrolToTopCheck]=useState(false)

let selectThemeAction=useSelector(SelectThemeAction)
let selectSideBarOpen=useSelector(SelectSideBarOpen)
let selectModelOpen=useSelector(SelectModelOpen)

const onPressTouch = () => {
  // alert('clicked')
  
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


let SelectedName=useSelector(SelectCategoryAction)

const [videos,setVideos]=useState([])

useEffect(()=>{
  fetchFromAPI(`search?part=snippet&q=${
    SelectedName
  }`).then((data)=>
    setVideos(
      data.items
    )
  )
  },[SelectedName])

  // console.log(videos,SelectedName)



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

      <Header navigation={navigation}/>
      </View>


      <View style={[styles.ontouchScroll,{ }]}   >
        <TouchableOpacity onPress={onPressTouch}>
        <Text style={{alignSelf:'center', color:'red'}} >
          
<Icon  name= {scrolToTopCheck ? 'angle-double-up': 'angle-double-down'} color='white'  size={35}/>
        </Text>
        </TouchableOpacity>

      </View>

      <View>
        {/* {selectSideBarOpen ?
        <View style={styles.sidebarComponenent}>
          <SideBar />
          </View>: */}

<ScrollView ref={scrollRef} onScroll={handleScroll}>
          <View style={[,styles.homeScreen,{
            backgroundColor:selectThemeAction ?'white':'black'
            
          }]}>
      <VideoCart navigation={navigation} videos={videos}/>

            </View>
            </ScrollView>
            
            
            
            {/* } */}
      </View>


<Modal
visible={selectModelOpen}
transparent

animationType='slide'

hardwareAccelerated
onRequestClose={()=>{
  dispatch(modelOpenAction(false))
  

}}
>
<UserSettings navigation={navigation}/>

</Modal>
     

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
    // alignSelf:'center',
    // marginBottom:250

  },
  sidebarComponenent:{
    marginBottom:100
  },
  homeScreen:{
    // backgroundColor:"black"
  },


})