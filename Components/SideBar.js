import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categories } from '../Common/Constants'
import SideBarComponent from './SideBarComponent'

const SideBar = () => {
  return (
    <View>
      <FlatList 
         data={categories}
       
         keyExtractor={item => item.id}
         renderItem={({item,})=>{
          // console.log(item)
         return(
          <View>
            <SideBarComponent  item={item}/>
            </View>
         )}}
       
      />
    </View>
  )
}

export default SideBar

const styles = StyleSheet.create({})