import React, { PureComponent } from 'react';
import { View,
    Text,
    StyleSheet,
    Button,
    DrawerLayoutAndroid
    } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Index from './screens/Index';
import Card from './screens/Card';
import Human from './screens/Human';
import Inquiries from './screens/Inquiries';
import Analysis from './screens/Analysis';

import Home from './screens/Home';
import NearBy from './screens/NearBy';
import Message from './screens/Message';
import Profile from './screens/Profile';


const Tab = TabNavigator(
    {
        Message:{
            screen: Message,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Message'
            })
        },
        Home:{
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Home'
            })
        },
        NearBy:{
            screen: NearBy,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Nearby'
            })
        },
        Profile:{
            screen: Profile,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Profile'
            })
        }
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true
    }
);


const Navigator = StackNavigator(
    {
        Index:{
            screen:Index
        },
        Card:{
            screen:Card
        },
        Human:{
            screen:Human
        },
        Inquiries:{
            screen:Inquiries
        },
        Analysis:{
            screen:Analysis
        },
        Tab: { screen: Tab }
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333'
        }
    }
);



const styles = StyleSheet.create({
    container: {
        marginTop: 22
    },
    icon: {
        width: 24,
        height: 24
    }
});

export default Navigator;