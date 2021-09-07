import React, { useState } from "react";
import { Pressable , StyleSheet} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Block from "./Block";
import Input from "./Input";
import Button from "./Button";

const DateTimePicker = (props) => {
  // console.log(JSON.stringify(props));
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  const handleTimeConfirm = (time) => {
    setTime(time);
    hideTimePicker();
  };

  const formatDate = (date) => {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  };

  const formatTime = (time) => {
    return `${time.getHours()}:${time.getMinutes()}`;
  };

  return (
    <Block>
      {props.props.mode == "date" ? (
        <Block>
          <Button onPress={showDatePicker}>
            <Block pointerEvents="none">
              <Input style={{...styles.text_container, fontSize: 25, alignSelf: "center"}} value={formatDate(date)} />
            </Block>
          </Button>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
        </Block>
      ) : (
        <Block>
          <Button onPress={showTimePicker}>
            <Block pointerEvents="none">
              <Input style={{...styles.text_container, fontSize: 20}} value={formatTime(time)} />
            </Block>
          </Button>
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
          />
        </Block>
      )}
    </Block>
  );
};

const styles = StyleSheet.create({
  text_container: {
    borderWidth: 0
  }
});

export default DateTimePicker;
