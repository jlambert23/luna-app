import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Image, Alert } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text style={styles.bigred}>{display}</Text>
    )
  }
}

export default class App extends Component {
  render() {
    let pic = {
      uri: 'http://3.bp.blogspot.com/-fGQcKmfH_hY/UgQb8T-A9WI/AAAAAAAAEwI/cT7SWjTiwg4/s1600/7+normal,+hapless.jpg',
    };


    return (
      <View style={styles.container}>
        <View style={styles.t1}>
          <Button 
            onPress={() =>{
              Alert.alert('You tapped the button!');
            }}
            title="Press Me"
          />
        </View>
        <View style={styles.t2}><Image source={pic} style={{width: 300, height: 300}}/></View>
        <View style={styles.t3}><Blink text='Hello Luna!'/></View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  t1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
  },
  t2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  t3: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: 'steelblue',
  },
  bigred: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
  container: {
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
