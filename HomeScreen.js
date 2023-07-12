import React, { useContext } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UsernameContext from './UsernameContext';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {
    startDate,
    endDate,
    destination,
    startLocation,
    numPeople,
    transportation,
  } = useContext(UsernameContext);

  const handleSaveTravelPlanner = async () => {
    const travelPlannerData = {
      startDate,
      endDate,
      destination,
      startLocation,
      numPeople,
      transportation,
    };

    // Save travelPlannerData to AsyncStorage
    try {
      await AsyncStorage.setItem('TravelPlanner', JSON.stringify(travelPlannerData));
      console.log('Travel planner data saved successfully!');
      navigation.navigate('Summary', travelPlannerData); // Navigate to the SummaryScreen
    } catch (error) {
      console.log('Error saving travel planner data:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Input fields and other components */}
      <Button title="Save" onPress={handleSaveTravelPlanner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;
