import React, { Component } from "react";
import { StyleSheet, BackHandler, Alert } from "react-native";
import CheckBox from "expo-checkbox";
import { Block, GooglePlaceInput, Text, Switch, Button } from "../Components";
import DateTimePicker from "../Components/DateTimePicker";
import { theme } from "../Config";
import Slider from "@react-native-community/slider";
import {connect} from "react-redux";
import { Drives } from "../Resources/mock/Drives"

class Browse extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerShown: false,
  };

  state = {
    rangeA: 0,
    rangeB: 0,
    rangeTime: 15,
    isRoutine: true,
    isSearching: false
  };

  _handleToggleSwitch = () => {
    const actualValueIsRoutine = this.state.isRoutine;
    this.setState({
      isRoutine: !actualValueIsRoutine
    });
  }


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
    if (slider === 3) {
      this.setState({ rangeTime: roundedValue })
    }
  };

  _dateTimePicker = (props) => {
    // console.log(`date time picker is rendering`)
    const styleInside = props.mode === "date" ? { fontSize: 25 } : { fontSize: 15 };
    return (
      <Block style={styles.date_time_picker_container}>
        <DateTimePicker props={{ ...props, style: styleInside }} />
      </Block>
    )
  }

  _weekDaysBox = () => {
    // console.log(`weekdays box are rendering`)
    return (
      <Block style={styles.checkbox_row_container}>
        <Block style={styles.checkbox_container}>
          <Text>
            Mo
          </Text>
          <CheckBox
            key="monday_box"
            value={false}
            onValueChange={() => { }}
            style={styles.checkbox}
          />
        </Block>
        <Block style={styles.checkbox_container}>
          <Text>
            Di
          </Text>
          <CheckBox
            key="tuesday_box"
            value={false}
            onValueChange={() => { }}
            style={styles.checkbox}
          />
        </Block>
        <Block style={styles.checkbox_container}>
          <Text>
            Mi
          </Text>
          <CheckBox
            key="wednesday_box"
            value={false}
            onValueChange={() => { }}
            style={styles.checkbox}
          />
        </Block>
        <Block style={styles.checkbox_container}>
          <Text>
            Do
          </Text>
          <CheckBox
            key="thursday_box"
            value={false}
            onValueChange={() => { }}
            style={styles.checkbox}
          />
        </Block>
        <Block style={styles.checkbox_container}>
          <Text>
            Fr
          </Text>
          <CheckBox
            key="friday_box"
            value={false}
            onValueChange={() => { }}
            style={styles.checkbox}
          />
        </Block>
        <Block style={styles.checkbox_container}>
          <Text>
            Sa
          </Text>
          <CheckBox
            key="saturday_box"
            value={false}
            onValueChange={() => { }}
            style={styles.checkbox}
          />
        </Block>
        <Block style={styles.checkbox_container}>
          <Text>
            So
          </Text>
          <CheckBox
            key="sunday_box"
            value={false}
            onValueChange={() => { }}
            style={styles.checkbox}
          />
        </Block>
      </Block>
    )
  }

  _handleQuery = () => {
    const action = {
      type: 'QUERY_DRIVES',
      value: Drives
    }
    this.props.dispatch(action)
    this.props.navigation.navigate("ResultScreen");
  }

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
            <Block style={{ flex: 2}}>
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
          <Block style={styles.routine_onetime_container}>
            <Block style={{ flexDirection: "row", flex: 1 }}>
              <Block style={styles.date_text_container}>
                <Text h4 bold>
                  {"  "} Mitfahrtmodus
                </Text>
              </Block>
              <Block style={styles.switch_container}>
                <Block flex={1}>
                  <Text>
                    einmalig {"  "}
                  </Text>
                </Block>
                <Block flex={1}>
                  <Switch
                    toggleFunction={this._handleToggleSwitch}
                    isEnabled={this.state.isRoutine}
                  />
                </Block>
                <Block flex={1}>
                  <Text>
                    {"  "} routine
                  </Text>
                </Block>
              </Block>
            </Block>
            <Block style={styles.date_time_picker_container}>
              {this.state.isRoutine ? this._weekDaysBox() : this._dateTimePicker({ mode: "date" })}
            </Block>
          </Block>
          <Block style={styles.date_time_container}>
            <Block style={styles.time_container}>
              {this._dateTimePicker({ mode: "time" })}
            </Block>
            <Block style={styles.time_slider_container}>
              <Slider
                step={0}
                minimumValue={15}
                maximumValue={60}
                value={this.state.rangeTime}
                onValueChange={(val) =>
                  this._handleSliderValueChanged(val, 3)
                }
                onSlidingComplete={console.log("")}
              />
            </Block>
            <Block style={styles.range_container}>
              <Text>{this.state.rangeTime} min</Text>
            </Block>
          </Block>
          <Block style={styles.query_button_container}>
            <Button gradient onPress={this._handleQuery}>
                {this.state.isSearching ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text bold white center>
                    Suche
                  </Text>
                )}
              </Button>
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
  routine_onetime_container: {
    flexDirection: "column",
    padding: "2%",
    // backgroundColor: 'grey',
    flex: 1,
  },
  date_time_container: {
    flexDirection: "row",
    padding: "2%",
    // backgroundColor: 'grey',
    flex: 1,
    alignItems: "center"
  },
  view_container: {
    zIndex: -1,
    marginTop: "7%",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
  },
  header_text_container: {
    // borderBottomWidth: 1
    paddingTop: "2%",
    flex: 1,
    alignSelf: "center",
  },
  main_content_container: {
    flex: 13,
    zIndex: -1
  },
  slider_container: {
    // backgroundColor: 'grey',
    flex: 7,
    width: "90%",
    zIndex: -1
  },
  range_container: {
    flex: 1,
  },
  date_container: {
    flex: 1,
    fontSize: 100
  },
  time_container: {
    flex: 1,
    alignSelf: "center"
  },
  date_time_picker_container: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: "5%",
    zIndex: -1
  },
  switch_container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    zIndex: -1
  },
  checkbox_row_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "5%",
    zIndex: -1
  },
  checkbox_container: {
    flexDirection: "column",
    alignItems: "center",
    zIndex: -1
  },
  time_slider_container: {
    // backgroundColor: 'grey',
    flex: 4,
    width: "90%",
    zIndex: -1
  },
  query_button_container: {
    flex: 1,
    paddingLeft: '15%',
    paddingRight: '15%'
  }
});

const mapStateToProps = (state) =>  {
  return {
    queryResults: state.queryResults
  }
}

export default connect(mapStateToProps)(Browse)