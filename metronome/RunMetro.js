// import React, {Component} from 'react';
// import {
//   View,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   Images,
//   Text,
//   SafeAreaView,
// } from 'react-native';
// import Slider from 'react-native-slider';
// import {ThemeColors} from 'react-navigation';
// // Importing the react-native-sound module

// var Sound = require('react-native-sound');
// Sound.setCategory('Playback');
// // var whoosh = new Sound('whoosh.mp3', Sound.MAIN_BUNDLE, (error) => {
// //   if (error) {
// //     console.log('failed to load the sound', error);
// //     return;
// //   }
// var whoosh;
// var z;
// export class RunMetro extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: 5,
//       sounds: ['ma.mp3', 'mb.mp3', 'mc.mp3', 'md.mp3', 'me.mp3', 'mf.mp3'],
//       // whoosh: '',
//       i: 0,
//     };
//   }
//   componentDidMount = () => {
//     // setInterval(()=>{
//     //   this.start()
//     //   console.log("in the setinterval");
//     // },1000)
//     // console.log("helli thete");
//     // var whoosh = new Sound('ma.mp3', Sound.MAIN_BUNDLE, (error) => {
//     //   if (error) {
//     //     console.log('failed to load the sound', error);
//     //     return;
//     //   }
//     //   // loaded successfully
//     //   console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
//     //   // Play the sound with an onEnd callback
//     //   whoosh.play((success) => {
//     //     if (success) {
//     //       console.log('successfully finished playing');
//     //     } else {
//     //       console.log('playback failed due to audio decoding errors');
//     //     }
//     //   });
//     // });
//   };
//   start = () => {
//     setInterval(()=>{
//     console.log('start button ');
//     console.log(this.state.sounds[this.state.i]);
//     whoosh = new Sound(
//       // this.state.sounds[this.state.i],
//       'ma.mp3',
//       Sound.MAIN_BUNDLE,
//       (error) => {
//         // console.log("in the sound");
//         whoosh.setNumberOfLoops(1000);
//         console.log('loops: ' + whoosh.getNumberOfLoops());
//         if (error) {
//           console.log('failed to load the sound', error);
//           return;
//         }
//         // loaded successfully
//         console.log(
//           'duration in seconds: ' +
//             whoosh.getDuration() +
//             'number of channels: ' +
//             whoosh.getNumberOfChannels(),
//         );

//         // Play the sound with an onEnd callback
//         whoosh.play((success) => {
//           if (success) {
//             console.log('successfully finished playing');
//           } else {
//             console.log('playback failed due to audio decoding errors');
//           }
//         });
//       },
//     );
//   });
//   };

//   handleSliderChange = (value) => {
//     this.state.value = value;
//     this.setState({
//       value: this.state.value,
//     });
//     console.log(value);
//   };
//   nextSound = () => {
//     if (this.state.i < 5) {
//       console.log(this.state.i,"before")
//       //clearInterval(z);
//       this.state.i = this.state.i + 1;
//       console.log(this.state.i,"after")
//       //this.start();
//       this.setState({
//         i: this.state.i,
//       });
//     } else {
//       this.state.i = 0;
//       this.setState({
//         i: this.state.i,
//       });
//     }
//     setTimeout(function(){clearInterval(z);},console.log("clear interval"));
//     this.start();
//     console.log('sounds is ' + this.state.i);
//   };
//   volumechange = (x) => {
//     setInterval(() => {
//       whoosh.setVolume(x);
//     }, 1000);
//   };

//   increaseTempo = () => {
//     console.log('incrememntTemo is called');
//     if (this.state.value < 1000) {
//       this.setState({
//         value: this.state.value + 1,
//       });
//     }
//   };
//   //decrease the temo function
//   decreaseTempo = () => {
//     console.log('decreaseTempo is called');
//     if (this.state.value > 0) {
//       this.setState({
//         value: this.state.value - 1,
//       });
//     }
//   };
//   render() {
//     return (
//       <View style={styles.metronomeBg}>
//         {/* ******************************tempo************************* */}
//         <View style={styles.tempoContainer}>
//           <View style={styles.tempoC}>
//             <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 19}}>
//               TEMPO
//             </Text>
//             <Text style={{fontSize: 18, fontWeight: '300'}}>
//               {this.state.value} <Text style={{fontSize: 15}}>value</Text>
//             </Text>
//             <Text style={{fontSize: 18, fontWeight: '300'}}>presto</Text>
//           </View>

