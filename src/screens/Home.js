import React, { PureComponent,Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StyleSheet
    } from 'react-native';

export default  class Home extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = {
            habits: []
        }

    }

    doFetch(){
        let params = {"name":"admin","password":"admin123"};
        fetch('http://192.168.81.18:3000/data/habits.json',{
            method: 'get',
            params:params,
            //body:JSON.stringify(params)
        })
            .then(function(data){
                console.log(data);
                return data.json();
            })
            .then((data) => {
                this.setState({
                    habits : data
                })
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    componentDidMount(){
        this.doFetch();
    }


    render(){
        return(
            <ScrollView  style={styles.container}>
                {/*健康好习惯*/}
                <View style={styles.habitContainer}>
                    <Image source={require('../images/icon-jkhxg.png')} />
                {this.state.habits.map((item,index)=>{
                    return (
                    <View style={styles.habitCard} key={index}>
                        <View style={styles.habitCardLeft}>
                            <Text style={{fontSize:20,color:'#FFF',fontWeight:'bold'}}>{index+1}</Text>
                        </View>
                        <View style={styles.habitCardCenter}>
                            <Text style={{fontSize:16,fontWeight:'bold'}}>{item.title}</Text>
                            <Text>{item.content}</Text>
                        </View>
                        <View style={styles.habitCardRight}>
                            <Button title="跟我做" color="#FF8B21"></Button>
                        </View>
                    </View>)
                })}
                    <View style={{position:'relative',alignItems:'center',marginTop:20}}>
                        <Image source={require('../images/bg-count.png')} />
                        <Text style={{position:'absolute',top:8,color:'#FFF'}}>1792人参与</Text>
                    </View>
                </View>

                 {/*健康小窍门*/}
                <View style={styles.tipContainer}>
                    <Image
                        source={require('../images/icon-jkxqm.png')} />

                   {/*饮食*/}
                    <Image source={require('../images/icon-ys.png')} style={{alignSelf:'flex-start',marginLeft:-10,marginTop:40,zIndex:999}}/>
                    <View style={[styles.eatCard]}>
                        <View style={styles.eatCardItem}>
                            <Image source={require('../images/icon-yi.png')}/>
                            <Text style={styles.eatCardItemRight}>富含蛋白质、维生素和矿物质的食物，如鸭肉、芝麻等</Text>
                            </View>
                        <View style={[styles.eatCardItem,{borderBottomWidth:0,paddingBottom:0}]}>
                            <Image source={require('../images/icon-ji.png')}/>
                            <Text style={styles.eatCardItemRight}>油腻、刺激、难消化的食物，如鹿肉、杏仁、虾皮等</Text>
                         </View>
                    </View>

                    {/*护理*/}
                    <Image source={require('../images/icon-hl.png')} style={{alignSelf:'flex-start',marginLeft:-10,marginTop:40,zIndex:999}}/>
                    <View style={[styles.eatCard]}>
                        <View style={styles.hlCardItem}>
                            <View style={{width:15,height:15,borderRadius:2,backgroundColor:'#1DC549',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'#FFF'}}>1</Text>
                            </View>
                            <Text style={styles.eatCardItemRight}>定时休息，放松劲椎，特别是从事电脑工作的应避免长时间对着电脑</Text>
                        </View>
                        <View style={styles.hlCardItem}>
                            <View style={{width:15,height:15,borderRadius:2,backgroundColor:'#1DC549',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'#FFF'}}>1</Text>
                            </View>
                            <Text style={styles.eatCardItemRight}>定时休息，放松劲椎，特别是从事电脑工作的应避免长时间对着电脑</Text>
                        </View>
                    </View>

                    {/*运动*/}
                    <Image source={require('../images/icon-hl.png')} style={{alignSelf:'flex-start',marginLeft:-10,marginTop:40,zIndex:999}}/>
                    <View style={[styles.eatCard]}>
                        <View style={[styles.hlCardItem]}>
                            <Image source={require('../images/icon-star.png')}/>
                            <Text style={styles.eatCardItemRight}>参加户外活动</Text>
                        </View>
                        <View style={[styles.hlCardItem]}>
                            <Image source={require('../images/icon-star.png')}/>
                            <Text style={styles.eatCardItemRight}>运动量力而行</Text>
                        </View>
                    </View>

                    <View style={styles.btnContainer}>
                        <Button title="开始7天劲椎护理方案" color="#1DC549"></Button>
                    </View>
                </View>
            </ScrollView >
        );
    }
}

const styles  = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#EBEAEA'
    },
    habitContainer:{
        flex:1,
        paddingLeft:25,
        paddingRight:25,
        paddingBottom:25,
        marginBottom:20,
        backgroundColor:'#FFF',
        alignItems:'center'
    },
    habitCard:{
        flexDirection:'row',
        marginTop:20,
        borderRadius:5,
        overflow:'hidden',
        borderWidth:1,
        borderColor:'#DDD'
    },
    habitCardLeft:{
        width:45,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#3AC07D'
    },
    habitCardCenter:{
        flex:1,
        justifyContent:'center',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10
    },
    habitCardRight:{
        width:78,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    tipContainer:{
        flex:1,
        paddingLeft:10,
        paddingRight:10,
        marginBottom:20,
        backgroundColor:'#FFF',
        alignItems:'center'
    },
    eatCard:{
        alignSelf:'stretch',
        marginTop:-40,
        paddingTop:40,
        paddingBottom:15,
        borderRadius:4,
        borderWidth:1,
        borderColor:'#DDD'
    },
    eatCardItem:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginLeft:10,
        marginRight:10,
        marginTop:15,
        paddingBottom:15,
        borderBottomWidth:1,
        borderColor:'#DDD'
    },
    eatCardItemRight:{
        flex:1,
        marginLeft:10
    },
    hlCardItem:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginLeft:10,
        marginRight:10,
        marginTop:10
    },
    btnContainer:{
        width:'100%',
        marginTop:10,
        marginBottom:10
    }
});
