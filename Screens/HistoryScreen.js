import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'

const History = ({navigation}) => {
  useLayoutEffect(()=>{
    navigation.setOptions({headerShown: false})
  },[])

  return (
    <View>
      <Text>History</Text>
    </View>
  )
}

export default History

const styles = StyleSheet.create({})