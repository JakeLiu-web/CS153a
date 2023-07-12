import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UsernameContext from './UsernameContext';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [destination, setDestination] = useState('');
  const [startLocation, setStartLocation] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [transportation, setTransportation] = useState('');
  const [filteredFlights, setFilteredFlights] = useState([]); // Moved inside HomeScreen component

  const saveTravelPlanner = async () => {
    const travelPlannerData = {
      startDate,
      endDate,
      destination,
      startLocation,
      numPeople,
      transportation
    };

    // Save travelPlannerData to AsyncStorage
    try {
      await AsyncStorage.setItem('TravelPlanner', JSON.stringify(travelPlannerData));
      console.log('Travel planner data saved successfully!');
    } catch (error) {
      console.log('Error saving travel planner data:', error);
    }

    // Download flight data and filter flights based on destination and start location
    const flightData = await downloadFlightData(destination, startLocation);
    if (flightData) {
      console.log('Filtered flights:', flightData);
      setFilteredFlights(flightData); // Update filteredFlights state
    } else {
      console.log('No flights found for the given criteria.');
    }
  };

  const downloadFlightData = async (destinationAirport, startLocationAirport) => {
    // Simulating flight data download from an API or database
    const allFlightData = [
      {
        origin: 'New York',
        destination: 'Boston',
        date: '2023-01-01',
        flightNumber: 'ABC123'
      },
      {
        origin: 'New York',
        destination: 'Boston',
        date: '2023-02-01',
        flightNumber: 'DEF456'
      },
      // ... More flight data ...
    ];

    // Filter flights based on destination and start location airports
    const filteredFlights = allFlightData.filter(
      flight =>
        flight.destination.toLowerCase() === destinationAirport.toLowerCase() &&
        flight.origin.toLowerCase() === startLocationAirport.toLowerCase()
    );

    // Return the filtered flights
    return filteredFlights;
  };

  return (
    <View style={styles.container}>
      <Text>Enter Trip Details:</Text>
      <TextInput
        placeholder="Start Date (MM/DD/YYYY)"
        value={startDate}
        onChangeText={setStartDate}
      />
      <TextInput
        placeholder="End Date (MM/DD/YYYY)"
        value={endDate}
        onChangeText={setEndDate}
      />
      <TextInput
        placeholder="Destination Airport"
        value={destination}
        onChangeText={setDestination}
      />
      <TextInput
        placeholder="Start Location Airport"
        value={startLocation}
        onChangeText={setStartLocation}
      />
      <TextInput
        placeholder="Number of People"
        value={numPeople}
        onChangeText={setNumPeople}
      />
      <TextInput
        placeholder="Transportation"
        value={transportation}
        onChangeText={setTransportation}
      />
      <Button title="Save" onPress={saveTravelPlanner} />
      <Button
        title="About this app"
        onPress={() =>
          navigation.navigate('Profile', { name: 'About' })
        }
      />
    </View>
  );
};

const ProfileScreen = () => {
  return <Text>This is the profile screen for the app. This app is desgined for planning trips. User can easily plan their trip with this app.</Text>;
};

const MyStack = () => {
  return (
    <UsernameContext.Provider value={{}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsernameContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MyStack;
