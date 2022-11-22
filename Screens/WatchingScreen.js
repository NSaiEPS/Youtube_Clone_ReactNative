import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Header from '../Components/Header'
import SideBar from '../Components/SideBar'
import { fetchFromAPI } from '../Components/FetchAPI'
import VideoCart from '../Components/VideoCart'
import { SelectSideBarOpen } from '../Components/Redux copy/Redux_Slice'
import { useSelector } from 'react-redux'


const WatchingScreen = ({navigation,route}) => {
  const {id}=route.params;
  // console.log(id)
  let selectSideBarOpen=useSelector(SelectSideBarOpen)


  useLayoutEffect(()=>{
    navigation.setOptions({headerShown: false})

  },[])
  let [sidebarmoreContent,setsidebarmoreContent]=useState(false)

  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  let [channelDetail, setChannelDetail]=useState([])
// let selectUserData=useSelector(state=>state?.info?.usersData)
// let selectThemeData=useSelector(state=>state?.info?.themeWhite)
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))

      
  }, [id]);

//   useEffect(()=>{
// fetchFromAPI(`channels?part=snippet&id=${videoDetail?.snippet?.channelId}`).then((data)=>
//   setChannelDetail(data?.items[0])
//   )
//   },[videoDetail])

  return (
    <View>
      <Header navigation={navigation}
   
      />

{selectSideBarOpen &&
        <View style={styles.sidebarComponenent}>
          <SideBar />
          </View>}
                     
                     <ScrollView>
          <View style={styles.watchingScreenMainDetails}>
          <View style={styles.watchingScreenMainDetailsVideo}>
              <Text>Video</Text>
            </View>
            
            <View style={styles.watchingScreenMainDetailsText}>
            <View>
              <Text>Title</Text>
            </View>

            <View>
              <Text>More details</Text>
            </View>

            <View>
              <Text>channel name & commnets</Text>
            </View>

            <View>
              <Text>Subsribers</Text>
            </View>
            </View>
          </View>


          <View>
      <VideoCart navigation={navigation} videos={videos}/>

            </View>
          </ScrollView>

    </View>
  )
}

export default WatchingScreen

const styles = StyleSheet.create({
  sidebarComponenent:{
    marginBottom:100
  },
  watchingScreenMainDetails:{
    width:'95%',
    marginLeft:'auto',
    marginRight:'auto'
  },
  watchingScreenMainDetailsVideo:{
    height:350

  },
  watchingScreenMainDetailsText:{
    width:'95%',
    marginLeft:'auto',
    marginRight:'auto'
  }
})