import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  handleClick = () => {
    this.props.navigation.navigate('player', {title: 'rickroll', filepath: 'rickroll.mp3'});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
            style = {styles.button}
            onPress = {this.handleClick}>
            <Text style = {styles.text}> Play </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
     backgroundColor: '#428aff',
     padding: 10,
     margin: 15,
     height: 40,
     width: 200
  },
  text:{
     color: 'white',
     textAlign: 'center'
  }
});