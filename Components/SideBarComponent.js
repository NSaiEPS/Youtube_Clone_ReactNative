import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SideBarComponent = ({item}) => {
  return (
    <View style={styles.sideBarComponent}>
     <View style={styles.sideBarComponentInside}>
    <View>
        {item.icon}

    </View>
    <View>
        <Text style={styles.sideBarComponentInsideText}>{item.name}</Text>
    </View>
   </View>
    </View>
  )
}

export default SideBarComponent

const styles = StyleSheet.create({
    sideBarComponent:{
        backgroundColor:'#070124',
        marginTop:3

    },
    sideBarComponentInside:{
        flexDirection:'row',
        // alignSelf:'center'
        width:'65%',
        marginLeft:"auto",
        marginRight:"auto",
        padding:7
    },
    sideBarComponentInsideText:{
        color:'white',
        fontWeight:'700',
        fontSize:17,

    }
})