import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import Piano from '../images/pianoimage.jpg';
import image1 from '../drawable-xxxhdpi/instrumental_doha_mar10_1.png';
import image2 from '../drawable-xxxhdpi/image2.png';
import image3 from '../drawable-xxxhdpi/15_1_1.png';
import image4 from '../drawable-xxxhdpi/Conservatory-student-advances-to-final-round-of-Rotary-Youth-Instrumental-Music-Contest.png';
import image5 from '../drawable-xxxhdpi/b7.png';
import image6 from '../drawable-xxxhdpi/image6.png';
import image7 from '../drawable-xxxhdpi/image7.png';
import Menu from '../Icons/Menu';
import Notification from '../Icons/Notification';
import User from '../Icons/User';
import Courosal from '../corosal/courosal';
import Courosel2 from '../corosal/courosel2';
import StackNav from '../TopNavs/stack';
var firebase = require('firebase');
var config = {
  databaseURL: 'https://sample-b0875.firebaseio.com/',
  projectId: 'sample-b0875',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
class Aboutpage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      getkeys: [],
      getvalues: [],
      getvalue2: {},
    };
  }

  componentDidMount = () => {
    console.log("i am about page hehe")
    firebase
      .database()
      .ref('/Courses')
      .once('value')
      .then((snapshot) => {
        // console.log('User data: ', snapshot.val()),
          this.setState({
            getkeys: Object.keys(snapshot.val()),
            getvalues: Object.values(snapshot.val()),
          });
      });
  };
  mapping = () => {
    return (
      <View>
        <Text>hiiii</Text>
        {this.state.getkeys.map((i,i1) => {
          console.log('hiiii---------------');
          return (
            <View key={i1}>
              <Text>hiii</Text>
            </View>
          );
        })}
      </View>
    );
  };
  click = () => {
    console.log('hiii');
  };
  click = () => {
    console.log('hiii');
  };
  AssigningDatabase = (i) => {
    console.log('database assigned', {i});
  };
  render() {
    {
      console.log('this is firebase keys', this.state.getkeys,"i am about");
    }

    return (
      <View style={{backgroundColor: 'white'}}>
        <StackNav />
        {/* <StackNav /> */}
        <ScrollView>
          <View style={styles.outerbox}>
            <View style={styles.imagestyle}>
              <Courosal />
            </View>
              <Text style={styles.text1style}>About our acadamy</Text>
              <Text style={styles.text2style}>
                Bsharp Is the Brain child of 3 Music lovers with a mission to take
                music to every music enthusiast in every home through the Online
                medium.
              </Text>
              <Text style={styles.text2style}>
                B'sharp Music Academy is the brainchild of few Music Lovers who
                wished to make Music learning available to every one at the
                comfort of their homes. We have the best Music teachers in the
                category of Guitar, Keyboard and Carnatic Vocals. We intend to
                spread our wings further into teaching other instruments and
                Hindustani Vocals very soon.
              </Text>
            <Text style={styles.text3style}>Talent !!!</Text>
            <Text style={styles.text2style}>
              Some text to tell about what we teach. Something like Instruments,
              vocals and stuff. Make sure that atleast 5 lines are filled so
              that the description wouldn’t feel empty. I’ll just Write some
              random text and stuff to fill 5 lines but this didn’t seem to work
              so added some more text.
            </Text>
            <View style={styles.forthreeboxes}>
              <View style={styles.fortwoboxes}>
                <View style={styles.forfirstbox}></View>
                <View style={styles.forsecondbox}></View>
              </View>
              <View style={styles.forthirdbox}></View>
              <Text style={styles.text1style}>Courses</Text>
              {/* <Text style={styles.text2style}>
                Some text to tell about what we teach. Something like
                Instruments, vocals and stuff. Make sure that atleast 5 lines
                are filled so that the description wouldn’t feel empty. I’ll
                just Write some random text and stuff to fill 5 lines but this
                didn’t seem to work so added some more text. This is for courses
                and and stuff.
              </Text> */}
            </View>
            {this.state.getvalues.map((i,l) => {
              console.log('hiiii---------------');
              return (
                <View style={styles.sunilc} key={l}>
                  <View style={styles.image}>
                    <Image source={Piano} style={styles.piano1}></Image>
                  </View>
                  <View style={styles.sunilcborderwidth}>
                    <View style={styles.flex}>
                      <Text style={styles.language}>Telugu</Text>
                      <Text style={styles.courseName}>{i.name}</Text>
                      {/* <Text style={styles.courseCost}>₹{i.fees}</Text> */}
                    </View>
                    <View style={styles.details}>
                      <Text style={styles.descriptionstyle}>
                        {i.description}
                        {/* Teacher name : {i.teacher.name} */}
                      </Text>
                      {/* <Text>Experiance:{i.teacher.experience}years </Text> */}
                      <Text>Class only on sundays and saturdays </Text>
                    </View>

                    <View style={styles.flex}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate({name:'ViewCourse',params:i})
                        }>
                        <Text style={styles.registerBtn}>View Demo</Text>
                      </TouchableOpacity>
                      {/* <Text style={styles.teacherBtn}>{i.teacher.name}</Text> */}
                    </View>
                  </View>
                </View>
              );
            })}
            <Text style={styles.teacherstyle}>Teachers :)</Text>
            <Text style={styles.text2style}>
              Some text to tell about what we teach. Something like Instruments,
              vocals and stuff. Make sure that atleast 5 lines are filled so
              that the description wouldn’t feel empty. I’ll just Write some
              random text and stuff to fill 5 lines but this didn’t seem to work
              so added some more text. This is for courses and and stuff.
            </Text>
            <View style={styles.haricstyle}>
              <Courosel2 />
            </View>
            <Text style={styles.teacherstyle}>Achievements</Text>
            <Text style={styles.text2style}>
              Some text to tell about what we teach. Something like Instruments,
              vocals and stuff. Make sure that atleast 5 lines are filled so
              that the description wouldn’t feel empty. I’ll just Write some
              random text and stuff to fill 5 lines but this didn’t seem to work
              so added some more text. This is for courses and and stuff.
            </Text>

            <View style={styles.achive}>
              <View style={styles.achive1}>
                <Image source={image1} style={styles.img1}></Image>
                <Image source={image2} style={styles.img1}></Image>
                <View style={styles.twoimgachive1}>
                  <Image source={image3} style={styles.img3}></Image>
                  <Image source={image4} style={styles.img4}></Image>
                </View>
              </View>
              <View style={styles.achive2}>
                <Image source={image5} style={styles.img5}></Image>
                <Image source={image6} style={styles.img5}></Image>
                <Image source={image7} style={styles.img7}></Image>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Aboutpage;

