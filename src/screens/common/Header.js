import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
    } from 'react-native';

const  formatDate =  () => {
    var date = new Date();
    return date.getFullYear()+"年 "+(date.getMonth()+1)+"月 "+date.getDate()+"日";
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
                <Image style={styles.logo} source={require('../../images/logo.png')}/>
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
      /*  position:'absolute',
        top:0,*/
        height:95,
        width:'100%',
        paddingLeft:63,
        paddingRight:63,
        alignItems:'center',
        backgroundColor:'#26AA83'
    },

    headerRight : {
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    dateTextSmall:{
        fontSize:17,
        color:'#fff'
    },
    dateTextLarge:{
        marginLeft:10,
        fontSize:29,
        color:'#fff'
    }
});
