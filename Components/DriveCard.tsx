import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import Text from './Text';
import Block from './Block';

export default function DriveCard(props) {
    const {
        userName,
        numberOfDrives,
        note,
        from_address,
        from_distance,
        destination_address,
        destination_distance,
        date,
        departure_time_min,
        departure_time_max,
        price,
        id
    } = props.drive.item;
    return (
        <TouchableOpacity
            style={styles.main_container}
            onPress={() => console.log(`implement load film`)}
            key={id}
        >
            <Block style={styles.profile_container}>
                <Image style={styles.image} source={{uri: 'image'}} />
                <Block style={styles.profile_data_container}>
                    <Block style={styles.profile_userName_container}>
                        <Text bold>{userName}</Text>
                    </Block>
                    <Block
                        style={styles.profile_drive_count_and_note_container}
                    >
                        <Text secondary>{numberOfDrives}</Text>
                        <Text secondary>{note}</Text>
                    </Block>
                </Block>
            </Block>
            <Block style={styles.drive_data_container}>
                <Block style={styles.locations_related_container}>
                    <Block style={styles.location_from_container}>
                        <Text>{from_address}</Text>
                        <Text>{from_distance}</Text>
                    </Block>
                    <Block style={styles.location_destination_container}>
                        <Text>{destination_address}</Text>
                        <Text>{destination_distance}</Text>
                    </Block>
                </Block>
                <Block style={styles.time_and_price_related_container}>
                    <Block style={styles.time_related_container}>
                        <Block style={styles.date_container}>
                            <Text>{date}</Text>
                        </Block>
                        <Block style={styles.time_container}>
                            <Text>{departure_time_min}</Text>
                            <Text>{departure_time_max}</Text>
                        </Block>
                    </Block>
                    <Block style={styles.price_container}>
                        <Text>{price}</Text>
                    </Block>
                </Block>
            </Block>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    main_container: {
        height: 160,
        flexDirection: 'row',
        display: 'flex'
    },
    profile_container: {
        flex: 1,
        backgroundColor: 'grey'
    },
    image: {
        width: 60,
        height: 90,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    profile_data_container: {
        flexDirection: 'column'
    },
    profile_userName_container: {
        flex: 1,
        flexWrap: 'wrap'
    },
    profile_drive_count_and_note_container: {
        flex: 1
    },

    drive_data_container: {
        flex: 3,
        margin: 5
    },
    locations_related_container: {
        // flexDirection:'row',
        flex: 1
    },
    location_from_container: {
        flex: 1,
        flexDirection: 'column'
    },
    location_destination_container: {
        flex: 1,
        flexDirection: 'column'
    },
    time_and_price_related_container: {
        flexDirection: 'row',
        flex: 1
    },
    time_related_container: {
        flex: 1,
        flexDirection: 'column'
    },
    date_container: {
        flex: 1
    },
    time_container: {
        flexDirection: 'row',
        flex: 1
    },
    price_container: {
        flex: 1
    }
});
