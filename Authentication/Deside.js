import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text,Image,StyleSheet } from 'react-native'
import Guitar from '../images/guitarImage.png'
import BackGroundForLndgPg from'../screens/BackGroundForLndgPg'

 const LandingPage22=(props)=>{
    return (
        <View>
            
            <BackGroundForLndgPg/>
            <View style={styles.Guitar}>
                <Image source={Guitar} style={{height:300,width:180}}/>
            </View>
            <View style={{marginTop:70,marginLeft:100}}>
                <Text style={styles.BSharp}>BS#arp</Text>
            </View>
            <View style={{paddingLeft:70}}>
                <TouchableOpacity style={styles.login} 
                    onPress={()=>{
                        console.log('hi login',props);
                        props.navigation.navigate("Login");
                    }
                    }
                >
                    <Text style={{paddingLeft:80,fontWeight:'bold'}}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingLeft:70,paddingTop:5}}>
                <TouchableOpacity style={styles.signup} onPress={()=>
                // console.log('hi signup')
                props.navigation.navigate('SignUp')
                }
                    >
                    <Text style={{paddingLeft:80,color:'white',fontWeight:'bold'}}>signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    BSharp:{
     fontSize:48,
     fontWeight:'bold'
    },
    login:{
     width:201,
     height:43,
     borderWidth:1,
     borderRadius:25,
     justifyContent:'center',
     borderColor:'#101BDD'
    },
    signup:{
        width:201,
        height:43,
        borderWidth:1,
        borderRadius:25,
        justifyContent:'center',
        borderColor:'#101BDD',
        backgroundColor:'#101BDD'
    },
    Guitar:{
        marginTop:-280,
        marginLeft:90,
        // height:300
        
    }
})
export default LandingPage22
