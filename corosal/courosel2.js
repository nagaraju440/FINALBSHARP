import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';
var firebase = require('firebase');
var config = {
  databaseURL: 'https://sample-b0875.firebaseio.com/',
  projectId: 'sample-b0875',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const {width} = Dimensions.get('window');
const height = width * 0.6;
const images = [
  'https://images.pexels.com/photos/4916161/pexels-photo-4916161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1591305/pexels-photo-1591305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
];

export default class Courosel2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  //   state = {
  //     active: 0
  //   }
  //   change = ({nativeEvent}) =>{
  //       const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
  //        if(slide !==this.state.active){
  //          this.setState({active:slide});
  //        }
  //   }
  componentDidMount = () => {
    firebase
      .database()
      .ref('/teachers')
      .once('value')
      .then((snapshot) => {
        //  console.log('User data: ', Object.values(snapshot.val())),
        this.setState({data: Object.values(snapshot.val())});
      });
  };
  render() {
    return (
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {this.state.data.map((l, i) => {
            return (
              <View key={i} style={{height: 150, width: 125,alignItems:'center',}}>
                <Image
                  source={{uri: l.imgUrl}}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 76,
                    marginTop: 15,
                  }}></Image>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 10,
                    fontFamily: 'SemiBold',
                    fontSize: 16,
                  }}>
                  {l.name}
                </Text>
                {/* <Text style={{textAlign:'center',fontSize:11,fontWeight:'300',color:'#2A2A2D', textAlign:'justify',padding:10,lineHeight:15,}}>{l.description}</Text> */}
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
