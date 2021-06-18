import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  StyleSheet,
} from 'react-native';
const {height, width} = Dimensions.get('screen');
import StackNav from '../TopNavs/stack';

var firebase = require('firebase');
var config = {
  databaseURL: 'https://sample-b0875.firebaseio.com/',
  projectId: 'sample-b0875',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export class Teachers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  componentDidMount = () => {
    firebase
      .database()
      .ref('/teachers')
      .once('value')
      .then((snapshot) => {
        //  console.log('User data: ', Object.values(snapshot.val())),
        this.state.data = [];
        this.setState({data: this.state.data});
        this.setState({data: Object.values(snapshot.val())});
      });
  };
  render() {
    return (
      <View>
        <StackNav />

      <ScrollView>
        <View>
          {this.state.data === '' ? (
            <View>
              <Text>Loading...</Text>
            </View>
          ) : (
            <View>
              {this.state.data.map((l) => {
                return (
                  <View style={styles.teacherCard}>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{uri: l.imgUrl}}
                        style={{width: '100%', height: '100%'}}
                      />
                    </View>
                    <View style={styles.cardInfoContainer}>
                      <Text style={styles.text1}>{l.name}</Text>
                      <View>
                        <Text style={styles.text2}>{l.description}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
        </View>
      </ScrollView>
      </View>
    );
  }
}

export default Teachers;

const styles = StyleSheet.create({
  teacherCard: {
    width: width,
    // height: 480,
    // backgroundColor:'red',
    marginTop: 20,
    alignItems: 'center',
    borderBottomColor:'#1CC8EE',
    borderBottomWidth:1,
    paddingBottom:25,

  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    height: 150,
    width: '50%',
    marginTop: 20,
    justifyContent: 'center',
  },
  cardInfoContainer: {
    marginTop: 10,
    padding: 15,
    alignItems: 'center',
  },
  text1: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
  text2: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Roboto',
  },
});
