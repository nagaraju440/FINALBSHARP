import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from'./Home';
import Contact from './Contact'
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
function TestDrawer() {
    return (
        <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Contact" component={Contact}/>
        {/* <Drawer.Screen/> */}
        </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default TestDrawer