//           <View style={styles.buttons}>
//             <TouchableOpacity onPress={this.decreaseTempo}>
//               <Text style={styles.btn}>--</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={this.increaseTempo}>
//               <Text style={styles.btn}>+</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         {/* *********************** * tempo bar , next button , volume bar ************************************* */}
//         <View style={styles.tempoBarSection}>
//           {/* **********************tempoSlider******************************** */}
//           <View style={{marginTop: 40}}>
//             <Text style={{fontSize: 20}}>Tempo</Text>
//           </View>
//           <View>
//             <Slider
//               maximumTrackTintColor="white"
//               minimumTrackTintColor="white"
//               thumbTintColor="#00D092"
//               value={this.state.value}
//               maximumValue={100}
//               minimumValue={0}
//               step={5}
//               onValueChange={this.handleSliderChange}
//               // onValueChange={(value)=>{
//               //   console.log(value);
//               //   this.setState({
//               //     value: this.state.value + 1,
//               //   });
//               // }}

//               style={{marginLeft: 85, marginTop: -30}}
//             />
//           </View>
//         </View>
//         {/****************************** * nextbutton section ******************************** */}
//         <View>
//           <TouchableOpacity
//             style={{
//               borderRadius: 10,
//               backgroundColor: '#396DE5',
//               width: 220,
//               height: 65,
//               fontWeight: '500',
//               marginTop: 30,
//               justifyContent: 'center',
//               alignContent: 'center',
//               alignItems: 'center',
//             }}
//             onPress={this.nextSound}>
//             <Text
//               style={{
//                 fontSize: 20,
//                 fontWeight: 'bold',
//                 color: '#FFFFFF',
//               }}>
//               Next sound
//             </Text>
//           </TouchableOpacity>
//         </View>
//         {/************************************* * volume bar section*************************************** */}
//         <View style={styles.tempoBarSection}>
//           <View style={{marginTop: 40}}>
//             <Text style={{fontSize: 20}}>volume</Text>
//           </View>

//           <Slider
//             maximumTrackTintColor="white"
//             minimumTrackTintColor="white"
//             thumbTintColor="#00D092"
//             maximumValue={100}
//             minimumValue={0}
//             step={0}
//             style={{marginLeft: 85, marginTop: -30}}
//             onValueChange={(x) => {
//               console.log(x);
//               this.volumechange(x);
//               whoosh.setVolume(x);
//             }}
//           />
//         </View>
//         {/************************************* * start and stop section **************************************** */}

//         <View
//           style={{
//             marginTop: 20,
//             marginLeft: -8,
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//           }}>
//           <TouchableOpacity
//             style={{
//               borderColor: '#396DE5',
//               borderWidth: 3,
//               backgroundColor: '#FFFFFF',
//               width: 129,
//               height: 110,
//               borderRadius: 15,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text
//               style={{
//                 fontSize: 16,
//                 color: '#396DE4',

//                 fontWeight: '500',
//               }}>
//               STOP
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={{
//               backgroundColor: '#396DE5',
//               width: 129,
//               height: 110,
//               borderRadius: 15,
//               justifyContent: 'center',
//               alignItems: 'center',
//               marginLeft: 15,
//             }}
//             onPress={() => {
//               this.start();
//             }}>
//             <Text
//               style={{
//                 fontSize: 16,
//                 color: '#FFFFFF',
//                 fontWeight: '500',
//                 opacity: 100,
//               }}>
//               START
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }
// export default RunMetro;
// const styles = StyleSheet.create({
//   metronomeBg: {
//     backgroundColor: '#EEEEEE',
//     height: 650,
//     width: 325,
//     margin: 20,
//     borderRadius: 15,
//     marginTop: 35,
//     alignItems: 'center',
//   },
//   tempoContainer: {
//     height: 200,
//     width: 280,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 40,

//     borderRadius: 20,
//   },
//   tempoBarSection: {
//     display: 'flex',
//     //   flexDirection:"row",
//     // marginLeft:38,
//     marginTop: -5,

//     width: '75%',
//   },
//   tempoC: {
//     height: 87,
//     width: '100%',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttons: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     height: 60,
//     width: '100%',
//   },
//   btn: {
//     height: 60,
//     width: 84,
//     borderRadius: 15,
//     backgroundColor: '#BED2FF',
//     color: '#000000',
//     paddingLeft: 31.5,
//     marginTop: 15,
//     fontSize: 40,
//     letterSpacing: -1.5,
//   },
// });
