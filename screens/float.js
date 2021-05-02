import React, { PureComponent } from "react";
import { View, SafeAreaView, StyleSheet, Alert } from "react-native";
import { FloatingAction } from "react-native-floating-action"; // eslint-disable-line import/no-unresolved

class FloatingActionRightScreen extends PureComponent {
  static navigationOptions = {
    title: "Action disabled"
  };

  render() {
    const actions = [
        {
         color: "#25D366",
          icon: require("../IMAGES/M.png"),
          name: "M",
          position: 3,
        },
        {
         color: "#0084FF",
          icon: require("../IMAGES/T.png"),
          name: "T",
          position: 2,
        },
        {
          color: "#FF6D18",
         
          icon: require("../IMAGES/G.png"),
          name: "G",
          position: 1,
        },

      ];

    return (
      <SafeAreaView style={styles.container}>
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