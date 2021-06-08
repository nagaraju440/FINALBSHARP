import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import ClassCard from './ClassCard'

export class ClassPage extends Component {
    render() {
        return (
            <ScrollView>
                <Text> heloo there this is calsss page </Text>
                <ClassCard />
                {/* <ClassCard /> */}
            </ScrollView>
        )
    }
}

export default ClassPage
