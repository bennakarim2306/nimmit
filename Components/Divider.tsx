import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import Block from './Block';
import {theme} from '../Config';

export default function Divider(props) {
    const {color, style, ...otherProps} = props;
    const dividerStyles = [styles.divider, style];

    return (
        <Block
            color={color || theme.colors.gray2}
            style={dividerStyles}
            {...otherProps}
        />
    );
}

const styles = StyleSheet.create({
    divider: {
        height: 0,
        margin: theme.sizes.base * 2,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});
