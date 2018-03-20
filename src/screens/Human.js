import React, { PureComponent } from 'react';
import {
    Dimensions,
    View,
    WebView,
    Text,
    Button,
    StyleSheet
    } from 'react-native';

const {
    height: deviceHeight,
    width: deviceWidth
    } = Dimensions.get('window');

export default class Human extends PureComponent{
    static navigationOptions = {
        header: null
    };

    render(){
        return(
            <View style={styles.container}>
                    <WebView bounces={false}
                        scalesPageToFit={true}
                        source={{uri:'http://192.168.81.18:8083/human-body-model/indexhalf.html'}}
                        style={{margin:0}}
                        onMessage={(e) => {
                            this.handleMessage(e)
                        }}>
                    </WebView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})