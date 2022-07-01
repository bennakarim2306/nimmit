import React from "react";
import { Image, Dimensions } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux'
import { Block } from '../Components'

import Welcome from "../Screens/Welcome";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Forgot from "../Screens/Forgot";
import Browse from "../Screens/Browse";
import AddDrive from "../Screens/AddDrive";
import Profile from "../Screens/Profile";

import { theme } from "../Config";
import ResultScreen from "../Screens/ResultScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";


const LoginStackNavigation = createStackNavigator();
const BrowseStackNavigation = createStackNavigator();
const MainTabNavigation = createDrawerNavigator();
const {height, width} = Dimensions.get('window');

const LoginNav = () => {
    return (
        <LoginStackNavigation.Navigator>
            <LoginStackNavigation.Screen name="Welcome" component={Welcome} options={LoginNavigatorDefaultOptions} />
            <LoginStackNavigation.Screen name="Login" component={Login} options={LoginNavigatorDefaultOptions} />
            <LoginStackNavigation.Screen name="SignUp" component={SignUp} options={LoginNavigatorDefaultOptions} />
            <LoginStackNavigation.Screen name="Forgot" component={Forgot} options={LoginNavigatorDefaultOptions} />
        </LoginStackNavigation.Navigator>
    )
}

const BrowseNavigation = () => {
    return(
        <BrowseStackNavigation.Navigator>
            <BrowseStackNavigation.Screen name="Browse" component={Browse} options={{headerShown: false}}/>
            <BrowseStackNavigation.Screen name="ResultScreen" component={ResultScreen} options={{headerShown: false}}/>
        </BrowseStackNavigation.Navigator>
    )
}

const MainNav = () => {
    return (
            <MainTabNavigation.Navigator style={{
                backgroundColor: 'white'
            }}
            tabBarOptions={{style:{height:'5%'}}}
            sceneContainerStyle={{position: 'absolute', flex: 0, width: width, height: height}}
            >
                <MainTabNavigation.Screen name="BrowseNavigation" component={BrowseNavigation}/>
                <MainTabNavigation.Screen name="AddDrive" component={AddDrive}/>
                <MainTabNavigation.Screen name="Profile" component={Profile}/>
            </MainTabNavigation.Navigator>
    )
}


const LoginNavigatorDefaultOptions = {
    headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android
    },
    headerBackImage: () => <Image source={require("../assets/back.png")} />,
    headerBackTitle: null,
    headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
    },
    headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
    },
    headerShown: false
}

class Navigator extends React.Component {


    render() {
        console.log('rendering with ' + this.props.isLoggedIn)
        return (
            <NavigationContainer>
                {this.props.isLoggedIn ? MainNav() : LoginNav()}
            </NavigationContainer>)
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        queryResults: state.queryResults
    }
}

export default connect(mapStateToProps)(Navigator)