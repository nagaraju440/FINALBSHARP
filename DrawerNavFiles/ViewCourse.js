import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import StackNav from '../TopNavs/stack';
import UpArrow from './svgIcons/UpArrow';
import DownArrow from './svgIcons/DownArrow';

const {height, width} = Dimensions.get('window');

export default class ViewCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: false, // for main dorp down (select your slot - sat, sun)
      y: false, // for second drop down( saturday slots- slot1, slot2, slot3 )
      z: false, // for third drop down ( sunday slots- slot1, slot2, slot3 )
      value: '',
      setValue: '',
    };
  }
  componentDidMount=()=>{
    console.log(this.props.route.params,"is props")

  }
  register=()=>{
      this.props.navigation
  }
  render() {

    return (
      <View style={{backgroundColor:'white'}}> 
        <StackNav />

      <ScrollView>

      <View
        style={{
          height: 1500,
          width: width,
          // flexDirection: 'column',
          // justifyContent: 'space-between',
        }}>
     
          <View style={{flex: 1, alignItems: 'center'}}>
            <View
              style={{
                width: '93.3%',
                height: 220,
                backgroundColor: 'grey',
                marginTop: 20,
                borderRadius: 10,
              }}></View>
            <View
              style={{
                width: '93.3%',
                height: 80,
                backgroundColor: 'white',
                borderColor: 'grey',
                borderWidth: 0.1,
                marginTop: 1,
              }}>
              <Text style={styles.dropDownText}>{this.props.route.params.name} Course</Text>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontSize: 12,
                  fontWeight: '500',
                  marginTop: 5,
                }}>
              {this.props.route.params.description} 
              </Text>
            </View>
            {this.state.x === false ? (
              <View style={styles.dropDownBox}>
                <Text style={styles.dropDownText}>Select Your Slot</Text>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      x: !this.state.x,
                    });
                  }}>
                  {/* <Text>click</Text> */}
                  <DownArrow />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{width: width, height: 300, marginLeft: 25}}>
                <View style={styles.dropDownBox}>
                  <Text style={styles.dropDownText}>Select Your Slot</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        x: !this.state.x,
                      });
                    }}>
                    {/* <Text>click</Text> */}
                    <UpArrow />
                  </TouchableOpacity>
                </View>
                <>
                <View>
                <RadioButton.Group
                          onValueChange={(newValue) =>
                            this.setState({
                              value: newValue,
                            })
                          }
                          value={this.state.value}>
                  {this.state.y === false ? (
                    <View style={styles.dropDownBox1}>
                      <Text style={styles.dropDownText}>Saturday Slots</Text>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({
                            y: !this.state.y,
                          });
                        }}>
                        {/* <Text>click</Text> */}
                        <DownArrow />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    
                    <View style={{width: width, height: 180}}>
                      <View style={styles.dropDownBox1}>
                        <Text style={styles.dropDownText}>Saturday Slots</Text>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({
                              y: !this.state.y,
                            });
                          }}>
                          {/* <Text>clicl</Text> */}
                          <UpArrow />
                        </TouchableOpacity>
                      </View>
                      <View style={{marginLeft: 15}}>
                       
                          {
                            Object.values(this.props.route.params.Batches).map((l,i)=>{
                             if(l.day==='saturday'){
                               return(
                                <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <RadioButton value={l.no} />
                            <Text>{l.time}</Text>
                          </View>
                               )
                             }
                            })
                          }
                    
                        
                      </View>
                    </View>
                  )}
                  <View>
                    {this.state.z === false ? (
                      <View style={styles.dropDownBox1}>
                        <Text style={styles.dropDownText}>Sunday Slots</Text>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({
                              z: !this.state.z,
                            });
                          }}>
                          {/* <Text>click</Text> */}
                          <DownArrow />
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <View style={{width: width, height: 180}}>
                        <View style={styles.dropDownBox1}>
                          <Text style={styles.dropDownText}>Sunday Slots</Text>

                          <TouchableOpacity
                            onPress={() => {
                              this.setState({
                                z: !this.state.z,
                              });
                            }}>
                            {/* <Text>click</Text> */}
                            <UpArrow />
                          </TouchableOpacity>
                        </View>
                        <View style={{marginLeft: 15}}>
                        
                            {
                            Object.values(this.props.route.params.Batches).map((l,i)=>{
                             if(l.day=='sunday'){
                               return(
                                <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <RadioButton value={l.no} />
                            <TouchableOpacity>
                            <Text>{l.time}</Text>
                            </TouchableOpacity>
                          </View>
                               )
                             }
                            })
                          }
                            
                     
                        </View>
                      </View>
                    )}
                    </View>
                    </RadioButton.Group>
                    
                  </View>
                </>
              </View>
            )}
    
      <TouchableOpacity style={styles.registerBtn}
      onPress={this.register}
      >
          <View style={{width: 300,height:50}}>
            <Text style={{color:'white'}}>Register</Text>
            </View>
          </TouchableOpacity>

          </View>
          
          
        
      
      </View>

       
      </ScrollView>
      </View>
    );
  }
}

// export default Viewcourse;

const styles = StyleSheet.create({
  dropDownBox: {
    width: '93.3%',
    height: 44,
    backgroundColor: '#83B8FF',
    borderColor: 'grey',
    borderWidth: 0.1,
    marginTop: 20,
    justifyContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 9,
    paddingRight: 10,
    borderRadius: 10,
  },
  dropDownBox1: {
    width: '90.5%',
    height: 44,
    backgroundColor: '#BFDAFF',
    borderColor: 'grey',
    borderWidth: 0.1,
    marginTop: 4,
    justifyContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 9,
    paddingRight: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  // dropDownBox2: {
  //   width: '90%',
  //   height: 44,
  //   backgroundColor: '#83B8FF',
  //   borderColor: 'grey',
  //   borderWidth: 0.1,
  //   marginTop: 1,
  //   justifyContent: 'center',
  //   justifyContent: 'space-between',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingLeft: 9,
  //   paddingRight: 10,
  //   marginLeft: 10,
  //   borderRadius: 10,
  // },
  dropDownText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerBtn: {
    width: (312 / 360) * 100 + '%',
    height: 48,
    backgroundColor: '#1A73E9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // top:400
  },
});