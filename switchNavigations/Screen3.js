import React from 'react'
import { View, Text ,Button} from 'react-native'

export default function Screen3({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>this is first screen</Text>
            <Button
            title="next > "
            onPress={() =>
                navigation.navigate('Screen4')
              }
            />

            
        </View>
    )
}
