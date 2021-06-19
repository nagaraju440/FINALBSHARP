import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView, Image,TouchableOpacity,ImageBackground} from 'react-native';
var firebase = require("firebase");
var config = {
  databaseURL: "https://sample-b0875.firebaseio.com/",
  projectId: "sample-b0875",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
import auth from '@react-native-firebase/auth';
class DemoClassStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
componentDidMount=()=>{
       firebase.database().ref('/DemoClass/Courses').
       once('value').then(l=>{
        //    console.log(l.val())
           Object.values(l.val()).map(k=>{
              this.state.data= this.state.data.concat({img:k.imgUrl,no:k.no,name:k.name})
               this.setState({data:this.state.data})
           })
        //    console.log("data is final",this.state.data)
       })
}
  render() {
    return (
      <ScrollView style={{width:'95%',marginLeft:10}}>
       {
             <View
             style={{
               width: '100%',
               // padding:10,
               alignItems:'center',
               flexDirection: 'row',
               flexWrap: 'wrap',
               justifyContent:'space-evenly'
             }}>
             {this.state.data.map((l) => {
               return (
                 <TouchableOpacity
                   onPress={() => {
                     //    console.log(l)
                     this.props.navigation.navigate({
                       name: 'DemoClassCourseWiseStudents',
                       params: l,
                     });
                   }}
                   style={{width: '46%', height: 180,marginTop:10,padding:10}}
                  >
                   <Image
                     source={{uri: l.img}}
                     style={{
                       width: '100%',
                       height: '100%',
                       // marginTop: 70,
                       borderRadius:10,
                       opacity:0.4,
                     }}></Image>
                     <Text
                       style={{
                         fontWeight: 'bold',
                         fontSize: 16,
                         textAlign: 'center',
                         // elevation:5,
                         marginTop:-100,
                         color:'#040629'
                       }}>
                       {' '}
                       {l.name}
                     </Text>
                 </TouchableOpacity>
               );
             })}
           </View>
       }
      </ScrollView>
    );
  }
}

export default DemoClassStudents;

const styles = StyleSheet.create({
    outerbox: {
      width: '85%',
      //   height: 3695,
        // borderColor:"red",
      //   backgroundColor:"red",
      //   paddingTop:1000,
      marginLeft: '7%',
      marginBottom:50,
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
      //   marginTop: 21,
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
      marginTop: 20,
    },
    sunilcborderwidth: {
      borderRadius: 6,
      borderColor: 'whitesmoke',
      borderWidth: 1,
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
      width: 150,
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
    registerBtn1: {
      color: '#fff',
      fontSize: 11,
      fontFamily: 'Poppins',
      height: 28,
      width: 142,
      backgroundColor: '#2C57EF',
      borderRadius: 6,
      textAlign: 'center',
      textAlignVertical: 'center',
      marginLeft: 20,
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
  