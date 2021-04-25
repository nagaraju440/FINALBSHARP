import React from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'
import image1 from "./images/NoPath.png"

const Card = () => {
    return (
        <View>
            <TouchableOpacity style={{
                height:100,
                width:100,
                backgroundColor:"dodgerblue"
            }} >
                <Image source={image1} />

            </TouchableOpacity>
        </View>
    )
}

export default Card
