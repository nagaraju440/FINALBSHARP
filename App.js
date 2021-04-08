import React from 'react';
import { View, Image, ScrollView,Dimensions } from 'react-native';
import Courosal from '../FINALBSHARP/corosal/courosal';
import Courosel2 from '../FINALBSHARP/corosal/courosel2'

const {width} =Dimensions.get("window");
const height = width *0.6;
const images = [
  'https://images.pexels.com/photos/4916161/pexels-photo-4916161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1591305/pexels-photo-1591305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]

export default class App extends React.Component {
  render() {
    return (
      // <Courosal></Courosal>
      <Courosel2></Courosel2>

    )
  }
}
