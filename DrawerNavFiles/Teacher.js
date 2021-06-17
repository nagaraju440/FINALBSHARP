import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  StyleSheet,
} from 'react-native';
const {height, width} = Dimensions.get('screen');
import StackNav from '../TopNavs/stack';


export class Teachers extends Component {
  render() {
    return (
      <ScrollView>
          <StackNav/>
        <View style={styles.teacherCard}>
          <View style={styles.imageContainer}>
            <Text>place image here</Text>
          </View>
          <View style={styles.cardInfoContainer}>
            <Text style={styles.text1}>V Ramakrishnan</Text>
            <View>
              <Text style={styles.text2}>
                Pro Guitarist, Singer and a Music Enthusiast he has been
                teaching Guitar for over 10 years. Ram has been actively
                performing on Stage with various Music bands. Ram has a unique
                style in mixing Devotional songs with his peppy Guitar music
                which makes the audience go WOW! A regular member of Shri.
                Chayanna’s Satsang team.
              </Text>
              <Text style={styles.text2}>
                Ram is also a popular Youth Trainer and Teaches stress
                management workshops through Art of Living.
              </Text>
              <Text style={styles.text2}>
                Ram takes care of the Guitar training in B’Sharp Music Academy.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.teacherCard}>
          <View style={styles.imageContainer}>
            <Text>place image here</Text>
          </View>
          <View style={styles.cardInfoContainer}>
            <Text style={styles.text1}>Raviprakash</Text>
            <View>
              <Text style={styles.text2}>
                Ravi Prakash a fantastic classical singer with years of
                experience performing on stage and concerts. His in depth
                knowledge of Carnatic Classical music is a boon to the students
                who learn from him.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.teacherCard}>
          <View style={styles.imageContainer}>
            <Text>place image here</Text>
          </View>
          <View style={styles.cardInfoContainer}>
            <Text style={styles.text1}>Kiran Shankar</Text>
            <View>
              <Text style={styles.text2}>
                Kiran Shankar is a Successful Music Director and Music Producer
                and has worked with popular music directors in Kannada Film
                industry. Kiran has performed in, many stage shows. He is also
                founding member of the Band
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.teacherCard}>
          <View style={styles.imageContainer}>
            <Text>place image here</Text>
          </View>
          <View style={styles.cardInfoContainer}>
            <Text style={styles.text1}>Sriram</Text>
            <View>
              <Text style={styles.text2}>
                A dedicated Youth who is dedicated to teach Music to the Young
                and Energetic. Our Youth specialist Keyboard teacher Sriram is
                passionate about teaching kids and youngsters the art of playing
                Keyboard. He has performed on All India Radio and has performed
                many stage shows.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Teachers;

const styles = StyleSheet.create({
  teacherCard: {
    width: width,
    // height: 480,
    // backgroundColor:'red',
    marginTop: 20,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    height: 150,
    width: '50%',
    marginTop: 20,
    justifyContent: 'center',
  },
  cardInfoContainer: {
    marginTop: 10,
    padding: 15,
    alignItems: 'center',
  },
  text1: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
  text2: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Roboto',
  },
});
