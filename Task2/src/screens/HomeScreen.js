import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import CustomButton from '../components/CustomButton';
import weatherConditions from '../constants/WeatherConditions'
import Colors from '../constants/Colors';

import { SearchBar } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Daily',
  };

  constructor(props) {
    super(props);

    this.state =  {
      search: '',
      city: 'Białystok',
      json: '',
      icon: 'weather-cloudy',
      color: Colors.tabIconDefault,
      description: '',
      temperature: ''
    };
  }
  
  componentDidMount() {
    var url = 'http://api.openweathermap.org/data/2.5/weather?APPID=4264c29f4a60ce2004155d98aab09d00&units=metric&q=';
    fetch(url + 'Białystok')
      .then(response => response.json())
      .then(data => { return data; })
      .then(data => {
        var item = weatherConditions[data.weather[0].main];
        this.setState({ url: url, json: data, icon: item.icon, color: item.color, description: item.title, temperature: Math.round(data.main.temp) });
      })
      .catch(err => err);
  }

  static navigationOptions = {
    header: null,
  };

  _storeData = async (city) => {
    try {
      await AsyncStorage.setItem('city', city);
    } catch (error) {
      alert(error);
    }
  };

  updateSearch = search => {
    this.setState({ search: search });
  };

  handleClick = () => {
    this._storeData(this.state.search);
    
    fetch(this.state.url + this.state.search)
      .then(response => response.json())
      .then(data => { return data; })
      .then(data => {
        var item = weatherConditions[data.weather[0].main];
        this.setState({ json: data, icon: item.icon, color: item.color, description: item.title, temperature: Math.round(data.main.temp), city: this.state.search })
      })
      .catch(err => err);
  }

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
        <MaterialCommunityIcons
          name={this.state.icon}
          size={170}
          color={this.state.color}/>
          
          <Text style={styles.temperature}>{this.state.temperature}&#8451;</Text>
          <Text style={styles.weather}>{this.state.description}</Text>
          <Text style={styles.city}>{this.state.city}</Text>
        </View>
        <SearchBar placeholder="Type Here..." onChangeText={this.updateSearch} value={search}/>
        <CustomButton text = {'Search'} handleClick = {this.handleClick}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  mainContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  temperature: {
    fontSize: 60,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  weather: {
    fontSize: 28,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  city: {
    fontSize: 40,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
