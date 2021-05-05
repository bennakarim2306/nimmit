import React, { useState } from "react";
import { Button, Text, TextInput, Pressable, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Block from "./Block";
import Input from "./Input";

const DateTimePicker = (mode) => {
  console.log(JSON.stringify(mode.mode));
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
      {mode.mode == "date" ? (
        <Block>
          <Pressable onPress={showDatePicker}>
            <View pointerEvents="none">
              <Input value={formatDate(date)} />
            </View>
          </Pressable>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            minimumDate={Date.now()}
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
        </Block>
      ) : (
        <Block>
          <Pressable onPress={showTimePicker}>
            <View pointerEvents="none">
              <Input value={formatTime(time)} />
            </View>
          </Pressable>
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            // minimumDate={Date.parse(new Date())}
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
          />
        </Block>
      )}
    </Block>
  );
};

export default DateTimePicker;
