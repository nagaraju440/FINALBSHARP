import React, { PureComponent } from "react";
import { View, SafeAreaView, StyleSheet, Alert ,Text} from "react-native";
import { FloatingAction } from "react-native-floating-action"; // eslint-disable-line import/no-unresolved

class FloatingActionRightScreen extends PureComponent {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    title: "Action disabled"
  };

  render() {
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
      <SafeAreaView style={styles.container}>
      <View>
        <Text>hloooo</Text>
      </View>
        <View style={styles.container}>
          <FloatingAction
          showBackground={false}
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
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white"
  }
});

export default FloatingActionRightScreen;