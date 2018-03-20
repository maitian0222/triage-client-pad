import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Button,
    } from 'react-native';

export default class Profile extends PureComponent{
    static navigationOptions = {
        header: null
    };
    render(){
        return(
            <View >
                <Text >
                this is Profile page!
                </Text>
            </View>
        );
    }
}

