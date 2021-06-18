import React, { Component } from 'react'
import { Text, View,ActivityIndicator,Dimensions } from 'react-native'
import auth from '@react-native-firebase/auth';
import About from '../DrawerNavFiles/About'
import { EventRegister } from 'react-native-event-listeners'
import Drawernavi from './TopNav';
import MyCourses from '../DrawerNavFiles/mycourses-P';
import { not } from 'react-native-reanimated';

// import StackNav from './stack';
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
           component:'',
           y:''
        }

    }
    loadData=()=>{
        // ..........................login student user or admin checking..............................
        firebase.database().ref('/Admins/').orderByChild('email').equalTo(auth().currentUser.email)
 .once('value').then(l=>{  
    console.log(l.val(),"is l")
    if(l.val()==null){
     x=0
     this.setState({y:0})
     console.log("x is",x,l)
    }else{
        this.setState({y:1})
     console.log("x is",x,l)
    }
 }).catch(l=>{
   console.log("no such documentttt")
 })
        // ..................student registered for the course or not...............................
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
        if(this.state.x===''){
            return(
                <View style={{backgroundColor:'white',height:windowHeight}}>
                <ActivityIndicator size="large" color="black" style={{marginTop:140}}/>
                </View>
            )
        }else if(this.state.x===false){
         return(
             <Drawernavi props={{pageName:'About',isAdmin:this.state.y}}/>
         )
        }else if(this.state.x===true){
            return(
                <Drawernavi props={{pageName:'MyCourses',isAdmin:this.state.y}}/>
            )
        }
        // return (
        //     <View>
        //     <Drawernavi />
              
        //     </View>
        //     // <View style={{backgroundColor:'white'}}>
        //     // <View>
        //     //     {
        //     //         this.state.x===''?<View style={{backgroundColor:'white',height:windowHeight}}>
        //     //             <ActivityIndicator size="large" color="black" style={{marginTop:140}}/>
        //     //         </View>:<View>
        //     //             {
        //     //                 this.state.x===true?<About/>:<Drawernavi/>
        //     //             }
        //     //         </View>
        //     //     }
        //     // </View>
        //     // </View>
        // )
    }
}
