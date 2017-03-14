import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Button,SocialIcon,SideMenu, List, ListItem,SearchBar,Tabs, Tab, Icon
} from 'react-native-elements'

export default class TabsExample extends Component {

constructor() {
  super();
  this.state = {
    selectedTab: 'profile'
  }

}

changeTab(selectedTab) {
  this.setState({selectedTab})
}




render() {
  const {selectedTab} = this.state;
    return (

  <Tabs>
  <Tab
    titleStyle={{fontWeight: 'bold', fontSize: 10}}
    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
    selected={selectedTab === 'feed'}
    title={selectedTab === 'feed' ? 'FEED' : null}
    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
    renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
    onPress={() => this.changeTab('feed')}

    >
        <View><Text></Text></View>
    </Tab>



  <Tab
    titleStyle={{fontWeight: 'bold', fontSize: 10}}
    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
    selected={selectedTab === 'profile'}
    title={selectedTab === 'profile' ? 'PROFILE' : null}
    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
    renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
    onPress={() => this.changeTab('profile')}

    >
    <View><Text></Text></View>
    </Tab>




</Tabs>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123485',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
  },
});
