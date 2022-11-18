import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DeleteTimeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { SelectThemeAction, SelectUserData } from './Redux copy/Redux_Slice';
import firestore from '@react-native-firebase/firestore';



const SearchHistoryCard = ({searchId,search,originalDate}) => {
let selectThemeAction=useSelector(SelectThemeAction)
let selectUserData=useSelector(SelectUserData)


    // console.log(search)

    let handleDeleteSearch=()=>{
        Alert.alert('Warning',`Are you sure to dlete the '${search}' search`,[

            {text:"Yes",
            onPress:()=>{  firestore().collection('users').doc(selectUserData?.userid).collection('searchHistory').doc(searchId).delete().then((data)=>{
               alert(`deleted the '${search}' search`)
            }).catch(e=>alert(e.message))
            },
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
    <View style={styles.searchHistoryCard}>
 

      <View style={[styles.searchHistoryCardView,{
        width:'34%'
      }]}>
      <Text style={{
        color:selectThemeAction? 'black':"white"
      }}>{search}</Text>
      </View>
      <View style={styles.searchHistoryCardView}>
      <Text style={{
        color:selectThemeAction? 'black':"white"
      }}>{originalDate}</Text>
      </View>
      <View style={[styles.searchHistoryCardView,{
        display:"flex",
        justifyContent:'flex-end',
        // backgroundColor:"red",
        // marginLeft:'auto'
      }]}>
        <Text style={{textAlign:'right'}}>

       
      <DeleteTimeIcon
      onPress={handleDeleteSearch}
name='delete-clock' color={selectThemeAction? 'black':"white" } size={25}/>
 </Text>
      </View>
    </View>
  )
}

export default SearchHistoryCard

const styles = StyleSheet.create({
    searchHistoryCard:{
        marginTop:10,
        flexDirection:"row",
        width:'95%',
 marginLeft:'auto',
 marginRight:'auto',


    },
    searchHistoryCardView:{
        width:'33%'
    }
})