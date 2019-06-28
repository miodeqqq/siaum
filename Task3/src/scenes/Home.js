import React from 'react';
import { View } from 'react-native';
import CustomButton from './CustomButton';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };

    handleHamburger = () => {
        Actions.hamburger();
    }

    handleDemon = () => {
        Actions.demon();
    }

    handleMjolnir = () => {
        Actions.mjolnir();
    }
    
    render() {
        return (
            <View>
                <CustomButton text = {'Hamburger'} handleClick = {this.handleHamburger}/>
                <CustomButton text = {'Demon'} handleClick = {this.handleDemon}/>
                <CustomButton text = {'Mjolnir'} handleClick = {this.handleMjolnir}/>
            </View>
        );
    }
}