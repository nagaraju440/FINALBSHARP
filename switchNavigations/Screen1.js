import React from 'react'
import { View, Text,ScrollView,
Button } from 'react-native'
import { nodeModuleNameResolver } from 'typescript'

export default function Screen1({navigation}) {
    return (
        <ScrollView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>this is first screen</Text>
            <Button
            title="next > "
            onPress={() =>
                navigation.navigate('Screen2')
              }
            />

            

            
        </ScrollView>
    )
}
