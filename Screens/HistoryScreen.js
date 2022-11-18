import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import HistoryComponenet from '../Components/HistoryComponenet'
import SideBar from '../Components/SideBar'
import Header from '../Components/Header'

const History = ({navigation}) => {
  useLayoutEffect(()=>{
    navigation.setOptions({headerShown: false})
  },[])
  let [sidebarmoreContent,setsidebarmoreContent]=useState(false)

  return (
    <View style={{height:'100%'}}>
   <Header navigation={navigation}
      setsidebarmoreContent={setsidebarmoreContent}
      sidebarmoreContent={sidebarmoreContent}
      history={true}
      />

{sidebarmoreContent &&
        <View style={styles.sidebarComponenent}>
          <SideBar  />
          </View>}

          <View>
   {/* <Text>klYG</Text> */}

          </View>
        
<HistoryComponenet/>


    </View>

  )
}

export default History

const styles = StyleSheet.create({
  sidebarComponenent:{
    marginBottom:50
  }
})