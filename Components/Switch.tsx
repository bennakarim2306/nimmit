import React, {useState} from 'react';
import {Switch, Platform} from 'react-native';

import {theme} from '../Config';

const GRAY_COLOR = 'rgba(168, 182, 200, 0.30)';

export default function SwitchInput(props) {
    // TODO: why this state??
    const [isEnabled, setIsEnabled] = useState(false);

    const {value, ...otherProps} = props;
    let thumbColor = null;

    if (Platform.OS === 'android') {
        thumbColor = GRAY_COLOR;
        if (props.value) thumbColor = theme.colors.secondary;
    }

    return (
        <Switch
            thumbColor={
                props.isEnabled ? theme.colors.primary : theme.colors.secondary
            }
            // ios_backgroundColor="#3e3e3e"
            value={props.isEnabled}
            ios_backgroundColor={theme.colors.gray}
            onValueChange={props.toggleFunction}
            {...otherProps}
        />
    );
}
