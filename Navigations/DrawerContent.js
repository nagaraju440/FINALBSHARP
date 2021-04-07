import React, { PropTypes, Component } from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import Bsharp from '../IMAGES/bsharp.png'
import DashBoardIcon from '../Icons/DashBoardIcon';
import { Image } from 'react-native';
function DrawerContent(props) {
   return(
       <DrawerContentScrollView {...props}
        >
             <Drawer.Section 
              title="BS#arp"
              options={{
                drawerIcon:()=>(
                  <Image source={Bsharp} />
                )
        //      drawerIcon:()=>(
        //       <Image source={Bsharp} style={styles.image}/>
        //  )
           }} 
               >
              <DrawerItemList {...props} />
             </Drawer.Section>
            </DrawerContentScrollView>
   )
    
}
export default DrawerContent

            //    <View>
              
            //    <Drawer.Section></Drawer.Section>
            //      {/* <Drawer.Section>
            //       <DrawerItem label="Home"/>
            //     </Drawer.Section> */}
            //     {/* </View> */}
            //    </DrawerContentScrollView>
            {/* <Drawer.Section></Drawer.Section> */}
             {/* <DrawerItem
             label="help"/> */}
             {/* <View>
                   <Text>Main Content</Text>
             </View>
             <Drawer.Section title="Dashboard">
               <DrawerItem label="Dashboard"
               icon={()=>(
                 <DashBoardIcon/>
               )}/>
             </Drawer.Section> */}
             {/* <Drawer.Section>
               <View>
                 <Text>hiii</Text>
               </View>
             </Drawer.Section> */}
           