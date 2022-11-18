import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';
import { SelectUserData } from './Redux copy/Redux_Slice';


const WatchHistory = () => {
  const [watchHistory, setwatchHistory] = useState([])
  // console.log(watchHistory)
  let selectUserData=useSelector(SelectUserData)

  useEffect(()=>{

    firestore().collection('users').doc(selectUserData?.userid).collection('watchHistory').orderBy('originalDate').onSnapshot((data)=>{
    setwatchHistory((data.docs.map((item)=>({
      id:item.id,
      data:item.data()
    }))))
   })},[])

  return (
    <View>
      <Text>WatchHistory</Text>
    </View>
  )
}

export default WatchHistory

const styles = StyleSheet.create({})