import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Image1 from './profileImage.png';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import color from 'color';
import auth from '@react-native-firebase/auth';
// import EditIcon from './editIcon.js';
// import DeleteIcon from './deleteIcon.js';

export default class Profile extends Component {
  render() {
    return (
      <View>
        <View style={styles.Component}>
          <Image source={Image1} />
          <Text style={styles.name}>Mike Anderson</Text>
          <Text style={styles.rollNo}>Roll no. 2</Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#AAB8C2',
            width: '100%',
            marginTop: 14,
          }}
        />
        {/* <OutlinedTextField
        label='sunil kalikayi'
        /> */}
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <OutlinedTextField
            label="First Name"
            value='Mike Anderson'

            keyboardType="key-pad"
            containerStyle={{
              height: 50,
              marginTop:20,
              width: 330,
            }}
            baseColor='#0080F3'

            inputContainerStyle={{
                borderColor:"dodgerblue"
            }}
            editable={false}
            // formatText={this.formatText}
            // onSubmitEditing={this.onSubmit}
            // ref={this.fieldRef}
          />
          <OutlinedTextField
            label="Last Name"
            value='Anderson'
            keyboardType="key-pad"
            editable={false}
            baseColor='#0080F3'

            containerStyle={{
              height: 50,
              width: 330,
              marginTop:20,
            }}
          />
          <OutlinedTextField
            label="Phone Number"
            value='9440588180'
            keyboardType="phone-pad"
            editable={false}
            baseColor='#0080F3'

            containerStyle={{
              height: 50,
              marginTop:20,
              width: 330,
              borderColor:'red'
              
            }}
          />
          <TouchableOpacity style={styles.iconSection}>
            <Text  style={{color:'#707070', fontWeight:'normal',fontFamily:'Roboto'}}>Edit Profile</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.iconSection}>
            <Text style={{color:'#707070',fontWeight:'normal', fontFamily:'Roboto' }} >Change Profile Photo</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.ButtonSection}
          onPress={()=>{
            auth().signOut()
          }}
          >
            <Text style={{color:'#fff', fontWeight:'bold', fontFamily:'Roboto'}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Component: {
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: '#262626',
    lineHeight: 24,
  },
  rollNo: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    color: '#657786',
    lineHeight: 16,
  },
  line: {
    borderWidth: 1,
    borderColor: '#AAB8C2',
    backgroundColor: 'red',
    width: '100%',
    height: 1,
    borderStyle: 'solid',
  },
  ButtonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    backgroundColor:'#2C57EF',
    height:48,
    width:330,
    borderRadius:10,
    justifyContent:'center',
    color:'#fff'
  },
  iconSection: {
    alignItems: 'center',
    marginTop: 15,
    backgroundColor:'#E2E8FA',
    height:48,
    width:330,
    borderRadius:10,
    justifyContent:'center'
  },
  iconText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: '#14171A',
    lineHeight: 20,
  },
});
