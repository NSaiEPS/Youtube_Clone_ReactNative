import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign';


const VideoCart = ({navigation,videos}) => {
    // console.log(videos.length)
    
  return (
    <TouchableOpacity style={styles.videoCart}
    // onPress={()=>{
    //     navigation.navigate('Watching')
    // }}
    
    >
      {/* <View>
        <View>
            <Image
            source={{
                uri:"https://i.ytimg.com/vi/hfb4Obsf880/mqdefault.jpg"
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


        <View style={{
            paddingLeft:7
        }}>

      
        <View>
            <Text style={styles.videoCartDiscription}>
                video details
            </Text>
        </View>
        <TouchableOpacity
         onPress={()=>{
            navigation.navigate('Channel')
        }}
        style={{flexDirection:'row', height:25}}>
            <View>

         
        <Text style={styles.videoCartChannelmoreInfo}
        
        >
                Channel Name
            </Text>
            </View>

            <View style={{
                alignSelf:'center',
                marginLeft:10
            }}>

            
<Icon  name= { 'checkcircle'} color='white'  size={15}/>
</View>


        </TouchableOpacity>
        <View>
        <Text style={styles.videoCartChannelmoreInfo}>
        date
      </Text>

        </View>
        </View>
      </View> */}


{/* <ScrollView> */}

      {videos?.map((items,index)=>{
            let reqdate=(items?.snippet?.publishTime).split('T')[0]
        //    console.log(items?.id?.videoId)
          
            
            return(
            <View key={items?.snippet?.publishTime}
            style={[styles.videoCartInsideMap,{
                marginBottom:index+1===videos.length ? 100:0
            }]}
          
            
            
            >

{/* <VideoCard  
noScale={noScale}
channelId={items?.id?.channelId}
Chthumurl={items?.snippet?.thumbnails?.medium?.url}
Chtitle={(items?.snippet?.title.slice(0,50))}
videoId={items?.id?.videoId}
reqdate={reqdate}
Vdthumurl={items?.snippet?.thumbnails?.medium?.url}
Vdtitle={(items?.snippet?.title.slice(0,75))}
VdchannelId={items?.snippet?.channelId}
VChtitle={ items?.snippet?.channelTitle}
/> */}


 
              {
                items?.id?.channelId ?

                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Channel',{
                        id:(items?.id?.channelId)})
                }}
                >

                  <View >
              
<Image
            source={{
              uri:items?.snippet?.thumbnails?.medium?.url
            }} 
            containerStyle={{
                width:225,
                // height:400,
                // marginLeft:'auto',
                alignSelf:'center',


                
                
            }}
            style={{
                resizeMode:'contain',
                height:215,
                borderRadius:125,
                alignSelf:'center',
                marginLeft:'auto'

            }}
            
            />


<View style={{
           alignSelf:'center'
        }}>
                       <Text style={[styles.videoCartDiscription,{
                        textAlign:'center'}]

                       }>
                        {(items?.snippet?.title.slice(0,50))}
                       
                       </Text>   
                       <Text style={[styles.videoCartChannelmoreInfo,{
                        textAlign:'center'
                       }]}>
                        {reqdate}</Text>   
                        </View>
                        </View>
                
                </TouchableOpacity>
              
              :
   

              <TouchableOpacity
              onPress={()=>{
                navigation.navigate('Watching',{
                    id:(items?.id?.videoId)

                })
            }}
              >
               <View>
                            
<Image
            source={{
              uri:items?.snippet?.thumbnails?.medium?.url
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
               
                <View style={{
            paddingLeft:7
        }}>
                 
                 <View>
            {/* <Text style={styles.videoCartDiscription}>
                video details
            </Text> */}

            <Text style={styles.videoCartDiscription}>
                  {(items?.snippet?.title.slice(0,60))}
                  
                </Text>
        </View>





                 
        <TouchableOpacity
         onPress={()=>{
            navigation.navigate('Channel',{
                id:(items?.snippet?.channelId)})
        }}
        style={{flexDirection:'row', height:25}}>
            <View>

         
        <Text style={styles.videoCartChannelmoreInfo}
        
        >
                 {
                    items?.snippet?.channelTitle
                    } 
            </Text>
            </View>

            <View style={{
                alignSelf:'center',
                marginLeft:10
            }}>

            
<Icon  name= { 'checkcircle'} color='white'  size={15}/>
</View>


        </TouchableOpacity>


                       
                                 


                                 <View>
        <Text style={styles.videoCartChannelmoreInfo}>
        {reqdate}
      </Text>

        </View>
                    </View>
                    </TouchableOpacity>}
                </View>
        )})}
{/* </ScrollView> */}



    </TouchableOpacity>
  )
}

export default VideoCart

const styles = StyleSheet.create({
    videoCart:{
        width:'95%',
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor:'#102041',
        marginTop:7,
        borderWidth:1,
        borderColor:'white',
        marginBottom:150
    },
    videoCartDiscription:{
        color:'white',
        fontSize:18,
        fontWeight:'700'
    },
    videoCartChannelmoreInfo:{
        color:'#ffffff90',
        fontSize:17
    },
    videoCartInsideMap:{
        marginTop:10,
    }
})