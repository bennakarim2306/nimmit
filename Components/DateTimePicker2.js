import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateTimePicker2 = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datetime, setDatetime] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (datetime) => {
    // console.warn("A date has been picked: ", date);
    setDatetime(datetime);
    hideDatePicker();
  };

  const formatDate = (datetime) => {
    return `${datetime.getDate()}/${
      datetime.getMonth() + 1
    }/${datetime.getFullYear()} ${datetime.getHours()}:${datetime.getMinutes()}`;
  };

  return (
    <View>
      <Button title="Choose date and time" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        minimumDate={Date.parse(new Date())}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Text>{formatDate(datetime)}</Text>
    </View>
  );
};

export default DateTimePicker2;
