import React, { PureComponent } from "react";
import { View, SafeAreaView, StyleSheet, Alert } from "react-native";
import { FloatingAction } from "react-native-floating-action"; // eslint-disable-line import/no-unresolved
// import Courses from '../topnav2';
// import Aboutpage from '../Aboutpage';
// import Drawernavi from '../Navigations/TopNav'
import Aboutpage from '../DrawerNavFiles/About'
import TopNav4 from '../TopNavs/TopNav4';
class FloatingActionRightScreen extends PureComponent {
  // static navigationOptions = {
  //   title: "Action disabled"
  // };
  constructor(props){
    super(props);
  }

  render() {
          console.log(this.props.navigation.navigate,"from float stack")
    
    const actions = [
        {
         color: "#25D366",
          icon: require("../images/M.png"),
          name: "M",
          position: 3,
        },
        {
         color: "#0084FF",
          icon: require("../images/T.png"),
          name: "T",
          position: 2,
        },
        {
          color: "#FF6D18",
         
          icon: require("../images/G.png"),
          name: "G",
          position: 1,
        },

      ];

    return (
      <SafeAreaView style={{flex:1}}>
        <TopNav4/>

      
          <FloatingAction
          showBackground={true}
            actions={actions}
            actionsPaddingTopBottom={10}
            onPressItem={name => {
              if (name == 'M') {
                this.props.navigation.navigate('Metronome')
              } if (name == 'T') {
                this.props.navigation.navigate('Tanpura')
              }
              if (name == 'G') {
                this.props.navigation.navigate('Guitar')
              }
            
            }}
          />
       
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:-50
    // backgroundColor: "white"
  }
});

export default FloatingActionRightScreen;