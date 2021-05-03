import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Block from "./Block";

const DateTimePicker = () => {
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
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const formatTime = (time) => {
    return `${time.getHours()}:${time.getMinutes()}`;
  };

  return (
    <Block>
      <Block>
        <Button title="Choose date" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          minimumDate={Date.parse(new Date())}
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
        <TextInput value={formatDate(date)} />
      </Block>
      <Block>
        <Button title="Choose time" onPress={showTimePicker} />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          minimumDate={Date.parse(new Date())}
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
        <TextInput value={formatTime(time)} />
      </Block>
    </Block>
  );
};

export default DateTimePicker;
