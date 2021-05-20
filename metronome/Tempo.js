import React, {Component, createContext} from 'react';
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Images,
  Text,
  SafeAreaView,
} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Slider from 'react-native-slider';
var x;
var y=40;
var whoosh;
class Newmetro2 extends React.Component {
    constructor(){
        super();
        this.state={
            value:100,
            i:0,
            j:0,
           // bpm:600,
            //k:1000,
            sounds: [
                {
                    file:'ma',
                    sound:'mp3',
                },
                {
                    file:'mb',
                    sound:'mp3',
                },
                {
                    file:'mc',
                    sound:'mp3',
                },
                {
                    file:'md',
                    sound:'mp3',
                },
                {
                    file:'me',
                    sound:'mp3',
                },
                {
                    file:'mf',
                    sound:'mp3',
                },
            ]
        }
    }
    playSong = () => {
          // x=setInterval(() => {
         console.log("bpm setinterval  is ",60000/this.state.value);
        try {
          console.log(this.state.sounds);
          console.log("thsinakdkajzdhkgja");
          // console.log(SoundPlayer.playSoundFile(this.state.sounds[this.state.j].file, this.state.sounds[this.state.j].sound));
          // SoundPlayer.playSoundFile(this.state.sounds[this.state.j].file, this.state.sounds[this.state.j].sound)
          SoundPlayer.playSoundFile('ma','mp3')
          
        } catch (e) {
          alert('Cannot play the file')
          console.log('cannot play the song file', e)
        }
    //  },60000/this.state.value);
      }
      handleSliderChange = (value)=> {
        this.state.value=value
        this.setState({
          value:this.state.value
        });
        clearInterval(x);
        this.playSong();
      }
      increaseTempo = () => {
        console.log('incrememntTemo is called');
        if (this.state.value < 300) {
          this.setState({
            value: this.state.value + 5,
          });
          clearInterval(x);
           this.playSong();
        }
      };

      decreaseTempo = () => {
        console.log('decreaseTempo is called');
        if (this.state.value > 30) {
          this.setState({
            value: this.state.value - 5,
          });
          clearInterval(x);
           this.playSong();
        }
      };
      stop=()=>{
        console.log("stop button clicked")
        clearInterval(x)
        setTimeout(function(){x}, 500);
    }
      nextSound=()=> {
        console.log("before i++",this.state.i)
         this.state.i=this.state.i+1
         this.state.j=this.state.i%6
         console.log(this.state.j)
         clearInterval(x);
         this.playSong();
         console.log("after i++",this.state.i)
      }
    render() 
    {
   return(
       <View style={styles.metronomeBg}>
       {/* ***********tempo******** */}
       <View style={styles.tempoContainer}>
         <View style={styles.tempoC}>
           <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 19}}>
             TEMPO
           </Text>
           <Text style={{fontSize: 18, fontWeight: '300'}}>
             {this.state.value}
              <Text style={{fontSize: 15}}>bpm</Text>
           </Text>
           <Text style={{fontSize: 18, fontWeight: '300'}}>presto</Text>
         </View>

         <View style={styles.buttons}>
           <TouchableOpacity
            onPress={this.decreaseTempo}
            >
             <Text style={styles.btn}>--</Text>
           </TouchableOpacity>
           <TouchableOpacity 
           onPress={this.increaseTempo}
           >
             <Text style={styles.btn}>+</Text>
           </TouchableOpacity>
         </View>
       </View>
       {/* ******** * tempo bar , next button , volume bar ************** */}
       <View style={styles.tempoBarSection}>
         {/* *******tempoSlider*********** */}
         <View style={{marginTop: 40}}>
           <Text style={{fontSize: 20}}>Tempo</Text>
         </View>
         <View>
           <Slider
             maximumTrackTintColor="white"
             minimumTrackTintColor="white"
             thumbTintColor="#00D092"
             value={this.state.value}
             maximumValue={300}
             minimumValue={30}
             onValueChange={this.handleSliderChange}
             step={5}
             style={{marginLeft: 85, marginTop: -30}}
           />
         </View>
       </View>
       {/********** * nextbutton section ************ */}
       <View>
         <TouchableOpacity
           style={{
             borderRadius: 10,
             backgroundColor: '#396DE5',
             width: 220,
             height: 65,
             fontWeight: '500',
             marginTop: 30,
             justifyContent: 'center',
             alignContent: 'center',
             alignItems: 'center',
           }}
           onPress={this.nextSound}
          >
           <Text
             style={{
               fontSize: 20,
               fontWeight: 'bold',
               color: '#FFFFFF',
             }}>
             Next Sound
           </Text>
         </TouchableOpacity>
       </View>
       {/************* * volume bar section*************** */}
       <View style={styles.tempoBarSection}>
         <View style={{marginTop: 40}}>
           <Text style={{fontSize: 20}}>volume</Text>
         </View>

         <Slider
           maximumTrackTintColor="white"
           minimumTrackTintColor="white"
           thumbTintColor="#00D092"
           maximumValue={100}
           minimumValue={0}
           step={0}
           style={{marginLeft: 85, marginTop: -30}}
           onValueChange={(y) => {
             console.log(y);
             //this.volumechange(y);
             SoundPlayer.setVolume(y);
           }}
         />
       </View>
       {/************* * start and stop section ************** */}

       <View
         style={{
           marginTop: 20,
           marginLeft: -8,
           flexDirection: 'row',
           justifyContent: 'space-around',
         }}>
         <TouchableOpacity
           style={{
             borderColor: '#396DE5',
             borderWidth: 3,
             backgroundColor: '#FFFFFF',
             width: 129,
             height: 110,
             borderRadius: 15,
             justifyContent: 'center',
             alignItems: 'center',
           }} 
           onPress={() => {
             this.stop();
           }}
           >
           <Text
             style={{
               fontSize: 16,
               color: '#396DE4',

               fontWeight: '500',
             }}>
             
             STOP
           </Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={{
             backgroundColor: '#396DE5',
             width: 129,
             height: 110,
             borderRadius: 15,
             justifyContent: 'center',
             alignItems: 'center',
             marginLeft: 15,
           }}
          onPress={this.playSong}
        >
           <Text
             style={{
               fontSize: 16,
               color: '#FFFFFF',
               fontWeight: '500',
               opacity: 100,
             }}>
             START
           </Text>
         </TouchableOpacity>
       </View>
     </View>
   );
 }
}
export default Newmetro2;

const styles = StyleSheet.create({
 metronomeBg: {
   backgroundColor: '#EEEEEE',
   height: 650,
   width: 325,
   margin: 20,
   borderRadius: 15,
   marginTop: 35,
   alignItems: 'center',
 },
 tempoContainer: {
   height: 200,
   width: 280,
   backgroundColor: '#fff',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: 40,

   borderRadius: 20,
 },
 tempoBarSection: {
   display: 'flex',
   //   flexDirection:"row",
   // marginLeft:38,
   marginTop: -5,

   width: '75%',
 },
 tempoC: {
   height: 87,
   width: '100%',
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 buttons: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'space-evenly',
   height: 60,
   width: '100%',
 },
 btn: {
   height: 60,
   width: 84,
   borderRadius: 15,
   backgroundColor: '#BED2FF',
   color: '#000000',
   paddingLeft: 31.5,
   marginTop: 15,
   fontSize: 40,
   letterSpacing: -1.5,
 },
});