import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AppContext } from './AppContext';

const BMIScreen = () => {
  const { weight, height } = useContext(AppContext);

  // Calculate BMI
  const bmi = (weight / (height * height)*703).toFixed(20);

  return (
    <View>
      <Text>BMI Calculator</Text>
      <Text>Height: {height}</Text>
      <Text>Weight: {weight}</Text>
      <Text>BMI: {bmi}</Text>
    </View>
  );
};

export default BMIScreen;
