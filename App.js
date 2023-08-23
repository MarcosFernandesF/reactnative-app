import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './components/Home';
import ParksListScreen from './components/ParkList';
import ParkDetailsScreen from './components/ParkDetails'

const MainNavigator = createStackNavigator({
	Home: {screen:HomeScreen},
	ParkList: {screen:ParksListScreen},
	ParkDetails: {screen: ParkDetailsScreen}
});
 
const App = createAppContainer(MainNavigator);
export default App;