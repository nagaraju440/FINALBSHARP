import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
class HomeC extends React.Component {
    componentDidMount=()=>{
        var x=this.props.navigation;
        x.navigate('Upload course')
    }
   
    render() { 
        return ( 
            <View>
                <Text>hiiiii</Text>
            </View>
         );
    }
}
 
export default HomeC;