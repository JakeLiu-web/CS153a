import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AppContext } from './AppContext';

const AgeScreen = () => {
  const { age } = useContext(AppContext);

  // Calculate Age in Weeks and Days
  const years = age;
  const weeks = age*52;
  const days = age * 52 * 7.024038461538462;

  return (
    <View>
      <Text>Age Calculator</Text>
      <Text>Age in Years: {years}</Text>
      <Text>Age in Weeks: {weeks}</Text>
      <Text>Age in Days: {days.toFixed(4)}</Text>
    </View>
  );
};

export default AgeScreen;
