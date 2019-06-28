import React from 'react';
import { StyleSheet, Text, View, ScrollView, Picker } from 'react-native';

//import { Actions } from 'react-native-router-flux';

class Summary extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.header}>Name and surname</Text>
                <Text style = {styles.text}>{this.props.full_name}</Text>
                <Text style = {styles.header}>Date of birth</Text>
                <Text style = {styles.text}>{this.props.date}</Text>
                <Text style = {styles.header}>Sex</Text>
                <Text style = {styles.text}>{this.props.sex}</Text>
                <Text style = {styles.header}>Eyes color</Text>
                <Text style = {styles.text}>{this.props.eyes}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    header: {
        fontSize: 20,
        margin: 15
    },
    text: {
        fontSize: 15,
        marginLeft: 30,
        height: 25,
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Summary