import React from "react";
import { Image, Dimensions, View, TouchableOpacity, Text } from "react-native";
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


const LoginStackNavigation = createStackNavigator();
const BrowseStackNavigation = createStackNavigator();
const MainTabNavigation = createBottomTabNavigator();
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

const MyTabBar = ({ state, descriptors, navigation }) => {
    return (
      <View style={{ flexDirection: 'row', height: '8%', justifyContent: 'space-around', alignContent:'space-around'}}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            console.log("TabBar pressed")
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              gradient
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            >
              <Text style={isFocused ? { color:'#673ab7', fontWeight: "bold", fontSize: 15} : {color: 'black', fontWeight: 'normal'}}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

const MainNav = () => {
    return (
            <MainTabNavigation.Navigator tabBar={props => <MyTabBar {...props} />}>
                <MainTabNavigation.Screen name="Find a drive" component={BrowseNavigation}/>
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