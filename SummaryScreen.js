import React, { useContext } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import UsernameContext from './UsernameContext';


const SummaryScreen = ({ navigation }) => {
    const { startDate, endDate, destination, startLocation, numPeople, transportation } = useContext(UsernameContext);
  
    const handleGoBack = () => {
      navigation.goBack();
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Travel Summary</Text>
        <Text style={styles.text}>Start Date: {startDate}</Text>
        <Text style={styles.text}>End Date: {endDate}</Text>
        <Text style={styles.text}>Destination Airport: {destination}</Text>
        <Text style={styles.text}>Start Location Airport: {startLocation}</Text>
        <Text style={styles.text}>Number of People: {numPeople}</Text>
        <Text style={styles.text}>Transportation: {transportation}</Text>
        <Button title="Go Back" onPress={handleGoBack} />
      </View>
    );
  };
  
  export default SummaryScreen;
