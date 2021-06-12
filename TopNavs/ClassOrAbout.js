import React, { Component } from 'react'
import { Text, View,ActivityIndicator,Dimensions } from 'react-native'
import auth from '@react-native-firebase/auth';
import About from '../DrawerNavFiles/About'
import { EventRegister } from 'react-native-event-listeners'
import StackNav from './stack';
var firebase = require("firebase");
var config = {
  databaseURL: "https://sample-b0875.firebaseio.com/",
  projectId: "sample-b0875",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class ClassOrAbout extends Component {
    constructor(props){
        super(props);
        this.state={
           x:'',
        }
    }
    loadData=()=>{
        firebase.database().ref('/Users/'+auth().currentUser.uid+'/Courses')
        .once('value')
           .then((snapshot) => {
        //    console.log(snapshot.val(),"i am from class or about page",)
           if(snapshot.val()!=null){
             this.setState({x:true})
           }else{
            this.setState({x:false})
           }
           
           })
    }
    componentDidMount=()=>{
        this.loadData()
           this.listener = EventRegister.addEventListener('loadData', (data) =>{
               this.setState({x:''})
               console.log("sucsessfully loaded data")
            this.loadData()
           })
    }
    render() {
        return (
            <View style={{backgroundColor:'white'}}>
            <View>
                {
                    this.state.x===''?<View style={{backgroundColor:'white',height:windowHeight}}>
                        <ActivityIndicator size="large" color="black" style={{marginTop:140}}/>
                    </View>:<View>
                        {
                            this.state.x===true?<Text>displaying class page here</Text>:<About navigation={this.props.navigation}/>
                        }
                    </View>
                }
            </View>
            </View>
        )
    }
}
