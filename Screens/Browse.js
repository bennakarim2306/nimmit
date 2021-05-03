import React, { Component } from "react";
import { StyleSheet, BackHandler, Alert } from "react-native";
import { Block, GooglePlaceInput, Text } from "../Components";
import DateTimePicker from "../Components/DateTimePicker";
import { theme } from "../Config";
import Slider from "@react-native-community/slider";

export default class Browse extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    rangeA: 0,
    rangeB: 0,
  };

  _handleBackButton = () => {
    return Alert.alert(
      "Logout",
      "Wollen Sie die App verlassen?",
      [
        {
          text: "Ja",
          onPress: () => BackHandler.exitApp(),
        },
        {
          text: "Nein",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  _handleSliderValueChanged = (value, slider) => {
    // console.log(`Browse -> _handleSliderValueChanged() -> ${value}`)
    const roundedValue = Math.round(value);
    if (slider === 1) {
      this.setState({ rangeA: roundedValue });
    }
    if (slider === 2) {
      this.setState({ rangeB: roundedValue });
    }
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this._handleBackButton);
  }

  render() {
    return (
      <Block backgroundColor="white" style={styles.view_container}>
        <Block style={styles.header_text_container}>
          <Text h1 center bold primary>
            {" "}
            Find a Drive{" "}
          </Text>
        </Block>
        <Block style={styles.main_content_container}>
          <Block style={styles.my_adress_container}>
            <Block style={{ flex: 1 }}>
              <Text h4 bold>
                {"  "} Meine Adresse
              </Text>
            </Block>
            <Block style={{ flex: 2 }}>
              <GooglePlaceInput></GooglePlaceInput>
            </Block>
            <Block style={{ flex: 1, flexDirection: "row" }}>
              <Block style={styles.slider_container}>
                <Slider
                  step={0}
                  minimumValue={0}
                  maximumValue={20}
                  value={this.state.rangeA}
                  onValueChange={(val) =>
                    this._handleSliderValueChanged(val, 1)
                  }
                  onSlidingComplete={console.log("")}
                />
              </Block>
              <Block style={styles.range_container}>
                <Text>{this.state.rangeA} Km</Text>
              </Block>
            </Block>
          </Block>
          <Block style={styles.target_adress_container}>
            <Block style={{ flex: 1 }}>
              <Text h4 bold>
                {"  "} Ziel Adresse
              </Text>
            </Block>
            <Block style={{ flex: 2 }}>
              <GooglePlaceInput></GooglePlaceInput>
            </Block>
            <Block style={{ flex: 1, flexDirection: "row" }}>
              <Block style={styles.slider_container}>
                <Slider
                  step={0}
                  minimumValue={0}
                  maximumValue={20}
                  value={this.state.rangeB}
                  onValueChange={(val) =>
                    this._handleSliderValueChanged(val, 2)
                  }
                  onSlidingComplete={console.log("")}
                />
              </Block>
              <Block style={styles.range_container}>
                <Text>{this.state.rangeB} Km</Text>
              </Block>
            </Block>
          </Block>
          <Block style={styles.input_container}>
            <DateTimePicker />
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  textInput_style: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  my_adress_container: {
    flexDirection: "column",
    padding: "2%",
    // backgroundColor: 'grey',
    flex: 1,
  },
  target_adress_container: {
    flexDirection: "column",
    padding: "2%",
    // backgroundColor: 'grey',
    flex: 1,
  },
  view_container: {
    marginTop: "7%",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
  },
  header_text_container: {
    // borderBottomWidth: 1
    flex: 1,
    alignSelf: "center",
  },
  main_content_container: {
    flex: 13,
  },
  slider_container: {
    // backgroundColor: 'grey',
    flex: 7,
    width: "90%",
  },
  range_container: {
    flex: 1,
  },
  input_container: {
    flex: 2,
  },
});