const styles = StyleSheet.create({
  outerbox: {
    width: '85%',
    height: 3695,
    //   borderColor:"red",
    //   backgroundColor:"red",
    //   paddingTop:1000,
    marginLeft: '7%',
    marginTop: 34,
  },
  topnavstyle: {
    width: 418.39,
    height: 57,
    // position:"fixed",
  },
  imagestyle: {
    // width:"100%",
    // height:233,
    // backgroundColor:"whitesmoke",
  },
  text1style: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 41,
  },
  text2style: {
    fontFamily: 'Raleway',
    fontSize: 12,
    color: '#000000',
    lineHeight: 20,
    //    letterSpacing:0.1,
    marginTop: 20,
  },
  descriptionstyle: {
    fontFamily: 'Raleway',
    fontSize: 12,
    color: '#000000',
    lineHeight: 20,
    //    letterSpacing:0.1,
    marginTop: 10,
  },
  text3style: {
    fontFamily: 'Poppins',
    fontSize: 18,
    color: '#000000',
    lineHeight: 20,
    fontWeight: 'bold',
    marginTop: 25,
  },
  forthreeboxes: {
    marginTop: 39,
  },
  piano1: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  forfirstbox: {
    width: '42.88%',
    height: 219,
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
  },
  forsecondbox: {
    marginLeft: 15,
    marginTop: 44,
    width: '51.41%',
    height: 175,
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
  },
  fortwoboxes: {
    flexDirection: 'row',
  },
  forthirdbox: {
    // marginLeft:15,
    marginTop: 15,
    width: '100%',
    height: 175,
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
  },
  sunilc: {
    width: '100%',
    height: 478,
    // backgroundColor:"blue",
    marginTop:20,
  },
  sunilcborderwidth: {
    borderRadius: 6,
    borderColor: 'whitesmoke',
    borderWidth: 3,
    height: 270,
    // borderRadius:15,
    marginTop: -1,

    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  sunilc1: {
    width: '100%',
    height: 523,
    // backgroundColor:"whitesmoke",
    marginTop: 25,
  },
  teacherstyle: {
    fontFamily: 'Poppins',
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 50,
  },
  haricstyle: {
    width: '100%',
    height: 236,
    // backgroundColor:"whitesmoke",
    marginTop: 25,
  },
  achive: {
    marginTop: 25,
    width: '100%',
    height: 392,
    // backgroundColor:"whitesmoke",
    flexDirection: 'row',
  },
  achive1: {
    width: '58%',
    height: '100%',
  },
  achive2: {
    width: '38%',
    height: '100%',
    marginLeft: 9,
  },
  achive3: {
    width: '100%',
    height: 152,
  },
  img1: {
    width: '100%',
    height: 111,
    borderRadius: 15,
    marginTop: 8,
  },
  twoimgachive1: {
    flexDirection: 'row',
    width: '100%',
    height: 152,
    marginTop: 8,
  },
  img3: {
    width: '48%',
    height: 152,
    borderRadius: 15,
  },
  img4: {
    width: '48%',
    height: 152,
    borderRadius: 15,
    marginLeft: 8,
  },
  img5: {
    width: '100%',
    height: 133,
    borderRadius: 15,
    marginTop: 8,
  },
  img7: {
    width: '100%',
    height: 108,
    borderRadius: 15,
    marginTop: 8,
  },
  //  suni gadi stylings
  image: {
    width: '100%',
    height: 200,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    borderTopStartRadius: 15,
    borderTopRightRadius: 15,
    alignContent: 'center',
    alignItems: 'center',
  },
  flex: {
    marginTop: 18,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 15,
  },
  language: {
    backgroundColor: 'lightgrey',
    height: 10,
    width: 30,
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: 8,
    fontSize: 7,
    fontFamily: 'poppins',
    marginTop: 5,
    backgroundColor: '#EEEEEE',
  },

  courseName: {
    fontFamily: 'Raleway',
    fontSize: 15,
    fontWeight: '700',
    left: 25,
    width:150,
    color: '#292629',
  },
  courseCost: {
    fontSize: 9,
    left: 125,
    marginTop: 5,
    color: '#292629',
  },
  details: {
    marginTop: 10,
    marginLeft: 16,
    fontFamily: 'Raleway',
    color: '#292629',
    width: '90%',
    fontSize: 12,
    lineHeight: 20,
  },

  registerBtn: {
    color: '#fff',
    fontSize: 11,
    fontFamily: 'Poppins',
    height: 28,
    width: 82,
    backgroundColor: '#2C57EF',
    borderRadius: 6,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  teacherBtn: {
    color: '#292929',
    fontSize: 11,
    fontFamily: 'Poppins',
    height: 28,
    width: 82,
    backgroundColor: '#EEEEEE',
    left: 5,
    borderRadius: 6,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});