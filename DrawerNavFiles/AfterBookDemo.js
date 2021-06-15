import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import StackNav from '../TopNavs/stack'

export default class AfterBookDemo extends Component {
    constructor(props){
        super(props)
    }
    gotoDash=()=>{
        this.props.navigation.popToTop()

    }
    componentDidMount=()=>{
        // console.log(this.props,"i am from ")
    }
    render() {
        return (
           <View>
               <StackNav/>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:200}}>
               <Text style={{fontSize:20}}>Thank you for booking  a demo class</Text>
               <Text style={{fontSize:18,marginTop:18}}>We can get back to you with in 2 days</Text>
               <View>
               <TouchableOpacity
               onPress={this.gotoDash}
               ><Text style={{
             color:'#fff',
               fontSize:16,
               fontFamily:'Poppins',
               height:48,
               width:"100%",
               backgroundColor:'#2C57EF',
               borderRadius:15,
               textAlign:'center',
               textAlignVertical:'center',
             marginTop:25,
             width:300
             }}>Go to home</Text></TouchableOpacity>
               </View>
            </View>
           </View>
        )
    }
}
