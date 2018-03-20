import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet
    } from 'react-native';

export default class Footer extends PureComponent{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.footerText}>
                    *温馨提示，分诊前请先到窗口办理医疗卡
                </Text>
            </View>
        );
    }
}
const styles  = StyleSheet.create({
    container:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        height:70,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end',
        backgroundColor:'#238264'
    },
    footerText:{
        fontSize:16,
        color:'#fff'
    }
});