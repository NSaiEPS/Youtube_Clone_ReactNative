import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign';


const VideoCart = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.videoCart}
    onPress={()=>{
        navigation.navigate('Watching')
    }}
    
    >
      <View>
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
      </View>
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
        borderColor:'white'
    },
    videoCartDiscription:{
        color:'white',
        fontSize:18,
        fontWeight:'700'
    },
    videoCartChannelmoreInfo:{
        color:'#ffffff90',
        fontSize:17
    }
})