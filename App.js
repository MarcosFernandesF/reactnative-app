import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import HomeScreen from './Home'
import ParksList from './components/Parks';

const MainNavigator = createStackNavigator({
  Parks: {screen:ParksList},
});
 
const App = createAppContainer(MainNavigator);
export default App;