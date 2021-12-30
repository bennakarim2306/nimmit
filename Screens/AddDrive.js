import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Block } from '../Components'

export default class AddDrive extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Block center middle>
                <Text h1> Hier werden Fahrten hinzugefügt </Text>
            </Block>
        )
    }
}
