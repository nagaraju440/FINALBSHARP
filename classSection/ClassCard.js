import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export class ClassCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [
        {
          language: 'Telugu',
          courseName: 'Full Course Mastering Keyboard',
          startTime: '6:00',
          endTime: '8:00',
          image:'',
        },
        {
          language: 'English',
          courseName: 'KeyboFull Course Guitar',
          startTime: '9:00',
          endTime: '10:00',
          image:'',
        },
      ],
    };
  }
  render() {
    return (
      <View>
        {this.state.card.map((k) => {
          return (
            <View style={styles.card}>
              <View style={styles.image}>
                {/* <Image source={Piano} style={styles.piano1}></Image> */}
              </View>
              <View style={styles.cardTextArea}>
                <View style={styles.flex}>
                  <View style={styles.languagebg}>
                    <Text style={styles.languagetext}>{k.language}</Text>
                  </View>
                  <Text style={styles.courseName}>
                    {k.courseName}
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: 'bold',
                      fontSize: 14,
                      marginTop: 12,
                    }}>
                    Batch and time
                  </Text>
                  <Text style={{color: '#A7A7A7', fontSize: 12, marginTop: 4}}>
                    Batch1:morning {k.startTime} and {k.endTime}
                  </Text>
                </View>

                <View style={styles.buttonSection}>
                  <TouchableOpacity style={styles.buttonBg1}>
                    <Text style={styles.joinClassBtn}>Join Class</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonBg2}>
                    <Text style={styles.visitCourseBtn}>View Course</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
// for reference to me about maping
{
  /* <View>
            {Object.keys(this.state.sobj.name1).map((l) => {
              console.log('sname is ', l);
              return (
                <View>
                  <Text>{l}</Text>
                </View>
              );
            })}
          </View> */
}
{
  /* <View>
            {this.state.array.map((l) => {
              return(<View> 
              <Text>{l.name}</Text>
                        <Text>{l.courseName}</Text>
                        <Text>{l.cost}</Text>
                        </View>
                )
            })}
          </View> */
}

export default ClassCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 450,

    // backgroundColor:"blue",
    marginTop: 50,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  image: {
    width: '100%',
    height: 295,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    borderTopStartRadius: 15,
    borderTopRightRadius: 15,
    alignContent: 'center',
    alignItems: 'center',
  },
  piano1: {
    width: '100%',
    height: 295,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  cardTextArea: {
    borderRadius: 6,
    borderColor: 'whitesmoke',
    borderWidth: 3,
    height: 160,
    paddingLeft: '4%',
    paddingRight: '4%',
    marginTop: -1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  flex: {
    marginTop: 18,
    display: 'flex',
    flexDirection: 'row',
  },
  languagebg: {
    height: 20,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 8,
    backgroundColor: '#EEEEEE',
  },
  languagetext: {
    fontSize: 10,
    fontFamily: 'poppins',
    fontWeight: 'bold',
  },
  courseName: {
    fontFamily: 'Raleway',
    fontSize: 16,
    fontWeight: '700',
    color: '#292629',
    marginLeft:10,
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
  buttonSection: {
    flexDirection: 'row',
    marginTop: 16,
  },
  buttonBg1: {
    height: 30,
    width: 91,
    backgroundColor: '#000DFF',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBg2: {
    height: 30,
    width: 91,
    backgroundColor: '#EEEEEE',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  joinClassBtn: {
    color: '#fff',
    fontSize: 11,
    fontFamily: 'Poppins',
    borderRadius: 6,
  },
  visitCourseBtn: {
    color: '#292929',
    fontSize: 11,
    fontFamily: 'Poppins',
    borderRadius: 6,
  },
});
