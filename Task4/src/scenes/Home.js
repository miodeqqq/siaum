import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from './components/CustomButton';

import { Actions } from 'react-native-router-flux';

class Home extends React.Component {
    addNew = () => {
        Actions.newData();
    }

    showData = () => {
        Actions.showData();
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomButton text = {'Add record'} handleClick = {this.addNew}/>
                <CustomButton text = {'View records'} handleClick = {this.showData}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20
    }
})

export default Home