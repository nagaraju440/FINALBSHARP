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
import { NavigationActions ,StackActions} from 'react-navigation'

class Stack2 extends React.Component{
    render(){
        return(
            <View>
            <TouchableOpacity
                onPress={
                    ()=>{
                        
                        // this.props.navigation.navigate('Stack3')
                        }
                }
                >
                              <Text>Stack2</Text>

                </TouchableOpacity>
            </View>
        )
    }
}
export default Stack2