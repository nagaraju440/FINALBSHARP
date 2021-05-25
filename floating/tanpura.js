import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Picker,
  Button,
} from 'react-native';
import Slider from '@react-native-community/slider';
// import { Slider } from 'react-native-elements/dist/slider/Slider';
import tanpuraImg from '../images/tanpuraImage.png';
// import Sound from 'react-native-sound'
var Sound = require('react-native-sound');
Sound.setCategory('Playback');
width = Dimensions.get('window').width;
height = Dimensions.get('window').height;
console.log(width, height, 'thsea re the details');
var x = 'a.mp3';
class Tanpura extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      second: '',
      sound: '',
      whoosh: '',
      x: 0,
    };
  }
  componentDidMount = () => {
    this.state.sound = 'a.mp3';
    this.setState({sound: this.state.sound});
    // var whoosh = new Sound(this.state.sound, Sound.MAIN_BUNDLE,(error) => {
    //     if (error) {
    //       console.log('failed to load the sound', error);
    //       return;
    //     }
    //     // loaded successfully
    //     console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
    //     whoosh.play((success) => {
    //         if (success) {
    //           console.log('successfully finished playing');
    //         } else {
    //           console.log('playback failed due to audio decoding errors');
    //         }
    //       });
    // })
  };
  play = () => {
    console.log('palying button clicked', this.state.sound);
    this.state.whoosh = new Sound(
      this.state.sound,
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log(
          'duration in seconds: ' +
            this.state.whoosh.getDuration() +
            'number of channels: ' +
            this.state.whoosh.getNumberOfChannels(),
        );
        this.state.whoosh.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      },
    );
    console.log('volume: ' + this.state.whoosh.getVolume());
    console.log('pan: ' + this.state.whoosh.getPan());
    console.log('loops: ' + this.state.whoosh.getNumberOfLoops());
  };
  stop = () => {
    console.log('stop button clicked');
  };
  render() {
    return (
      // <ScrollView >
      // {/* <Text>hello babai   </Text> */}
      <View style={{width: width, height: height}}>
        <View style={{width: '100%', height: '55.58%'}}>
          <Image
            source={tanpuraImg}
            style={{width: '100%', height: '100%'}}></Image>
        </View>
        <View
          style={{
            width: '100%',
            height: '45%',
            marginTop: -30,
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <View
            style={{
              width: '79%',
              height: '85%',
              marginLeft: '9%',
              marginTop: '10.3%',
            }}>
            {/* <View style={{ borderColor: "#707070", borderWidth: 1, borderRadius: 10 }}>
                <Picker
                    selectedValue={this.state.first}
                    style={{ height: 40, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({first:itemValue})}
                >
                    <Picker.Item label="Sa" value="Sa" />
                    <Picker.Item label="Re komal" value="Re komal" />
                    <Picker.Item label="Re" value="Re" />
                    <Picker.Item label="Ga komal" value="Ga komal" />
                    <Picker.Item label="Ga" value="Ga" />
                    <Picker.Item label="Ma" value="Ma" />
                    <Picker.Item label="Ma tivra" value="Ma tivra" />
                    <Picker.Item label="Pa" value="Pa" />
                    <Picker.Item label="Dha komal" value="Dha komal" />
                    <Picker.Item label="Dha" value="Dha" />
                    <Picker.Item label="Ni komal" value="Ni komal" />
                    <Picker.Item label="Ni" value="Ni" />
                </Picker>
            </View> */}
            <View
              style={{
                borderColor: '#707070',
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 15,
              }}>
              <Picker
                selectedValue={this.state.second}
                style={{height: 40, width: '100%'}}
                onValueChange={(itemValue, itemIndex) => {
                  this.state.second = itemValue;
                  this.state.sound = itemValue + '.mp3';
                  this.setState({
                    second: this.state.second,
                    sound: this.state.sound,
                  });
                  console.log(itemValue, itemIndex, this.state.sound);
                  if (this.state.x > 0) {
                    this.state.whoosh.stop();
                  }

                  this.state.x = this.state.x + 1;
                  // whoosh.pause();
                }}>
                <Picker.Item label="A" value="a" />
                <Picker.Item label="A#" value="ahash" />
                <Picker.Item label="B" value="b" />
                <Picker.Item label="C" value="c" />
                <Picker.Item label="C#" value="Chash" />
                <Picker.Item label="D" value="d" />
                <Picker.Item label="D#" value="dhash" />
                <Picker.Item label="E" value="e" />
                <Picker.Item label="F" value="f" />
                <Picker.Item label="F#" value="fhash" />
                <Picker.Item label="G" value="g" />
                <Picker.Item label="G#" value="ghash" />
              </Picker>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={{marginRight: 135, left: 5}}>Pitch Semi</Text>
                <Text style={{color: '#000000', fontSize: 18, left: -100}}>
                  -
                </Text>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 18,
                    left: -70,
                    backgroundColor: '#F1EFEF',
                    borderRadius: 10,
                  }}>
                  {' '}
                  1{' '}
                </Text>
                <Text style={{color: '#000000', fontSize: 18, left: -40}}>
                  +
                </Text>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                <Text style={{right: 10}}>Speed</Text>
                <Slider
                  style={{width: 180, height: 40, left: 27}}
                  minimumValue={0.5}
                  maximumValue={1}
                  onValueChange={(x) => {
                    console.log(x);
                    this.state.whoosh.setSpeed(x);
                  }}
                  // minimumTrackTintColor="black"
                  maximumTrackTintColor="gray"
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={{right: 8}}>Volume</Text>
                <Slider
                  style={{width: 180, height: 40, left: 23}}
                  minimumValue={0}
                  maximumValue={1}
                  // minimumTrackTintColor="green"
                  maximumTrackTintColor="gray"
                  onValueChange={(x) => {
                    console.log(x);
                    this.state.whoosh.setVolume(x);
                  }}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View
                  style={{
                    borderWidth: 1,
                    height: 40,
                    width: '40%',
                    borderRadius: 10,
                    borderColor: '#707070',
                    backgroundColor: '#292629',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={this.play}
                    style={{alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF', alignItems: 'center'}}>
                      Play
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    height: 40,
                    width: '40%',
                    borderRadius: 10,
                    borderColor: '#707070',
                    backgroundColor: '#292629',
                    justifyContent: 'center',
                    marginLeft: 40,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      console.log('stop button clicking');
                      this.state.whoosh.stop();
                    }}
                    style={{alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF', alignItems: 'center'}}>
                      Stop
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Tanpura;
