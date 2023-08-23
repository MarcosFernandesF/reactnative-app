import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './components/Home';
import ParksListScreen from './components/ParkList';

const MainNavigator = createStackNavigator({
  Home: {screen:HomeScreen},
  Parks: {screen:ParksListScreen},
});
 
const App = createAppContainer(MainNavigator);
export default App;