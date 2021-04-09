import React, { PropTypes, Component } from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Avatar, Drawer, Title } from 'react-native-paper';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    // Avatar
} from 'react-native';
import Bsharpimage from '../images/Bsharpimage'
import Bsharp from '../images/bsharp.png'
import DashBoardIcon from '../Icons/DashBoardIcon';
import { Image ,Left} from 'react-native';
import {Container, Content} from 'native-base'
import { Header } from 'react-native/Libraries/NewAppScreen';
function DrawerContent(props) {
   return(
      <View style={{flex:1}}>
      {/* // --------------------------------Displaying drawer sections--------------------------------- */}
             <DrawerContentScrollView {...props} >
                <View style={styles.direction}>
                  <Bsharpimage />
                  <View>
                    <Title style={styles.title}>BSH#ARP</Title>
                  </View>
                </View>
                <View >
                <Drawer.Section styles={{flexDirection:'row'}}>
                </Drawer.Section>
                </View>
                <View> 
                  <Drawer.Section>
                    <View>
                    <DrawerItemList {...props} />
                    </View>
                   </Drawer.Section>
                   </View>
                  </DrawerContentScrollView>
                  </View> 
)
   
}

export default DrawerContent
const styles=StyleSheet.create({
  direction:{
    flexDirection:'row'
  },
  Title:{
      fontSize:40,
      color:"red"
  },
  Sections:{
    marginLeft:15
  },
  title:{
    paddingLeft:22,
    marginTop:20
  }
})
           