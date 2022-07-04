import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View center middle>
                <Text h1 > Hier wird das Profil editiert </Text>
            </View>
        )
    }
}
