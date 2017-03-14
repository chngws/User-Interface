const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },

 {
    name: 'brann',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },

 {
    name: 'brunn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },

]
import React, {Component} from 'react'
import { Text,View } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'

export default class CardsExample extends Component {

render() {
  return(
    <View>
   
  <Card
    title='HELLO WORLD'
    image={require('../images/pic2.jpg')}>
    <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
    </Text>
    <Button
      icon={{name: 'code'}}
      backgroundColor='#03A9F4'
      fontFamily='Lato'
      buttonStyle={{borderRadius: 10, marginLeft: 10, marginRight: 10, marginBottom: 10}}
      title='VIEW NOW' />
  </Card>
  </View>
)



  }
}
