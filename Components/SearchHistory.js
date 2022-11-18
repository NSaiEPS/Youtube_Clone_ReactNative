import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';
import { SelectThemeAction, SelectUserData } from './Redux copy/Redux_Slice';
import SearchHistoryCard from './SearchHistoryCard';

const SearchHistory = () => {
  const [searchHistorys, setsearchHistory] = useState([])
  let selectUserData=useSelector(SelectUserData)
let selectThemeAction=useSelector(SelectThemeAction)

  // console.log(searchHistorys)

  useEffect(()=>{
 
 
    firestore().collection('users').doc(selectUserData?.userid).collection('searchHistory').orderBy('originalDate').onSnapshot((data)=>{
     setsearchHistory((data.docs.map((item)=>({
       id:item.id,
       data:item.data()
     }))))
    })
 
 
     },[])
  return (
    <View style={[styles.searchHistory,{
      backgroundColor:selectThemeAction ? 'white':'black'

    }]}>
     

     <View style={[styles.searchHistoryTop,{
backgroundColor:selectThemeAction ? 'green':'red',

     }]}>
      <View style={[styles.searchHistoryTopView,
      {
        width:'34%'
      }]}>
        <Text style={{
          color:selectThemeAction ? 'black':'white',
          fontSize:17,
          fontWeight:'800'
        }}>Searched For</Text>
      </View>

      <View style={styles.searchHistoryTopView}>
      <Text style={{
        color:selectThemeAction ? 'black':'white',
        fontSize:17,
        fontWeight:'800'
      }}>Searched at</Text>
      </View>

      <View style={styles.searchHistoryTopView}>
      <Text style={{
        color:selectThemeAction ? 'black':'white',
        fontSize:17,
        fontWeight:'800',
        textAlign:'right'
      }}>Delete Search</Text>
      </View>

     </View>
     <View style={{marginBottom:75}}>
      {/* {searchHistorys.map((data,index)=>{
        return(
          <View key={data.id}>
          <SearchHistoryCard
          searchId={data.id}
          search={data.data.search}
          originalDate={data.data.originalDate}
          />
          </View>
        )
      })} */}


<FlatList 
         data={searchHistorys}
       
         keyExtractor={item => Math.random()}
         renderItem={(data)=>{
          // console.log(data)
         return(
          <View key={data.id}>
          <SearchHistoryCard
          searchId={data.item?.id}
          search={data.item?.data?.search}
          originalDate={data.item?.data?.originalDate}
          />
          </View>
         )}}
       
      />
     </View>
    </View>
  )
}

export default SearchHistory

const styles = StyleSheet.create({
  // searchHistory:{

  // },
  searchHistoryTop:{
 display:'flex',
 flexDirection:'row',
 width:'95%',
 marginLeft:'auto',
 marginRight:'auto',
 borderBottomColor:'white',
 borderBottomWidth:1,
 marginTop:10,
//  marginRight:"auto"
paddingVertical:10

  },
  searchHistoryTopView:{
    width:'33%',
    // backgroundColor:'red'
  }
})