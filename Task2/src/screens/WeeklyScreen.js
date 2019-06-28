import React from 'react';
import { View, Text, StyleSheet, AsyncStorage, ScrollView } from 'react-native';

import { Divider } from 'react-native-elements';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import CustomButton from '../components/CustomButton';
import Days from '../constants/Days';

export default class WeeklyScreen extends React.Component {
  static navigationOptions = {
    title: 'Weekly',
  };
  
  state = {
    city: 'Białystok',
    json: '',
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var url = 'http://api.openweathermap.org/data/2.5/forecast?cnt=7&units=metric&APPID=4264c29f4a60ce2004155d98aab09d00&q=';
    fetch(url + 'Białystok')
    .then(response => response.json())
    .then(data => { return data; })
    .then(data => {
      var days = data.list;
      this.setState({days: days, url: url});
    })
    .catch(err => {
      alert(err);
    });
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('city');
      if (value !== null) {
        this.setState({city: value})

        fetch(this.state.url + value)
        .then(response => response.json())
        .then(data => { return data; })
        .then(data => {
          var days = data.list;
          this.setState({days: days});
        })
        .catch(err => {
          alert(err);
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  handleClick = () => {
    this._retrieveData();
  }

  renderDays = () => {
    var days = this.state.days;
    if(!days) return <View></View>

    return this.state.days.map(function(element, i) {
      var item = weatherConditions[element.weather[0].main];
      return <View style={styles.icon} key={i}>
          <Divider/>
          <Text>{Days[(new Date().getDay() + i) % 7]}</Text>
          <Divider/>
          <MaterialCommunityIcons
          name={item.icon}
          size={70}
          color={item.color}/>
          
          <Text style={styles.temperature}>{Math.round(element.main.temp)}&#8451;</Text>
          <Text style={styles.weather}>{item.title}</Text>
      </View>
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomButton text = {'Refresh'} handleClick = {this.handleClick}/>
        <ScrollView>
          <View style={styles.mainContainer}>
            <Text style={styles.city}>{this.state.city}</Text>
            <View>{this.renderDays()}</View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  icon: {
    marginTop: 20,
    textAlign: 'center'
  },
  dayName: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
  },
  city: {
    fontSize: 40,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  mainContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  temperature: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  weather: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
