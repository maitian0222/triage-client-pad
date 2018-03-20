import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity
    } from 'react-native';

import Header from './common/Header';
import Footer from './common/Footer';

export default class Inquiries extends Component{
    constructor(props){
        super(props);
        this.state = {
            bodyName:'关节疼痛',
            disease:[
            ]
        }
    }

    componentDidMount(){
        this.doFetch();
    }


    doFetch(){
        fetch('http://192.168.81.18:3000/data/disease.json',{
            method: 'get'
        }).then(function(data){
            return data.json();
        }).then((data) => {
            this.setState({
                disease : data
            })
        })
            .catch((error) => {
                console.log(error)
            });
    }

    changeChoiceChecked(quesId,choice){
        /* this.state.disease.map((item)=>{
         if()
         })*/
    }
    static navigationOptions = {
        header: null
    };
    render(){
        return(
            <View style={styles.container}>
                <Header/>
                <View style={styles.subHeader}>
                    <Text style={[styles.subHeaderText,{marginRight:20}]}>姓名:*文平</Text>
                    <Text style={styles.subHeaderText}>卡号:*********1567</Text>
                </View>
                <View style={styles.diseaseContainer}>
                <View style={styles.pageTitle}>
                    <Text style={[styles.colorHigh]}>请选择{this.state.bodyName}的详细信息</Text>
                </View>
               {/*问题*/}
                {this.state.disease.map((item,index)=>{
                    return (
                        <View>
                        {/*问题名称*/}
                            <View style={styles.questContainer}>
                                <Text style={[styles.colorText]}>{index+1}/{this.state.disease.length}</Text>
                                <Text style={[styles.questName]}>{item.questName}</Text>
                            </View>
                        {/*问题答案*/}
                            <View style={styles.choiceContainer}>
                            {
                                item.choices.map((choice)=>{
                                    return (
                                        <TouchableOpacity style={[styles.choice,item.multi == '0' ? {borderColor:'#289D71'} : {}]} activeOpacity={0.3} onPress={()=>this.changeChoiceChecked(item.id,choice)} key={choice.id}>
                                            <View style={[styles.rowCenter]}>
                                                <Text style={styles.colorText}>{choice.name}</Text>
                                                {choice.checked?<Text style={[styles.colorHigh,{marginLeft:10}]}>√</Text>:null}
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })
                                }
                               <TextInput style={[styles.choice,{height:40,width:100}]} placeholder="请输入其他" underlineColorAndroid="transparent"/>
                            </View>
                        </View>
                    );
                })}
                </View>
                <View style={styles.btnContainer}>
                    <Button color="#279C72" title="选择完成"></Button>
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
    subHeader:{
        position:'absolute',
        width:'100%',
        height:50,
        top:90,
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#ABDACA'
    },
    subHeaderText:{
        color:'#fff'
    },
    diseaseContainer:{
      marginTop:160,
      paddingLeft:20,
      paddingRight:20,
    },
    pageTitle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    questContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15,
        marginTop:20
    },
    questIndex:{

    },
    questName:{
        marginLeft:10,
        color:'#333'
    },
    choiceContainer: {
        flexDirection:'row',
        flexWrap:'wrap',
    },
    choice:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:25,
        marginRight:10,
        marginBottom:10,
        padding:8,
        fontSize:14,
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:6
    },
    colorText:{
        color:'#333'
    },
    colorHigh:{
        color:'#289D71'
    },
    rowCenter:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    btnContainer:{
        width:100,
        backgroundColor:'#279C72',
        alignSelf:'flex-end',
        marginTop:50,
        marginRight:30
    }
});