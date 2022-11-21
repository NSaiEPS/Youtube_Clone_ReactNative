import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { selectCategoryAction, sideBarOpenAction } from './Redux copy/Redux_Slice'

const SideBarComponent = ({item}) => {
    let dispatch=useDispatch()
    let handlePress=()=>{
        // alert(item.name)
        dispatch(
        selectCategoryAction(item.name),
        )

        dispatch(
        sideBarOpenAction(false)

        )
    }
  return (
    <TouchableOpacity
    onPress={handlePress}
    >
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
    </TouchableOpacity>
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