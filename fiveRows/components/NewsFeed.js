import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native'


export default class NewsFeed extends Component {
  render(){
    return(
      <ScrollView style={{backgroundColor : 'white'}}>

      <Image source={require('../images/Social-comm.png')} style={{width:360,height:64}}/>
      <Text style={{fontSize:20}}>club here</Text>
      <Image source={require('../images/Arts.png')}style={{width:360,height:64}} />
      <Text style={{fontSize:20}}>club here</Text>
      <Image source={require('../images/Makers.png')} style={{width:360,height:64}}/>
      <Text style={{fontSize:20}}>club here</Text>
      <Image source={require('../images/Sports.png')}style={{width:360,height:64}} />
      <Text style={{fontSize:20}}>club here</Text>
      <Image source={require('../images/Culture.png')} style={{width:360,height:64}}/>
      <Text style={{fontSize:20}}>club here</Text>
      </ScrollView>
    );
  }
}
AppRegistry.registerComponent(
  'NewsFeed',
  () => NewsFeed);
