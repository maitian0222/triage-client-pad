import React, { PureComponent } from 'react';
import {
    ScrollView,
    View,
    Text,
    Button,
    Image,
    StyleSheet
    } from 'react-native';

export default class NearBy extends PureComponent{
    static navigationOptions = {
        header: null
    };
    render(){
        return(
            <ScrollView>
                <View style={styles.hospitalHeader}>
                    <Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                </View>
                <View style={styles.hospitalCard}>
                    <View style={styles.hospitalCardContent}>
                        <Image source={require('../images/hospital.png')}/>
                        <View style={styles.hospitalCardContentInfo}>
                            <Text>大同市第五人民医院</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{width:100}}>三级甲等</Text>
                                <Text>5.28km</Text>
                            </View>

                            <Text>新建北路141号</Text>
                        </View>
                    </View>
                    <View style={styles.hospitalCardFooter}>
                        <View style={styles.hospitalCardFooterItem}>
                            <Text>电话</Text>
                        </View>
                        <View style={styles.hospitalCardFooterItem}>
                            <Text>路线</Text>
                        </View>
                        <View style={[styles.hospitalCardFooterItem,{borderRightWidth:0}]}>
                            <Text>看评价</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.hospitalCard}>
                    <View style={styles.hospitalCardContent}>
                        <Image source={require('../images/hospital.png')}/>
                        <View style={styles.hospitalCardContentInfo}>
                            <Text>大同市第五人民医院</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{width:100}}>三级甲等</Text>
                                <Text>5.28km</Text>
                            </View>

                            <Text>新建北路141号</Text>
                        </View>
                    </View>
                    <View style={styles.hospitalCardFooter}>
                        <View style={styles.hospitalCardFooterItem}>
                            <Text>电话</Text>
                        </View>
                        <View style={styles.hospitalCardFooterItem}>
                            <Text>路线</Text>
                        </View>
                        <View style={[styles.hospitalCardFooterItem,{borderRightWidth:0}]}>
                            <Text>看评价</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
}


const styles  = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#EBEAEA'
    },
    hospitalHeader:{
        alignItems:'center',
        backgroundColor:'#FFF'
    },
    hospitalCard:{
        marginLeft:5,
        marginRight:5,
        marginTop:20,
        backgroundColor:'#FFF'
    },
    hospitalCardContent:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:5
    },
    hospitalCardContentInfo:{
        flex:1,
        marginLeft:10
    },
    hospitalCardFooter:{
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#DDD',
        borderTopWidth:1
    },
    hospitalCardFooterItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
        marginBottom:5,
        borderRightWidth:1,
        borderColor:'#DDD'
    }
});
