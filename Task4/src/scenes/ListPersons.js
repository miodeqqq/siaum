import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SQLite } from 'expo';
import { Actions } from 'react-native-router-flux';

const db = SQLite.openDatabase('db.db');

class Home extends React.Component {
    state = {
        persons: []
    }
    componentDidMount() {
        db.transaction(tx => {
            tx.executeSql('create table if not exists persons (id integer primary key not null, done int, name text, sex text, eyes text, date text);');
            tx.executeSql(`select * from persons;`, [], (_, { rows: { _array } }) => this.setState({ persons: _array }));
        });
    }

    deletePerson = (id) => {
        db.transaction(tx => {
            tx.executeSql(`delete from persons where id = ?;`, [id]);
            tx.executeSql(`select * from persons;`, [], (_, { rows: { _array } }) => this.setState({ persons: _array }));
        });
    }

    showInfo = (name, sex, eyes, date) => {
        Actions.summary({
            full_name: name,
            date: sex,
            eyes: eyes,
            sex: date
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.persons.map(({ id, name, sex, eyes, date }) => (
                    <View style={styles.item} key={id}>
                        <Text style={styles.name}>
                            {name}
                        </Text>
                        <TouchableOpacity key={'A' + id} style={styles.infoPerson} onPress={() => this.showInfo(name, sex, eyes, date)}>
                            <Text style={styles.text}>[ See ]</Text>
                        </TouchableOpacity>
                        <TouchableOpacity key={'B' + id} style={styles.deletePerson} onPress={() => this.deletePerson(id)}>
                            <Text style={styles.text}>[ Delete ]</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20
    },
    item: {
        flexDirection: 'row', 
        alignSelf: 'flex-start'
    },
    name: {
       fontSize: 25
    },
    infoPerson: {
        marginLeft: 20,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'flex-end',
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'blue',
        
    },
    deletePerson: {
        marginLeft: 20,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'flex-end',
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'red',
        
    },
    text:{
       color: 'white',
       textAlign: 'center'
    }
})

export default Home