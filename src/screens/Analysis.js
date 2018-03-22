import React, { PureComponent } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity
    } from 'react-native';

import Header from './common/Header';
import Footer from './common/Footer';
import SubHeader from './common/SubHeader';
import ButtonPrimary from './common/ButtonPrimary';

export default class Analysis extends PureComponent{
    constructor(props){
        super(props);
        this.doPrint = this.doPrint.bind(this);
    }
    static navigationOptions = {
        header: null
    };

    doPrint(){
        alert('打印结果');
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Header/>
                <SubHeader/>
                <View style={styles.mainContainer}>
                    <View style={styles.tellDiseaseContainer}>
                        <View style={styles.tellContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>主诉</Text>
                            </View>
                            <ScrollView style={styles.card}>
                                <View style={[styles.marginB25,styles.flexStretch]}>
                                    <Text style={[styles.text,styles.marginB25,styles.textLineHeight]}>
                                    出现脱发已有120多天，
                                    出现脱发已有120多天
                                    出现脱发已有120多天
                                    出现脱发已有120多天
                                    出现脱发已有120多天
                                    出现脱发已有120多天
                                    出现脱发已有120多天
                                    出现脱发已有120多天
                                    出现脱发已有120多天
                                    出现脱发已有120多天
                                    出现脱发已有120多天几乎每天脱发，洗头脱发严重，偶尔成片脱落</Text>
                                </View>
                            </ScrollView>
                        </View>
                        <View  style={styles.diseaseContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>可能患的疾病</Text>
                            </View>
                            <ScrollView style={styles.card}>
                                <View style={[styles.marginB25,styles.flexStretch]}>
                                    <Text style={[styles.text,styles.textLineHeight]}>姓名:*文平</Text>
                                    <Text style={[styles.text,styles.textLineHeight]}>姓名:*文平</Text>
                                    <Text style={[styles.text,styles.textLineHeight]}>姓名:*文平</Text>
                                    <Text style={[styles.text,styles.textLineHeight]}>姓名:*文平</Text>
                                    <Text style={[styles.text,styles.textLineHeight]}>姓名:*文平</Text>
                                    <Text style={[styles.text,styles.textLineHeight]}>姓名:*文平</Text>
                                    <Text style={[styles.text,styles.textLineHeight]}>姓名:*文平</Text>
                                    <Text style={[styles.text,styles.textLineHeight,styles.marginB25]}>姓名:*文平</Text>
                                </View>
                            </ScrollView>
                        </View>

                    </View>

                    <View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>推荐科室</Text>
                        </View>
                        <View style={styles.departmentContainer}>
                            <View style={styles.leftContainer}>
                                <View style={styles.department}>
                                    <Image source={require('../images/icon1.png')}/>
                                    <Text style={{color:'#333',fontSize:18,marginTop:8}}>皮肤科</Text>
                                </View>

                                <View style={styles.department}>
                                    <Image source={require('../images/icon2.png')}/>
                                    <Text style={{color:'#333',fontSize:18,marginTop:8}}>脑科</Text>
                                </View>

                                <View style={styles.department}>
                                    <Image source={require('../images/icon3.png')}/>
                                    <Text style={{color:'#333',fontSize:18,marginTop:8}}>神经外科</Text>
                                </View>
                            </View>
                            <View style={styles.rightContainer}>
                                <ButtonPrimary title="打印" onClick={this.doPrint}/>
                            </View>
                        </View>
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
    flexStretch:{
      flex:1
    },
    mainContainer:{
        flex:1,
        marginTop:36,
        marginBottom:36,
        marginLeft:63,
        marginRight:63

    },
    basicInfoContainer:{

    },
    titleContainer:{
        alignItems:'flex-start',
        borderLeftWidth:5,
        borderColor:'#279b70',
        paddingLeft:18
    },
    title:{
        fontSize:21,
        color:'#279b70'
    },
    userInfoContainer:{
        flexDirection:'row',
        alignItems:'center',
        height:70,
        width:'100%',
        marginTop:18,
        marginBottom:33,
        paddingLeft:24,
        paddingRight:63,
        backgroundColor:'#FDFDEE',
        borderWidth:1,
        borderColor:'#707070',
        borderRadius:5
    },
    text:{
        color:'#333',
        fontSize:18
    },
    tellDiseaseContainer:{
        flexDirection:'row',
        flex:1
    },
    tellContainer:{
        flex:1,
        marginRight:19
    },
    diseaseContainer:{
        flex:1,
        marginLeft:19
    },
    textLineHeight:{
        lineHeight:35
    },
    marginB25:{
      marginBottom:25
    },
    card:{
        flex:1,
        marginTop:18,
        marginBottom:33,
        paddingTop:20,
        paddingLeft:23,
        paddingRight:23,
        backgroundColor:'#FDFDEE',
        borderWidth:1,
        borderColor:'#707070',
        borderRadius:5
    },
    departmentContainer:{
        flexDirection:'row'
    },
    leftContainer:{
        flexDirection:'row',
        flex:1,
        marginTop:27,
        marginLeft:23
    },
    department:{
        marginRight:42,
        justifyContent:'center',
        alignItems:'center'
    },
    rightContainer:{
        width:160,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    }
});