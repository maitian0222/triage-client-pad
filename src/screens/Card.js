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
            navigate('Inquiries');//

        },2000);
    }

    static navigationOptions = {
        header: null
    };

    render(){
        return(
            <View style={styles.container}>
                <Header/>
                    <View style={styles.mainContainer}>
                        <View style={styles.tipContainer}>
                            <Text style={styles.tip}>请将您的医疗卡放到刷卡器上</Text>
                        </View>
                        <Image source={require('./../images/operate.png')}/>
                    </View>
                <Footer/>
            </View>
        );
    }
}


const styles  = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#f5f5f5'
    },
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    tipContainer:{
        paddingTop:33,
        paddingBottom:33,
        paddingLeft:66,
        paddingRight:66,
        marginBottom:67,
        borderWidth:1,
        borderColor:'#707070'
    },
    tip:{
        color:'#333',
        fontSize:33
    }
});