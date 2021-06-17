import React from 'react';
import { Text } from 'react-native';
import Newmetro2 from '../metronome/Tempo'
// import { WebView } from 'react-native-webview';



const Metronome = () => {
  return (
    // <Text>Hello, I am your Metronome!</Text>
    // <Newmetro2/>
    <WebView source={{ uri: 'https://www.virtualsheetmusic.com/metronome/' }} />
    
  );
}

export default Metronome;