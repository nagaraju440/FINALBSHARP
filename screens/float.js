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
        text: "Accessibility",
        icon: require("../IMAGES/Tom.jpg"),
        name: "button 1",
        position: 2
      },
      {
        text: "Language",
        icon: require("../IMAGES/Tom.jpg"),
        name: "button 2",
        position: 1
      },
      {
        text: "Location",
        icon: require("../IMAGES/Tom.jpg"),
        name: "button 3",
        position: 3
      },
    //   {
    //     text: "Video",
    //     icon: require("../images/ic_videocam_white.png"),
    //     name: "bt_videocam",
    //     position: 4
    //   }
    ];

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <FloatingAction
            actions={actions}
            actionsPaddingTopBottom={18}
            onPressItem={name => {
              Alert.alert("Icon pressed", `the icon ${name} was pressed`);
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
    backgroundColor: "#fff"
  }
});

export default FloatingActionRightScreen;