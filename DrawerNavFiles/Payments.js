import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import Menu from '../Icons/Menu';
import Notification from '../Icons/Notification';
import User from '../Icons/User';
import StackNav from '../TopNavs/stack';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { Container, Header, Tab, Tabs, TabHeading, Icon, StyleProvider} from 'native-base';
import PayNow from './PayNow';
function Payments(props) {
  return (
    // <View style={{backgroundColor: 'white', height: 800}}>
      <StyleProvider style={getTheme(material)}>
      <Container >
      <StackNav/>
        
        <Tabs>
          <Tab  heading={ <TabHeading><Text>Pay Now</Text></TabHeading>}  >
          <PayNow navigation={props.navigation}/>
          </Tab>
         
          <Tab heading={ <TabHeading><Text>History</Text></TabHeading>}>
          <Text>not available</Text>

          </Tab>
        </Tabs>
      </Container>
      </StyleProvider>
    // </View>
  );
}
export default Payments;
// import React, { Component } from 'react';
// import { Container, Header, Tab, Tabs, TabHeading, Icon, Text ,StyleProvider} from 'native-base';
// import {View} from 'react-native';
// import Tab1 from './Tab1';
// import AllClasses from './Classes';
// import getTheme from '../native-base-theme/components';
// import material from '../native-base-theme/variables/material';


// export default class Slider extends Component {
//   render() {
//     return (
    
//     );
//   }
// }