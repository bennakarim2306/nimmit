import { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Text from "./Text";
import Block from "./Block";

export default class DriveCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(`trying to render DriveCard with :; ${JSON.stringify(this.props.drive)}`);
        const {userName, numberOfDrives, note, from_address, from_distance, destination_address, destination_distance, date, departure_time_min, departure_time_max, price, id} = this.props.drive.item;
        return (
                <TouchableOpacity style={styles.main_container}
                                  onPress={() => console.log(`implement load film`)}
                                  key={id}>
                    <Block style={styles.drive_data_container}>
                        <Block style={styles.locations_related_container}>
                            <Block style={styles.location_from_container}>
                                <Text primary bold>
                                    From
                                </Text>
                                <Text>
                                    {from_address}
                                </Text>
                                <Text>
                                    {from_distance}
                                </Text>
                            </Block>
                            <Block style={styles.location_destination_container}>
                            <Text primary bold>
                                    To
                                </Text>
                                <Text secondary>
                                    {destination_address}
                                </Text>
                                <Text secondary>
                                    {destination_distance}
                                </Text>
                            </Block>
                        </Block>
                        <Block style={styles.time_and_price_related_container}>
                            <Block style={styles.time_related_container}>
                                <Block style={styles.date_container}>
                                    <Text primary bold>
                                        Date
                                    </Text>
                                    <Text>
                                        {date}
                                    </Text>
                                </Block>
                                <Block style={styles.time_container}>
                                    <Text primary bold>
                                        Time margin
                                    </Text>
                                    <Text>
                                        {departure_time_min}
                                    </Text>
                                    <Text primary bold>
                                        {"-->"}
                                    </Text>
                                    <Text>
                                        {departure_time_max}
                                    </Text>
                                </Block>
                            </Block>
                            <Block style={styles.price_container}>
                                <Text>
                                    {price}
                                </Text>
                            </Block>
                        </Block>
                    </Block>
                </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 160,
        flexDirection: 'row',
        borderWidth: '1px'
    },
    profile_container: {
        flex: 1,
    },
    profile_data_container: {
    },
    profile_userName_container: {
        flex:1,
        flexWrap: 'wrap',
    },
    profile_drive_count_and_note_container: {
        flex:1
    },

    drive_data_container:{
    },
    locations_related_container:{
        flexDirection:'row',
        flex:1
    },
    location_from_container:{
        flex:1,
        flexDirection:'column'
    },
    location_destination_container:{
        flex:1,
        flexDirection:'column'
    },
    time_and_price_related_container:{
        flexDirection:'row',
        flex:1
    },
    time_related_container:{
        flex:1,
        flexDirection:'column'
    },
    date_container: {
        flex:1
    },
    time_container: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between'
      
    },
    price_container: {
        flex: 1
    }
})
