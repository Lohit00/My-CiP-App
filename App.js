import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import EventsScreen from './Screens/EventsScreen';
import ContactScreen from './Screens/ContactScreen';
import Who from './Screens/Who';
import What from './Screens/What';
import StoriesScreen from './Screens/StoriesScreen';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Who we are" component={Who} />
      <Drawer.Screen name="What we do" component={What} />
      <Drawer.Screen name="Stories" component={StoriesScreen} />
      <Drawer.Screen name="Events" component={EventsScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />

    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
