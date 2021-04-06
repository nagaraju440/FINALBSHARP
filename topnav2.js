import React from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
    ScrollView
} from 'react-native';
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';
import Piano from './IMAGES/pianoimage.jpg'

class Courses extends React.Component {
    render() {
        console.log(Piano);
        return (
            <View style={styles.container1}>
                {/* <ScrollView> */}
                <View style={styles.TopNav}>
                    <Text>Hii</Text>
                    <Text>
                        Coursesss
                    </Text>
                    <Image source={Piano} style={styles.Image} />
                   <Text style={styles.heading1}>Full Course Mastering Keyboard</Text>
                    <Text style={styles.text1}>
                        We are the best Carnatic Classical Music Academy in{'\n'}
                        Hyderabad, specialised in both online music classes and offline{'\n'}
                        music classes, established in the year  1998   with an   aim   to{'\n'}
                        spread  the  knowledge of BS#ARP MUSIC worldwide. We{'\n'}
                        provide online music classes for kids and all age group of{'\n'}
                        students.
                    </Text>
                </View>
                {/* </ScrollView> */}
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container1: {
        // marginTop: 50,
        height: 1532,
        width: 428
    },
    TopNav: {
        height: 57,
        width: 414,
        color: 'blue',
        // padding: 25,
        paddingLeft: 25
    },
    Image: {
        height: 189,
        width: 300
    },
    heading1: {
        marginTop: 35,
        textAlign: 'justify',
        fontFamily: 'SemiBold',
        fontSize: 16,
        marginLeft: 50
    },
    text1: {
        marginTop: 17,
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Regular',
        marginRight: 91
    }
});

export default Courses;