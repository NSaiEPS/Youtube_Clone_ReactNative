import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Header from '../Components/Header'
import SideBar from '../Components/SideBar'


const ChaneelScreen = ({navigation,route}) => {
  const {id}=route.params;
  console.log(id)
  useLayoutEffect(()=>{
    navigation.setOptions({headerShown: false})

  },[])
  let [sidebarmoreContent,setsidebarmoreContent]=useState(false)

  return (
    <View>
      <Header navigation={navigation}
      setsidebarmoreContent={setsidebarmoreContent}
      sidebarmoreContent={sidebarmoreContent}
      />

{sidebarmoreContent &&
        <View style={styles.sidebarComponenent}>
          <SideBar />
          </View>}

          <Text>Channel screen</Text>
    </View>
  )
}

export default ChaneelScreen

const styles = StyleSheet.create({
  sidebarComponenent:{
    marginBottom:100
  },
})