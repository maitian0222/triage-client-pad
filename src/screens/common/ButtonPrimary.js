import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
    } from 'react-native';

export default class ButtonPrimary extends PureComponent{
    render(){
        return(
            <TouchableOpacity onPress={()=>this.props.onClick()}>
                <View style={styles.btnSure}>
                    <Text style={styles.btnText}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles  = StyleSheet.create({
    btnSure:{
        justifyContent:'center',
        alignItems:'center',
        width:145,
        height:54,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#0D583D',
        backgroundColor:'#269D72'
    },
    btnText:{
        color:'#fff',
        fontSize:21
    }
});