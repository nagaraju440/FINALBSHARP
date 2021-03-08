import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated,
    // TextInput,
    LogBox
  } from 'react-native';
  import {FloatingLabelInput} from 'react-native-floating-label-input';
  import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';
  import { TextInput ,configureFonts} from 'react-native-paper';
class Notification extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text:null,
      weight1:"bold"
    }
  }
  componentDidMount=()=>{
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  
  }
    render() { 
        return ( 
            <ScrollView style={{backgroundColor:"white"}}>
              
      <View style={styles.bigbox}>
      
        <View style={styles.formargintop}>
        </View> 
       <View style={styles.formargintop}>
       <OutlinedTextField
        label='Name of the Course'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
        containerStyle={{height:46,borderRadius:15}}
        inputContainerStyle={{height:46,borderRadius:15}}
        baseColor="black"
      />  
       </View>
       <View style={styles.formargintop}>
       <OutlinedTextField
        label='Description'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
        containerStyle={{height:46,borderRadius:15}}
        inputContainerStyle={{height:46,borderRadius:15}}
        baseColor="black"
      />  
       </View>
       <View style={styles.formargintop}>
       <OutlinedTextField
        label='Fee'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
        containerStyle={{height:46,borderRadius:15}}
        inputContainerStyle={{height:46,borderRadius:15}}
        baseColor="black"
      />  
       </View>
       <View style={styles.formargintop}>
       <OutlinedTextField
        label='No. of Batches'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
        containerStyle={{height:46,borderRadius:15}}
        inputContainerStyle={{height:46,borderRadius:15}}
        baseColor="black"
      />  
       </View>
       <View style={styles.formargintop}>
       <OutlinedTextField
        label='Timings'
        keyboardType='default'
        labelTextStyle={{fontWeight:"bold",fontFamily:"poppins",color:"black"}}
        containerStyle={{height:46,borderRadius:15}}
        inputContainerStyle={{height:46,borderRadius:15}}
      baseColor="black"
      />  
       </View>
      
        <View style={styles.forimgupload}>
               <View style={styles.forimg}><Text></Text></View>
               <View style={styles.forextra}>
               <View style={styles.forextra1}>
                   <Text style={{color:"#2C57EF",fontSize:10,fontWeight:"bold",fontFamily:"poppins"}}>upload image</Text>
               </View>
               <View style={styles.forextra2}>
                 <Text style={{color:"black",fontSize:10,fontWeight:"bold",fontFamily:"poppins"}}>cancel</Text>
               </View>
               </View>
        </View>
        <View style={styles.uploadbut}>
     <Text style={{color:"white",fontSize:13,fontFamily:"Poppins",fontWeight:"bold"}}>Upload Course</Text>
        </View>
      </View>
            </ScrollView>
         );
    }
}

 
export default Notification;
const styles=StyleSheet.create({
  bigbox:{
     width:"90.09%",
     height:506,
     marginTop:37,
    //  backgroundColor:"red",
     marginLeft:20.5,
  },
  formargintop:{
    marginTop:12,
    width:"100%",
    // borderRadius:13,
  },
  forimgupload:{
    marginTop:33,
    width:228,
    flexDirection: 'row',
    height:70,

  },
  uploadbut:{
    marginTop:33,
    width:"100%",
    height:53,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:12, 
    backgroundColor:"#2C57EF",
  },
  forimg:{
    width:"40%",
    height:"100%",
    borderRadius:12,
    borderWidth:1,
  },
  forextra:{
       marginLeft:20,   
  },
  forextra1:{
    width:111,
    height:30,
    borderColor:"#2C57EF",
    color:"blue",
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forextra2:{
    width:111,
    height:30,
    marginTop:10,
    borderColor:"black",
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})