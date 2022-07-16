import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {config} from '../Config';

export default function GooglePlaceInput(props) {
    return (
        <GooglePlacesAutocomplete
            placeholder="Suche"
            fetchDetails={false}
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data);
                console.log(details);
            }}
            query={{
                key: config.keys.MAPS_API_KEY,
                language: 'de'
            }}
            debounce={500}
            minLength={2}
            styles={{
                textInputContainer: {position: 'absolute'},
                listView: {zIndex: 9999, position: 'absolute', marginTop: '10%'}
            }}
            enablePoweredByContainer={false}
        />
    );
}
