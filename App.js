import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
    } from 'react-native';

import {DrawerNavigator} from 'react-navigation';

class Contact extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications标题'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
          <Text onPress={() =>
              navigate('Home2', {name: '从Home到HOme2'})
              }>跳到新页面</Text>

          <Text onPress={() =>
              navigate('DrawerOpen')
              }>打开抽屉</Text>
        </View>
    )
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications标题'
  };

  render() {
    return (
        <Button
            onPress={() => this.props.navigation.goBack()}
            title="Go back home"
        />
    );
  }
}

const Drawer = DrawerNavigator({
  Contact: {
    screen: Contact,
    navigationOptions:{
      drawerLabel:'帅气Home',
      headerTitle:'home title'
    }
  },

  Notifications: {
    screen: MyNotificationsScreen
  },
  Notifications2: {
    screen: MyNotificationsScreen
  }
}, {
  drawerWidth: 200, //抽屉的宽度
  drawerPosition: 'left' ,  //选项是left和right.默认是left
  // contentComponent:(navigation)=><Text>asa</Text>,
  contentOptions: {
    activeTintColor: '#e91e63',
    itemsContainerStyle: {
      marginVertical: 0
    },
    iconContainerStyle: {
      opacity: 1
    }
  }

});

const styles = StyleSheet.create({
  container: {
    marginTop: 22
  },
  icon: {
    width: 24,
    height: 24
  }
});

export default Drawer;
