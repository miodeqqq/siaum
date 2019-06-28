import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = (props) => {
    handleClick = () => {
        props.handleClick();
    }
    return (
        <View>
            <TouchableOpacity
                style = {styles.button}
                onPress = {props.handleClick}>
                <Text style = {styles.text}> {props.text} </Text>
            </TouchableOpacity>
        </View>
    )
}
export default CustomButton

const styles = StyleSheet.create({
   button: {
      backgroundColor: '#428aff',
      padding: 10,
      margin: 15,
      height: 40
   },
   text:{
      color: 'white',
      textAlign: 'center'
   }
})