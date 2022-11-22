import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Header from '../Components/Header'
import SideBar from '../Components/SideBar'
import { fetchFromAPI } from '../Components/FetchAPI'
import VideoCart from '../Components/VideoCart'
import { Image } from 'react-native-elements'
import { SelectSideBarOpen, SelectThemeAction } from '../Components/Redux copy/Redux_Slice'
import { useSelector } from 'react-redux'


const ChaneelScreen = ({navigation,route}) => {
  const {id}=route.params;
  console.log(id)
  useLayoutEffect(()=>{
    navigation.setOptions({headerShown: false})

  },[])
  let selectSideBarOpen=useSelector(SelectSideBarOpen)

  // console.log()

  let [channelDetail, setChannelDetail]=useState([])
  const [videos, setvideos] = useState([])

// console.log(channelDetail,videos)

  useEffect(()=>{
  fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>
  setChannelDetail(data?.items[0])
  )

  fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>
  setvideos(data?.items)
  )

  },[id])
  let reqdate= (channelDetail?.snippet?.publishedAt) && (channelDetail?.snippet?.publishedAt).split('T')[0]
//  console.log(channelDetail?.snippet?.thumbnails?.medium?.url)
let selectThemeAction=useSelector(SelectThemeAction)



  return (
    <View style={{
      backgroundColor: selectThemeAction ?'white':'black'
    }}>
      <Header navigation={navigation}
      
      />

{selectSideBarOpen &&
        <View style={styles.sidebarComponenent}>
          <SideBar />
          </View>}

          <ScrollView>

         <View style={[styles.chaneelScreenMain,{
          // backgroundColor: selectThemeAction ?'white':'black'

         }]}>
          <View>
            <Image 
            source={{
              uri:channelDetail?.snippet?.thumbnails?.medium?.url
            }}
            containerStyle={{
              width:'100%',
              // height:400,
              
              
          }}
          style={{
              resizeMode:'contain',
              height:215
          }}
          
            />
         
           
          </View>

          <View>
            <Text style={[styles.chaneelScreenMainText,{
              color:selectThemeAction ? 'black':'white'
            }]}>{(channelDetail?.snippet?.title.slice(0,50))}</Text>
            <Text style={[styles.chaneelScreenMainText,{
              color:selectThemeAction ? 'black':'white'
            }]}>Date joined '{reqdate}'</Text>
            <Text style={[styles.chaneelScreenMainText,{
              color:selectThemeAction ? 'black':'white'
            }]}>{channelDetail?.statistics?.subscriberCount} subscribers</Text>
            <Text style={[styles.chaneelScreenMainText,{
              color:selectThemeAction ? 'black':'white'
            }]}>{channelDetail?.statistics?.videoCount} Videos</Text>
            <Text style={[styles.chaneelScreenMainText,{
              color:selectThemeAction ? 'black':'white'
            }]}>{(channelDetail?.statistics?.viewCount)} Views</Text>
          </View>

   
         </View>

          <VideoCart navigation={navigation} videos={videos}/>
          </ScrollView>
    </View>
  )
}

export default ChaneelScreen

const styles = StyleSheet.create({
  sidebarComponenent:{
    marginBottom:100
  },
  chaneelScreenMain:{
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    height:350,
    marginVertical:10,
    borderColor:'white',
    borderWidth:1
  },
  chaneelScreenMainText:{
    textAlign:'center'
  }
})