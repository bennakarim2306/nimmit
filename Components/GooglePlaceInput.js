import React, { Component } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { config } from '../Config'


export default class GooglePlaceInput extends Component {



    render() {
        return (
                <GooglePlacesAutocomplete
                    placeholder='Suche'
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data);
                        console.log(details);
                    }}
                    query={{
                        key: config.keys.MAPS_API_KEY,
                        language: 'de',
                    }}
                    debounce={
                        500
                    }
                    minLength={
                        6
                    }
                />
        )
    }
}

const styles = StyleSheet.create({
    KeyboardAvoiding_container: {
      flex: 0,
    }
  });
