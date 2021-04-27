import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TouchableOpacity, Button, TextInput } from "react-native";
import Slider from '@react-native-community/slider';
// import { Button } from "react-native-paper";

const Tanpura = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    const [text, onChangeText] = React.useState("Useless Text");
    return (
        <View style={styles.container}>
            <View style={{ borderColor: "#707070", borderWidth: 1, borderRadius: 10 }}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 46, width: 330 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Sa" value="Sa" />
                    <Picker.Item label="Re komal" value="Re komal" />
                    <Picker.Item label="Re" value="Re" />
                    <Picker.Item label="Ga komal" value="Ga komal" />
                    <Picker.Item label="Ga" value="Ga" />
                    <Picker.Item label="Ma" value="Ma" />
                    <Picker.Item label="Ma tivra" value="Ma tivra" />
                    <Picker.Item label="Pa" value="Pa" />
                    <Picker.Item label="Dha komal" value="Dha komal" />
                    <Picker.Item label="Dha" value="Dha" />
                    <Picker.Item label="Ni komal" value="Ni komal" />
                    <Picker.Item label="Ni" value="Ni" />
                </Picker>
            </View>
            <View style={{ borderColor: "#707070", borderWidth: 1, borderRadius: 10, marginTop: 15 }}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 46, width: 330 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="A" value="A" />
                    <Picker.Item label="A#" value="A#" />
                    <Picker.Item label="B" value="B" />
                    <Picker.Item label="C" value="C" />
                    <Picker.Item label="C#" value="C#" />
                    <Picker.Item label="D" value="D" />
                    <Picker.Item label="D#" value="D#" />
                    <Picker.Item label="E" value="E" />
                    <Picker.Item label="F" value="F" />
                    <Picker.Item label="F#" value="F#" />
                    <Picker.Item label="G" value="G" />
                    <Picker.Item label="G#" value="G#" />
                </Picker>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ marginRight: 135 ,left:5}}>Pitch Semi</Text>
                    <Text style={{ color: "#000000", fontSize: 18, left: -100 }}>-</Text>
                    <Text style={{ color: "#000000", fontSize: 18, left: -70,backgroundColor:'#F1EFEF',borderRadius:10 }}>    1    </Text>
                    <Text style={{ color: "#000000", fontSize: 18, left: -40 }}>+</Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{right:10}}>Speed</Text>
                    <Slider
                        style={{ width: 180, height: 40 ,left:27}}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                    <Text style={{right:8}}>Volume</Text>
                    <Slider
                        style={{ width: 180, height: 40,left:23 }}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                </View>
                <View style={{ borderWidth: 1, height: 40, width: 330, borderRadius: 10, borderColor: '#707070', backgroundColor: '#292629', justifyContent: 'center' }}>
                    <TouchableOpacity

                        onChangeText={onChangeText}
                        style={{ alignItems: 'center' }}
                    >
                        <Text style={{ color: '#FFFFFF', alignItems: 'center' }}>Play</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
        // marginTop:20
    }
});


export default Tanpura;