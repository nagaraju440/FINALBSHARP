import React, { Component } from 'react'
import { Text, View,StyleSheet,Dimensions } from 'react-native'
import VideoPl from 'react-native-video';
export default class Video extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount=()=>{
        console.log(this.props.route.params.videoUrl)
    }
    render() {
        return (
            <View>
               <View style={{ alignItems: 'center', justifyContent: 'center' }} >
      
          
            <VideoPl
              ref={ref => {
                this.player = ref;
              }}
              source={{ uri: this.props.route.params.videoUrl}}

              style={Platform.OS === "android" ? styles.videoContainerAndroid : styles.videoContainerIOS}
              controls={true}
              // navigator={this.props.navigator}
              // aspectRatio: width/height,
              fullscreen={true}
              resizeMode='contain'
              // onBuffer={this.onBuffer}
              // onLoadStart={this.onLoadStart}
              // onLoad={this.onLoad}
            />

        
        
      </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    fullScreen: {
      flex: 1,
      backgroundColor: "black"
    },
    videoView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    videoContainerAndroid: {
      height: "100%",
      width: "100%",
      // transform: [{ rotate: '90deg' }],
  
    },
    videoContainerIOS: {
      width: Dimensions.get('window').height,
      height: Dimensions.get('window').width,
      minWidth: Dimensions.get('window').height,
      minHeight: Dimensions.get('window').width,
      width: Dimensions.get('screen').height,
      height: Dimensions.get('screen').width,
  
      transform: [{ rotate: '90deg' }],
    },
    // activityIndicator: {
    //   position: 'absolute',
    //   top: 70,
    //   left: 70,
    //   right: 70,
    //   height: 50,
    // }
  })
// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default class Video extends Component {
//     render() {
//         return (
//             <View>
//                 <Text> textInComponent </Text>
//             </View>
//         )
//     }
// }
