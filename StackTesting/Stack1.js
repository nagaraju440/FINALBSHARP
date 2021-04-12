import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Br
} from 'react-native';

class Stack1 extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity
                onPress={
                    ()=>{this.props.navigation.navigate('Stack2')}
                }
                >
                <Text>Stack1</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Stack1