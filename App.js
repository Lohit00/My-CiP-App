import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, Button, Linking } from 'react-native';
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
  const [searchQuery, setSearchQuery] = useState('');

  function HeaderTitle() {
    return (
      <View style={styles.headerTitle}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://www.cipchicago.org/wp-content/uploads/2021/07/CIP_Logo_1024x1024-300x300.png' }}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: () => <HeaderTitle />,
        headerRight: () => (
          <View style={styles.headerRight}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Button
              onPress={() => Linking.openURL('https://www.cipchicago.org/donate')}
              title="Donate Now"
              color="#000"
            />
          </View>
        ),
      }}
    >
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

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  searchInput: {
    width: 150,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    marginRight: 10,
  },
});
