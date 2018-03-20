import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
    } from 'react-native';

import Header from './common/Header';
import Footer from './common/Footer';

export default class Card extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        setTimeout(()=>{
            const {navigate} = this.props.navigation;
            navigate('Inquiries');
        },100);
    }
    static navigationOptions = {
        header: null
    };
    render(){
        return(
            <View style={styles.container}>
                <Header/>
                <View style={styles.tipContainer}>
                    <Text style={styles.tip}>请将您的医疗卡放到刷卡器上</Text>
                </View>
                <Image source={require('./../images/icon-sk.png')}/>
                <Footer/>
            </View>
        );
    }
}


const styles  = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f5f5'
    },
    tipContainer:{
        paddingTop:30,
        paddingBottom:30,
        paddingLeft:50,
        paddingRight:50,
        marginBottom:30,
        borderWidth:3,
        borderColor:'#ddd'
    },
    tip:{
        color:'#333',
        fontSize:30
    },
    menu:{
        flex:1,
        justifyContent:'center'
    },
    menuLeft:{
        alignItems:'flex-end',
        marginRight:25
    },
    menuRight:{
        alignItems:'flex-start',
        marginLeft:25
    },
    menuName:{
        marginTop:15,
        color:'#333',
        fontSize:26
    }
});