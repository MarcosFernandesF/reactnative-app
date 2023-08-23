import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './components/Home';
import ParksScreen from './components/Parks';

const MainNavigator = createStackNavigator({
	Home: {screen:HomeScreen},
	Parkss: {screen:ParksScreen},
});
 
const App = createAppContainer(MainNavigator);
export default App;