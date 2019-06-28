import React from 'react';
import { StyleSheet, Text, View, ScrollView, Picker } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { SQLite } from 'expo';

import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';

import RadioForm from 'react-native-simple-radio-button';

import parseDate from './actions/parseDate'

import { Actions } from 'react-native-router-flux';

const db = SQLite.openDatabase('db.db');

class AddData extends React.Component {
    state = {
        name: '',
        surname: '',
        date: null,
        radio: 0,
        sex: 0
    }

    componentDidMount() {
      db.transaction(tx => {
        tx.executeSql(
          'create table if not exists persons (id integer primary key not null, done int, name text, sex text, eyes text, date text);'
        );
      });
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
        this.add(
            this.state.name + ' ' + this.state.surname,
            sex_list[this.state.sex].label,
            radio[this.state.radio].label,
            this.state.date
        );
        Actions.showData({})
    }
    
    add = (name, sex, eyes, date) => {
        db.transaction(
            tx => {
                tx.executeSql('insert into persons (name, sex, eyes, date) values (?, ?, ?, ?)', [name, sex, eyes, date]);
            }
        );
    }
    
    update = () => {
        this.todo && this.todo.update();
        this.done && this.done.update();
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

                    <CustomButton text = {'Add'} handleClick = {this.handleClick}/>
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

export default AddData