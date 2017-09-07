import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  render() {
    return(
      <View style={{flexDirection: 'column'}}>
	<Navbar style={{flex:1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
