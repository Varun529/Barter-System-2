import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/login';
export default class App extends Component {
  render(){
  return (
    <View>
      <LoginScreen/>
    </View>
  );
}
}
