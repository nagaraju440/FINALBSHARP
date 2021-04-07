import React from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
    TextInput,
    ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { G } from 'react-native-svg';
import Guitar from '../Icons/GuitarGradient'
import Piano from '../Icons/PianoGradient'
class MyCourses extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View>
                        <Text style={{ fontSize: 20 }}>My courses</Text>
                        <Text style={{ borderBottomWidth: 3, width: 60, marginTop: -5 }}></Text>
                        <Text >{'\n'}</Text>
                    </View>

                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#345BE8', '#57DCD3']} style={styles.linearGradient} >
                        <View style={styles.leftText}>
                            <Text style={styles.textColor}
                                style={{
                                    fontSize: 18,
                                    color: 'white',
                                    fontWeight: 'bold',
                                    marginTop: 20
                                }}
                            >
                                Mastering Guitar{'\n'}
                            </Text>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.textColor}>
                                    Saturday & sunday
                                </Text>
                                <Text style={styles.textColor}>
                                    7:00pm to 8:30pm{'\n'} {'\n'}
                                </Text >
                            </View>

                            <Text style={styles.textColor}>
                                Manosmi
                        </Text>
                        </View>
                        <View style={styles.rightGuitar}>
                            <Guitar />
                        </View>

                    </LinearGradient>
                    <View>
                        <Text> {'\n'} </Text>

                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#345BE8', '#57DCD3']} style={styles.linearGradient} >
                            <View style={styles.leftText}>
                                <Text style={styles.textColor}
                                    style={{
                                        fontSize: 18,
                                        color: 'white',
                                        fontWeight: 'bold',
                                        marginTop: 20
                                    }}
                                >
                                    Mastering Piano{'\n'}
                                </Text>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.textColor}>
                                        Saturday & sunday
                                </Text>
                                    <Text style={styles.textColor}>
                                        7:00pm to 8:30pm{'\n'} {'\n'}
                                    </Text >
                                </View>

                                <Text style={styles.textColor}>
                                    Manosmi
                        </Text>
                            </View>
                            <View style={styles.rightGuitar}>
                                <Piano />
                            </View>

                        </LinearGradient>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    linearGradient: {
        height: 178,
        width: 339,
        // flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        marginTop: -10
    },
    textColor: {
        color: 'white'
    },
    leftText: {

        alignItems: 'flex-start'
    },
    rightGuitar: {
        alignItems: 'flex-end',
        marginTop: -110
    }


})

export default MyCourses;
