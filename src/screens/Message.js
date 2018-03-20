import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    StyleSheet,
    } from 'react-native';

export default class Message extends Component{
    static navigationOptions = {
        header: null
    };
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
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                {/*标题*/}
                <View style={styles.pageTitle}>
                    <Text >请补充</Text><Text style={[styles.colorHigh]}> {this.state.bodyName}</Text><Text>的信息</Text>
                </View>
               {/*问题*/}
                {this.state.disease.map((item,index)=>{
                    return (
                        <View>
                        {/*问题名称*/}
                        <View style={styles.questContainer}>
                            <Text style={[styles.colorHigh]}>{index+1}/{this.state.disease.length}</Text>
                            <Text style={[styles.questName]}>{item.questName}</Text>
                        </View>
                        {/*问题答案*/}
                        <View style={styles.choiceContainer}>
                            {
                                item.choices.map((choice)=>{
                                    return (
                                        <TouchableOpacity style={[styles.choice,item.multi == '0' ? {backgroundColor:'#CCE8CF'} : {}]} activeOpacity={0.3} onPress={()=>this.changeChoiceChecked(item.id,choice)} key={choice.id}>
                                            <View style={[styles.rowCenter]}>
                                                <Text style={styles.colorHigh}>{choice.name}</Text>
                                                {choice.checked?<Text style={[styles.colorHigh,{marginLeft:10}]}>√</Text>:null}
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })
                                }

                        </View>
                      </View>
                    );
                })}
                </View>
        );
    }
}

var styles = StyleSheet.create({
    pageTitle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    questContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginBottom:15
    },
    questIndex:{

    },
    questName:{

    },
    choiceContainer: {
        flexDirection:'row',
        flexWrap:'wrap',
        paddingLeft:10,
        paddingRight:10
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
        borderColor:'#1AC446',
        borderRadius:12
    },
    colorHigh:{
        color:'#1AC446'
    },
    rowCenter:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
});