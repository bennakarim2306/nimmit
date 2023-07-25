import React from "react";
import { Switch, Platform } from "react-native";

import { theme } from "../Config";

const GRAY_COLOR = "rgba(168, 182, 200, 0.30)";

export default class SwitchInput extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false
    };
  }


  render() {
    const { value, ...props } = this.props;
    let thumbColor = null;

    if (Platform.OS === "android") {
      thumbColor = GRAY_COLOR;
      if (props.value) thumbColor = theme.colors.secondary;
    }

    return (
      <Switch
        thumbColor={this.props.isEnabled ? theme.colors.primary : theme.colors.secondary}
        ios_backgroundColor="#3e3e3e"
        value={this.props.isEnabled}
        onValueChange = {this.props.toggleFunction}
        {...props}
      />
    );
  }
}
