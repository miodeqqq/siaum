import { AppRegistry } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './scenes/Home';
import PlayerScreen from 'react-native-sound-playerview'

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  player: {screen: PlayerScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

AppRegistry.registerComponent('zad5', () => App);