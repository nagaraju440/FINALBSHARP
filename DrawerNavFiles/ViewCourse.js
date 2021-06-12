import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import StackNav from '../TopNavs/stack';
import UpArrow from './svgIcons/UpArrow';
import DownArrow from './svgIcons/DownArrow';
import Video from 'react-native-video';
import auth from '@react-native-firebase/auth';
var firebase = require('firebase');
var config = {
  databaseURL: 'https://sample-b0875.firebaseio.com/',
  projectId: 'sample-b0875',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const {height, width} = Dimensions.get('window');

export default class ViewCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: false, // for main dorp down (select your slot - sat, sun)
      y: false, // for second drop down( saturday slots- slot1, slot2, slot3 )
      z: false, // for third drop down ( sunday slots- slot1, slot2, slot3 )
      value: '',
      setValue: '',
      videoUrl:''
    };
  }
  componentDidMount = () => {
    console.log(this.props.route.params.videoUrl, 'isvideo url');
    this.setState({videoUrl:this.props.route.params.videoUrl})
  };
  register = () => {
    console.log('jelooakhfkajk',this.state.value);
    if(this.state.value===''){
      alert("please select the slot")
    }else{
      firebase
      .database()
      .ref('/Courses/Course'+this.props.route.params.no+'/Batches/BatchNo'+this.state.value+'/Peoples')
      .once('value')
      .then((snapshot) => {
        console.log( Object.keys(snapshot.val()).length      )
      if( Object.keys(snapshot.val()).length===12){
        alert("this slot is reached maximum people please select another slot")
      }else{
        this.props.navigation.navigate({name:'topnav2',params:{data:this.props.route.params,batchNo:this.state.value}})
      }
      });
    }
   
    
  };
  uuidv4=()=> {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        {/* <StackNav /> */}

        <ScrollView>
          <View
            style={{
              height: height + 50,
              width: width,
              // flexDirection: 'column',
              // justifyContent: 'space-between',
            }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View
                style={{
                  width: '93.3%',
                  height: 210,
                  backgroundColor: 'whitesmoke',
                  marginTop: 20,
                  borderRadius: 10,
                }}>
               {
                  this.state.videoUrl===''?<Text>Loading...</Text>:<Video
                  source={{uri:this.state.videoUrl}} // Can be a URL or a local file.
                  ref={(ref) => {
                    this.player = ref;
                  }} // Store reference
                  onBuffer={this.onBuffer} // Callback when remote video is buffering
                  onError={this.videoError} // Callback when video cannot be loaded
                  style={styles.backgroundVideo}
                  resizeMode="cover"
                  controls={true}
                  // fullscreen={true}
                  // fullscreenAutorotate={true}
                />
                }
              </View>
              <View
                style={{
                  width: '93.3%',
                  height: 80,
                  backgroundColor: 'white',
                  borderColor: 'grey',
                  borderWidth: 0.1,
                  marginTop: 1,
                }}>
                <Text style={styles.dropDownText}>
                  {this.props.route.params.name} Course
                </Text>
                <Text
                  style={{
                    fontFamily: 'Roboto',
                    fontSize: 12,
                    fontWeight: '500',
                    marginTop: 5,
                  }}>
                  {this.props.route.params.description}
                </Text>
              </View>
              {this.state.x === false ? (
                <View style={styles.dropDownBox}>
                  <Text style={styles.dropDownText}>Select Your Slot</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        x: !this.state.x,
                      });
                    }}>
                    {/* <Text>click</Text> */}
                    <DownArrow />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{width: width, height: 300, marginLeft: 25}}>
                  <View style={styles.dropDownBox}>
                    <Text style={styles.dropDownText}>Select Your Slot</Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          x: !this.state.x,
                        });
                      }}>
                      {/* <Text>click</Text> */}
                      <UpArrow />
                    </TouchableOpacity>
                  </View>
                  <>
                    <View>
                      <RadioButton.Group
                        onValueChange={(newValue) =>
                          this.setState({
                            value: newValue,
                          })
                        }
                        value={this.state.value}>
                        {this.state.y === false ? (
                          <View style={styles.dropDownBox1}>
                            <Text style={styles.dropDownText}>
                              Saturday Slots
                            </Text>
                            <TouchableOpacity
                              onPress={() => {
                                this.setState({
                                  y: !this.state.y,
                                  z: false,
                                });
                              }}>
                              {/* <Text>click</Text> */}
                              <DownArrow />
                            </TouchableOpacity>
                          </View>
                        ) : (
                          <View style={{width: width, height: 180}}>
                            <View style={styles.dropDownBox1}>
                              <Text style={styles.dropDownText}>
                                Saturday Slots
                              </Text>
                              <TouchableOpacity
                                onPress={() => {
                                  this.setState({
                                    y: !this.state.y,
                                    z: false,
                                  });
                                }}>
                                {/* <Text>clicl</Text> */}
                                <UpArrow />
                              </TouchableOpacity>
                            </View>
                            <View style={{marginLeft: 15}}>
                              {Object.values(
                                this.props.route.params.Batches,
                              ).map((l, i) => {
                                if (l.day === 'saturday') {
                                  return (
                                    <View
                                      style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                      }}>
                                      <RadioButton value={l.no} />
                                      <Text>{l.time}</Text>
                                    </View>
                                  );
                                }
                              })}
                            </View>
                          </View>
                        )}
                        <View>
                          {this.state.z === false ? (
                            <View style={styles.dropDownBox1}>
                              <Text style={styles.dropDownText}>
                                Sunday Slots
                              </Text>
                              <TouchableOpacity
                                onPress={() => {
                                  this.setState({
                                    z: !this.state.z,
                                    y: false,
                                  });
                                }}>
                                {/* <Text>click</Text> */}
                                <DownArrow />
                              </TouchableOpacity>
                            </View>
                          ) : (
                            <View style={{width: width, height: 180}}>
                              <View style={styles.dropDownBox1}>
                                <Text style={styles.dropDownText}>
                                  Sunday Slots
                                </Text>

                                <TouchableOpacity
                                  onPress={() => {
                                    this.setState({
                                      z: !this.state.z,
                                      y: false,
                                    });
                                  }}>
                                  {/* <Text>click</Text> */}
                                  <UpArrow />
                                </TouchableOpacity>
                              </View>
                              <View style={{marginLeft: 15}}>
                                {Object.values(
                                  this.props.route.params.Batches,
                                ).map((l, i) => {
                                  if (l.day == 'sunday') {
                                    return (
                                      <View
                                        style={{
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                        }}>
                                        <RadioButton value={l.no} />
                                        <TouchableOpacity>
                                          <Text>{l.time}</Text>
                                        </TouchableOpacity>
                                      </View>
                                    );
                                  }
                                })}
                              </View>
                            </View>
                          )}
                        </View>
                      </RadioButton.Group>
                    </View>
                  </>
                </View>
              )}

           
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
                style={styles.registerBtn}
                onPress={this.register}>
                <Text style={{color: 'white'}}>Register</Text>
              </TouchableOpacity>
      </View>
    );
  }
}

// export default Viewcourse;

const styles = StyleSheet.create({
  backgroundVideo: {
    position:'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '100%',
    width: '100%',
  },
  dropDownBox: {
    width: '93.3%',
    height: 44,
    backgroundColor: '#83B8FF',
    marginTop: 20,
    justifyContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 9,
    paddingRight: 10,
    borderRadius: 10,
  },
  dropDownBox1: {
    width: '90.5%',
    height: 44,
    backgroundColor: '#BFDAFF',
    marginTop: 4,
    justifyContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 9,
    paddingRight: 10,
    marginLeft: 10,
    borderRadius: 10,
  },

  dropDownText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerBtn: {
    width: (312 / 360) * 100 + '%',
    height: 48,
    backgroundColor: '#1A73E9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: height - 150,
    position: 'absolute',
    marginTop: 15,
    left:30
  },
});