import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = (props) => {
    handleText = (text) => {
        props.getText(text);
    }
    return (
        <View>
            <Text>
                {props.text}
            </Text>
            <TextInput style = {styles.input} placeholder = {props.placeholder} onChangeText = {handleText}/>
        </View>
    )
}
export default CustomInput

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 1
    }
})