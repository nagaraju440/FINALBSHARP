import React from 'react'
import { View, Text } from 'react-native'
import ShareImage from './images/ShareImage'

const SettingsPage = () => {
    return (
        <View>
            <Text>hello this is settings page</Text>
            <View style= {{
                    height:100,
                    width:100,
                    backgroundColor:"dodgerblue"
                }} >
                <ShareImage />
            </View>
            
        </View>
    )
}

export default SettingsPage
