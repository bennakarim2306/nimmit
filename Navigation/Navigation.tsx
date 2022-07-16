import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Forgot from '../Screens/Forgot';
import Browse from '../Screens/Browse';
import Settings from '../Screens/Settings';
import AddDrive from '../Screens/AddDrive';
import Profile from '../Screens/Profile';

import {theme} from '../Config';

const NavigationTabBar = createBottomTabNavigator(
    {
        Browse: {
            screen: Browse,
            navigationOptions: {
                tabBarIcon: () => {
                    return (
                        <Image
                            source={require('../assets/browse.png')}
                            style={styles.icon}
                        ></Image>
                    );
                }
            }
        },
        AddDrive: {
            screen: AddDrive,
            navigationOptions: {
                tabBarIcon: () => {
                    return (
                        <Image
                            source={require('../assets/add.png')}
                            style={styles.icon}
                        ></Image>
                    );
                }
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: () => {
                    return (
                        <Image
                            source={require('../assets/user.png')}
                            style={styles.icon}
                        ></Image>
                    );
                }
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF'
        }
    }
);

const screens = createStackNavigator(
    {
        Welcome,
        Login,
        SignUp,
        Forgot,
        Settings,
        NavigationTabBar: {
            screen: NavigationTabBar,
            navigationOptions: {
                headerShown: false
            }
        }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                height: theme.sizes.base * 4,
                backgroundColor: theme.colors.white, // or 'white
                borderBottomColor: 'transparent',
                elevation: 0 // for android
            },
            headerBackImage: () => (
                <Image source={require('../assets/back.png')} />
            ),
            headerBackTitle: null,
            headerLeftContainerStyle: {
                alignItems: 'center',
                marginLeft: theme.sizes.base * 2,
                paddingRight: theme.sizes.base
            },
            headerRightContainerStyle: {
                alignItems: 'center',
                paddingRight: theme.sizes.base
            }
        }
    }
);

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
});

export default createAppContainer(screens);
