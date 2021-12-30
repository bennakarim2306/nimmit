import React, { Component } from 'react'
import {FlatList, Text} from 'react-native'
import { Block } from '../Components'
import {connect} from "react-redux";
import DriveCard from "../Components/DriveCard";

class ResultScreen extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const { queryResults } = props;
        return (
            <Block center middle>
                <FlatList
                    data={queryResults}
                    renderItem={(driveItem) => <DriveCard drive={driveItem} />}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => // TODO implement load function
                        console.log(`can not load data now`)} />
            </Block>
        )
    }
}



const mapStateToProps = (state) =>  {
    return {
        queryResults: state.queryResults
    }
}

export default connect(mapStateToProps)(ResultScreen)