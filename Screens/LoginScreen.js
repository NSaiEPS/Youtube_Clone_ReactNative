import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Button, Image, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';



const LoginScreen = ({navigation}) => {
    const theme=useColorScheme()

useLayoutEffect(()=>{
        navigation.setOptions({
            title:null,
            headerLeft:()=>(
                <View
                style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignContent:'space-around',
                    width:'70%',
                    height:60,
                    backgroundColor: theme==='dark'?  'white': 'white',
                    marginLeft:37
                    
                }}
                
                >
                    <View
                    style={{
                   display:'flex',
                   justifyContent:'center'
                    }}
                    >
                    <Image 
                    source={{
                        uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX/////AAD/wcH/kZH/lJT/7Oz/vr7//Pz/9fX/xMT/+Pj/ysr/5eX/4uL/39//m5v/JSX/z8//ubn/tLT/pKT/n5//l5f/rq7/2dn/Tk7/1NT/Rkb/8PD/Xl7/PT3/MTH/Ghr/gID/p6f/cXH/DQ3/h4f/amr/NTX/Z2f/VFT/fn7/YWH/d3f/QUH/IyP/WFjVEipKAAAEd0lEQVR4nO2c2XLiMBBFPQaDwQubjdm3sGSb5P//bgzDGhxCua+QIPe85QGVTgqkVqvVlkUIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEII+eWUqwPH94Mw7PS8SqnZSmZRHNdq7WKxWNiT/tFu1+I4ms2SVqniNTphGPi+M6jqnv45qU/gNZOotngadkfj8cdk/kfAfFIfj0fd4fuiFiWlRqDRuep4SWHZXU0kPtcwGXWXxaTi3NbUW3RVi53Tf28NbqNXLd7ebm/ZuoFgpM9vzbyp2M8Z6RVMeVH6XW3o1tvQUSfo6Xbb0lAl2NFttidUI+jq9jowV7M7DnV7HfGmQrCk2+qEigLDum6pE1Z4waZupy94cMO+bqUvwH+Jjm6jM9DLqWlfUvy2P9UtdEYRbGjWSrqmDzbU7ZMBVtCckPRAADW0detkgN0RNWYuviWGGr7r1sngFWpoWkSz5gVqqNsmi/nDG0K3C/Oi0jUO0LCnWyaTHtCwolsmE+Q5vyWYhyf58EWQKf6aYB62VV3ApE5oAw2ngnnY6ef9T5DUCVOg4ZNgHvZmhIqC49cT0HApmIe9HSOGme14BhpKvmQ7Q8tFB7fIsO2vYB72YZgAG96OgIaSH5F9PFAJee8/ARpK5mGfDtVG+aWUYYJlyTS+GFoDycJ8iqGGaZSLuio31lAWBR6BS3sP0IaWVUAY4o5PPt7Qcp7lhrh8oihb+o2hZTVWUkNcUYboAPytoWUlQkPcEVhURnPB0HKnIkPc9ZOojuaSYRrIvQiGxmW9RUmMy4bp4PkDOVwaQ3Rr8ZOh4Fz189CGGFrua76hSzBDUSnNVf/oMFdJ7j0Z5ksF3ZNhvgjnjgxzRql3s9LkPmngDJXuh7384SluP1QY04iOGLiYRllcWpZlbXBxqaqzRfNDJAg8W6g5H3bE2VNcuXegwNAFpNx8mKGCPI3kvm4P7m0JPNcGSn0bm03MF2bfj+EAdwWFM0TeWyCvEXGClmTfOjGEXgXXgYaSi4YjQx/79BRZJYy5A56i1LYMgYaS8HhnOIOZ7VgCDeW1GN4YJrbnHWg4FcxjU0+j5N3bAmgoOeTYVllRTRSyDNrMujZcIsrU2kRksb6Z9aXIN91m1gi7QMPHr/M20nACNTTxvcUn1PDx38w8/rsnsx7j/wf7du3x3x+auJhiBX/BO+CpbqEzCmBD897jo9tGmBeZQqPSNaZFNdgXpGtM+5oij79bzFpNP/CChoU1SprvKXl/lpOuCkGTen1BnwAfYU5wim+htMWUnnsKO2CakXNTsFEcGOjf+OuKWgruUZbBvhJ086QsZgquka6lAI9GswnjNw0RTnehbAnNxA2b0XTYH4uaW1/DZNVdFhJPX9trd+B0Kq1ZXHhdfvZX4/qHrBho29D77X9Db09nQ+9vKafOfhCEYa/h2Zue7NG2J3vxuCd7sV2rxVE0S1rNUqXR2zRldxzXPB9CCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCyK35B1POXrZYAfBXAAAAAElFTkSuQmCC"
    
                    }}
                    style={{
                      // width:'100%',
                      // height:'100%'
                      width:55,
                          height:55,
                        //   justifyContent:'center'
                        
                        // borderRadius:10
                        
                        
                    }}
                    />
                    </View>
    
                    <View
                    style={{
                        justifyContent:'center',
                       
                    }}
                    >
                        <Text
                        style={{
                            fontSize:25,
                            fontWeight:'700',
                            color:'black'
                        }}
                        >Login</Text>
                    </View>
                </View>
            )
        })
    
    },[])

    let [authChabged,setAuthChanged]=useState(false)

    useEffect(()=>{
 

      const subscriber= auth().onAuthStateChanged((authUser)=>{
        // console.log(authUser?.email, 'loginScreen')
        if(authUser){
         
   
          navigation.replace("Home")
       
   
        }
       })
      
      return subscriber;
       },[])
     let [input,setInput]=useState({
      passwordToggle:true,
      email:'',
      password:''

     })

    let handleLogin=(e)=>{
      if(!input.email){
        alert('enter your email to login')
      }
      if(!input.password){
        alert('enter your password to login')
      }

      if(input.email && input.password){
      e.preventDefault();
 
      auth().signInWithEmailAndPassword(input.email,input.password).then (userAuth=>{
        setAuthChanged(true)
        // navigation.replace("Home")
       
      })
 .catch(error=>alert(error))}
    }

    useEffect(()=>{
 

      const subscriber= auth().onAuthStateChanged((authUser)=>{
        // console.log(authUser?.email, 'loginScreen')
        if(authUser){
         
   
          navigation.replace("Home")
         
   
        }
       })
      
      return subscriber;
       },[authChabged])
       
  return (
    <View style={styles.LoginScreenParent}>
        <View style={styles.LoginScreenParentInside}>

      
<View>
<Text style={styles.textStyle}>

    Please 'Login' to proceed further
    </Text>
</View>


      <View style={{
        marginTop:15
      }}>
        <Input placeholder='Enter your email' style={styles.inputStyles}
        onChangeText={(text)=>{
          setInput({
            ...input,
            email:text
          })
        }}
        
        />

        <View style={{
          position:'relative'
        }}>

        
        <Input placeholder='Enter your password' style={styles.inputStyles}
        secureTextEntry={input.passwordToggle ? true: false}

        onChangeText={(text)=>{
          setInput({
            ...input,
            password:text
          })
        }}
        />

        <View style={{position:'absolute', right:35, top:17}}>
        <Icon  
onPress={()=>{
  setInput({
...input,
passwordToggle:!input.passwordToggle
})
}}

name= {!input.passwordToggle ? 'eye': 'eye-slash'} color='black'  size={25}/>
        </View>

        </View>

      </View>

      <View>

      <Button
              title="Login"
              buttonStyle={{ backgroundColor: '#00f6ff' }}
              containerStyle={styles.buttonStyles }

              titleStyle={{
                color: 'black',
                // marginHorizontal: 20,
              }}
              onPress={handleLogin}
            />

            <Text style={styles.textStyle} >
                Or not yet Registered!
            </Text>
      

      <Button
              title="Register"
              buttonStyle={{ backgroundColor: '#ff1493' }}
              containerStyle={styles.buttonStyles }
              titleStyle={{
                color: 'white',
                // marginHorizontal: 20,
              }}
              onPress={()=>navigation.navigate('Register')}
            />

      </View>
      </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    LoginScreenParent:{
        // backgroundColor:'#070124',
        flex:1,
        display:'flex',
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        alignSelf:'center',
        justifyContent:'center',
    },
    LoginScreenParentInside:{
        height:400,
        // alignSelf:'center'
        justifyContent:'center',
        backgroundColor:'#070124',

    },
    textStyle:{
  color:'white',
  textAlign:"center",
  fontSize:20

    },
    inputStyles:{
      backgroundColor:'white',
      padding:15
    },
    buttonStyles:{
      width:150,
      // marginHorizontal: 50,

      marginLeft:'auto',
      marginRight:"auto",
      marginVertical: 10,
      borderColor:'white',
      // borderWidth:2,
      // padding:10

    }
})
