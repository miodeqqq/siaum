import React from 'react';
import { StyleSheet, Text, View, ScrollView, Picker } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import parseDate from './actions/parseDate'

import { Actions } from 'react-native-router-flux';

class Home extends React.Component {
    state = {
        name: '',
        surname: '',
        date: null,
        radio: 0,
        sex: 0
    }

    getName = (name) => {
        this.setState({ name: name })
    }
    getSurname = (surname) => {
        this.setState({ surname: surname })
    }
    handleDate = (date) => {
        date = parseDate(date.toString());
        this.setState({
            date: date,
        });
    }
    handleRadio = (value) => {
        this.setState({
            radio: value
        });
    }
    handleSex = (itemValue, itemIndex) => {
        this.setState({
            sex: itemIndex
        });
    }

    handleClick = () => {
        Actions.summary({
            full_name: this.state.name + ' ' + this.state.surname,
            date: this.state.date,
            eyes: radio[this.state.radio].label,
            sex: sex_list[this.state.sex].label
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <CustomInput text = {'Name'} placeholder = {'Name'} getText = {this.getName}/>
                    <CustomInput text = {'Surname'} placeholder = {'Surname'} getText = {this.getSurname}/>

                    <Text>Sex:</Text>
                    <Picker selectedValue={'m'} style={{height: 50}} onValueChange={this.handleSex}>
                        {sex_list.map(sex => {
                            return (
                                <Picker.Item key = {sex.key} label = {sex.label} value = {sex.value}/>
                            )
                        })}
                    </Picker>

                    <Text>Eyes color:</Text>
                    <RadioForm radio_props = {radio} initial = {0} onPress = {this.handleRadio}/>

                    <Text>Date of birth:</Text>
                    <CalendarPicker onDateChange={this.handleDate}/>

                    <CustomButton text = {'Accept'} handleClick = {this.handleClick}/>
                </ScrollView>
            </View>
        )
    }
}

const sex_list = [
    {label: 'Men', value: 'm', key: 0},
    {label: 'Female', value: 'f', key: 1}
]

const radio = [
    {label: 'Bronze', value: 0 },
    {label: 'Beer', value: 1 },
    {label: 'Amber', value: 2 },
    {label: 'Green', value: 3 },
    {label: 'Grey', value: 4 },
    {label: 'Blue', value: 5 },
    {label: 'Violet', value: 6 },
    {label: 'Red', value: 7 }
]

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20
    }
})

export default Home