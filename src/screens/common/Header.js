import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
    } from 'react-native';

const  formatDate =  () => {
    var date = new Date();
    return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日";
}

const getWeekDay = ()=> {
    return "星期"+"日一二三四五六".charAt(new Date().getDay());
}



export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentTime : ""
        }
    }

    getTime = ()=> {
            let date = new Date();
            let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
           setTimeout(()=>{
                this.setState({
                    currentTime : hour+":"+minute/*+":"+date.getSeconds()*/
                });
                this.getTime();
            },500);
    }
    componentDidMount(){
        this.getTime();
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.logo}>
                +
                </Text>
                <Text style={styles.name}>
                **医院智能分诊系统
                </Text>
                <View style={styles.headerRight}>
                    <Text style={[styles.dateTextSmall]}>{formatDate()}</Text>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style={[styles.dateTextSmall]}>{getWeekDay()}</Text>
                        <Text style={[styles.dateTextLarge]}>{this.state.currentTime}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles  = StyleSheet.create({
    container:{
        flexDirection:'row',
        position:'absolute',
        top:0,
        height:90,
        width:'100%',
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center',
        backgroundColor:'#26AA83'
    },
    logo:{
        fontSize:50,
        marginRight:10,
        color:'#fff'
    },
    name:{
        flex:1,
        fontSize:30,
        color:'#fff'
    },
    headerRight : {
        justifyContent:'center',
        alignItems:'flex-start'
    },
    dateTextSmall:{
        fontSize:20,
        color:'#fff'
    },
    dateTextLarge:{
        marginLeft:10,
        fontSize:26,
        color:'#fff'
    }
});