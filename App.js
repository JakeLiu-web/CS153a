import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Switch } from 'react-native';

export default function TravelApp() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [destination, setDestination] = useState('');
  const [origin, setOrigin] = useState('');
  const [numTravelers, setNumTravelers] = useState('');
  const [transportation, setTransportation] = useState('');
  const [rentCar, setRentCar] = useState(false);

  const handlePress = () => {
    if (!startDate || !endDate || !destination || !origin || !numTravelers || !transportation) {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      console.log('Travel details:', {
        startDate,
        endDate,
        destination,
        origin,
        numTravelers,
        transportation,
        rentCar
      });
      Alert.alert('Success', 'Travel details submitted successfully!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Planner</Text>

      <Text style={styles.label}>Start Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={startDate}
        onChangeText={text => setStartDate(text)}
      />

      <Text style={styles.label}>End Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={endDate}
        onChangeText={text => setEndDate(text)}
      />

      <Text style={styles.label}>Destination:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter destination"
        value={destination}
        onChangeText={text => setDestination(text)}
      />

      <Text style={styles.label}>Origin:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter origin"
        value={origin}
        onChangeText={text => setOrigin(text)}
      />

      <Text style={styles.label}>Number of Travelers:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number of travelers"
        keyboardType="numeric"
        value={numTravelers}
        onChangeText={text => setNumTravelers(text)}
      />

      <Text style={styles.label}>Transportation:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter preferred transportation"
        value={transportation}
        onChangeText={text => setTransportation(text)}
      />

      <Text style={styles.label}>Rent a Car:</Text>
      <View style={styles.checkboxContainer}>
        <Text>Yes</Text>
        <Switch value={rentCar} onValueChange={value => setRentCar(value)} />
        <Text>No</Text>
      </View>

      <Button title="Submit" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    marginBottom: 15,
    padding: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
});
