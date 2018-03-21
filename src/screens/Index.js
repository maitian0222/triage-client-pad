import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity
    } from 'react-native';

import Header from './common/Header';
import Footer from './common/Footer';

export default class Index extends PureComponent{
    static navigationOptions = {
        header: null
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Header/>
                <View style={styles.menuContainer}>
                    <View style={[styles.menu,styles.menuLeft]}>
                        <TouchableOpacity  activeOpacity={0.3} onPress={()=> navigate('Card',{name:'麦田'})}>
                            <Image source={require('./../images/icon-look.png')}/>
                        </TouchableOpacity>
                        <Text style={[styles.menuName,{marginRight:50}]}>我要分诊</Text>
                    </View>
                    <View style={[styles.menu,styles.menuRight]}>
                        <TouchableOpacity  activeOpacity={0.3}>
                            <Image source={require('./../images/icon-triage.png')}/>
                        </TouchableOpacity>
                        <Text style={[styles.menuName,{marginLeft:30}]}>分诊记录查询</Text>
                    </View>
                </View>
                <Footer/>
            </View>
        );
    }
}


const styles  = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5'
    },
    menuContainer:{
        flexDirection:'row',
        width:'100%',
        flex:1,
        alignItems:'center'
    },
    menu:{
        flex:1,
        justifyContent:'center'
    },
    menuLeft:{
        alignItems:'flex-end',
        marginRight:30
    },
    menuRight:{
        alignItems:'flex-start',
        marginLeft:30
    },
    menuName:{
        marginTop:15,
        color:'#333',
        fontSize:28
    }
});