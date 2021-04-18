import RNDateTimePicker from "@react-native-community/datetimepicker";
import React,{ Component, useState } from "react";

export default class DateTimePicker extends Component {

    constructor () {
        [date, setDate] = useState(new Date(1598051730000));
        [mode, setMode] = useState('date');
        [show, setShow] = useState(false);
    }

    onChange = (event, selectedDate) => {
      const currentDate = selectedDate || this.date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    }
  
    showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    }
  
    showDatepicker = () => {
      showMode('date');
    }
  
    showTimepicker = () => {
      showMode('time');
    }

    render() {
        console.log(`rendering`)
        (
            <RNDateTimePicker mode="date" value={new Date()} />
        )
    }
}