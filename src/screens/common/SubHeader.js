import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
    } from 'react-native';
export default class SubHeader extends Component{
    render(){
        return(
            <View style={styles.subHeader}>
                <Text style={[styles.subHeaderText,{marginRight:32}]}>姓名:*文平</Text>
                <Text style={styles.subHeaderText}>卡号:*********1567</Text>
            </View>
        );
    }
}
const styles  = StyleSheet.create({
    subHeader:{
        width:'100%',
        height:50,
        paddingLeft:63,
        paddingRight:63,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#ABDACA'
    },
    subHeaderText:{
        fontSize:21,
        color:'#fff'
    },
});
