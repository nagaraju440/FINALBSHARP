import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image
} from 'react-native';
import SwipeButton from 'rn-swipe-button';

const Splash= () => {
  return (
    <View style={styles.container}>
                    
                    <View style={styles.header}>
                  
                  <Image source ={require ('../STYLES/bg2.png')} style={styles.cover} />
                  <Image source ={require ('../STYLES/cover.png')}   />
                  
                  <View style={styles.pic1} >
                  
                  <Image source ={require ('../STYLES/logo.png')} style={styles.pic} />
                  </View>
              </View>

                    <View style={styles.footer}>
                    

                      <Text style={styles.titleStyle}>B#SHARP</Text>
                       <Text style={styles.para}>
      
       Music is the art of arranging sounds in time to produce a composition 
       through the elements of melody, harmony, rhythm, and timbre.Music 
      It is one of the universal cultural aspects of all human societies.Music
        General definitions of music. Music is the art of arranging sounds in time to produce a composition 
       through the elements of melody, harmony!
         </Text>


        <View style={{marginTop:230,position:"absolute",paddingLeft:10}}>
       <SwipeButton
          disabled={false}
          swipeSuccessThreshold={70}
          height={40}
          width={300}
          title="Swipe and Let's go >>"
          
          
         
          onSwipeSuccess={() => {
            alert('Submitted Successfully!');
          }}
          
          railFillBackgroundColor="#e688a1" 
          railFillBorderColor="#e688ff" 
          thumbIconBackgroundColor="#2B57EE"
          thumbIconBorderColor="#CCDDEE" 
          railBackgroundColor="white" 
          railBorderColor="#bbeaff"
        />
        </View>
        </View>   
        </View>  
    
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom:0,
  },
  footer: {
    flex:1,
    width:"90%",
    backgroundColor: '#EBF2FF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 40,
    marginLeft:18,
  },

  cover: {
    height: 410,
    width: 395,
    position:'absolute',       
   
  },
  pic:{
    height: 300,
    width: 245,
    
   position:'absolute',
    
  },
  pic1:{
    paddingRight:240,
    position:'absolute',
    paddingBottom:290
    },

 
  titleStyle: {
  fontSize: 22,
 fontWeight: 'bold',
 paddingLeft:30

},
para:{
fontSize:12,
paddingTop:20,
paddingLeft:30,
paddingBottom:50

},
});