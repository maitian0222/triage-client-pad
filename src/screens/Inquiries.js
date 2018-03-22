import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity
    } from 'react-native';

import Header from './common/Header';
import Footer from './common/Footer';
import SubHeader from './common/SubHeader';
import ButtonPrimary from './common/ButtonPrimary';

import CommonStyles from '../styles/commonStyles'
export default class Inquiries extends Component{
    constructor(props){
        super(props);
        this.state = {
            bodyName:'关节疼痛',
            disease:[
            ]
        }

        this.doSubmit = this.doSubmit.bind(this);
    }

    componentDidMount(){
        this.doFetch();
    }

    doSubmit(){
        const {navigate} = this.props.navigation;
        navigate('Analysis');//跳转到病症分析页面
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
                <SubHeader/>
                <View style={styles.diseaseContainer}>
                    <View style={styles.pageTitle}>
                        <Text style={[styles.colorHigh,CommonStyles.fontSize21]}>请选择{this.state.bodyName}的详细信息</Text>
                    </View>
                    {/*问题*/}
                    <ScrollView style={{flex:1}}>
                        {this.state.disease.map((item,index)=>{
                            return (
                                <View>
                                {/*问题名称*/}
                                    <View style={styles.questContainer}>
                                        <Image source={require('../images/icon-question.png')}/>
                                        <Text style={[styles.questIndex]}>{index+1}/{this.state.disease.length}</Text>
                                        <Text style={[styles.questName]}>{item.questName}</Text>
                                    </View>
                                {/*问题答案*/}
                                    <View style={styles.choiceContainer}>
                                    {
                                        item.choices.map((choice)=>{
                                            return (
                                                <TouchableOpacity style={[styles.choice,item.multi == '0' ? {borderColor:'#279C72'} : {}]} activeOpacity={0.3} onPress={()=>this.changeChoiceChecked(item.id,choice)} key={choice.id}>
                                                    <View style={[styles.rowCenter]}>
                                                        <Text style={[styles.colorText,item.multi == '0'?styles.colorHigh:'']}>{choice.name}</Text>
                                                        {item.multi == '0'?<Image style={styles.iconBorderOn} source={require('../images/border-on.png')}/>:null}
                                                    </View>
                                                </TouchableOpacity>
                                            );
                                        })
                                        }
                                       <TextInput style={[styles.choice,styles.choiceInput]} textAlignVertical="center" placeholder="请输入其他" placeholderTextColor="#999" underlineColorAndroid="transparent"/>
                                    </View>
                                </View>
                            );
                        })}
                    </ScrollView>
                    <View style={styles.btnContainer}>
                        <ButtonPrimary title="选择完成" onClick={this.doSubmit}/>
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
    diseaseContainer:{
      flex:1,
      paddingLeft:63,
      paddingRight:63,
      marginBottom:36
    },
    pageTitle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:36,
        marginBottom:24

    },
    questContainer:{
        flexDirection:'row',
        alignItems:'center',

        marginTop:14,
        marginBottom:20
    },
    questIndex:{
        marginLeft:9,
        fontSize:17,
        color:'#333'
    },
    questName:{
        marginLeft:18,
        fontSize:17,
        color:'#333'
    },
    choiceContainer: {
        flexDirection:'row',
        flexWrap:'wrap'
    },
    choice:{
        position:'relative',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginRight:27,
        marginBottom:20,
        paddingLeft:25,
        paddingRight:25,
        paddingTop:15,
        paddingBottom:15,
        fontSize:17,
        borderWidth:1,
        borderColor:'#898989',
        borderRadius:10
    },
    choiceInput:{
        height:58,
        width:200,
        backgroundColor:'#fff',
        fontSize:17
    },
    iconBorderOn:{
        position:'absolute',
        right:-25,
        bottom:-15
    },
    colorText:{
        fontSize:17,
        color:'#333'
    },
    colorHigh:{
        color:'#279B70'
    },
    rowCenter:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    btnContainer:{
        alignItems:'flex-end',
        marginTop:36
    }
});