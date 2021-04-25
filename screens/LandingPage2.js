import React from 'react'
// import { View, Text } from 'react-native'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    TextInput,Button,ScrollView
} from 'react-native';
import Sample from '../sample'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = new createStackNavigator();
function Stacking(){
    return(
        // <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="LandingPage2" component={LandingPage2}/>
            <Stack.Screen name="Sample" component={Sample}/>
        </Stack.Navigator>
        // </NavigationContainer>
    )
}
function LandingPage2({navigation}) {
    // const navigation = useNavigation(); 
    return (
        <View >
            <View style={styles.Page}>
            <Text style={styles.Title}>BS#arp</Text>
            <View >
            <Text style={styles.Txt}>
                Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet. Lorem 
                ipsum dolor sit amet.
                </Text>
                </View>
            <View style={styles.direction}>
            <TouchableOpacity style={styles.Signup} 
            onPress={()=>navigation.navigate('Sample')}
            >
                <Text style={styles.SignupTxt}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Login} onPress={()=>console.log('Login animation')}>
                <Text style={styles.LoginTxt}>Login</Text>
            </TouchableOpacity>
            </View>
            {/* <TouchableOpacity style={styles.Signup}>SignUp<TouchableOpacity/> */}
            </View>
        </View>
    )
}
function LandngPg2(){
    return(
        <NavigationContainer>
            <Stacking/>
        </NavigationContainer>
    )
}
const styles= StyleSheet.create({
Page:{
    backgroundColor:'#191720',
    height:700
},
Title:{
    color:'white',
    fontFamily:'semibold',
    fontSize:51,
    marginTop:398,
    marginLeft:98
},
direction:{
    flexDirection:'row'
},
Signup:{
    backgroundColor:'white',
    width:140,
    height:53,
    borderRadius:10,
    marginLeft:45,
    marginTop:20
    // elevation:1
},
SignupTxt:{
    fontFamily:'medium',
    fontSize:13,
    marginLeft:45,
    marginTop:18,
},
Login:{
    backgroundColor:'#3B3A42',
    width:136,
    height:53,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    marginTop:20
},
LoginTxt:{
    color:'white',
    fontFamily:'medium',
    fontSize:13,
    marginLeft:50,
    marginTop:18,
},
Txt:{
    color:'white',
    textAlign:'center',
    margin:15
}
})
export default LandngPg2