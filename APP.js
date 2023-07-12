import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppProvider } from './components/AppContext';
import ProfileScreen from './components/ProfileScreen';
import BMIScreen from './components/BMIScreen';
import AgeScreen from './components/AgeScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(''); // Age as decimal value
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  return (
    <AppProvider value={{ name, setName, age, setAge, weight, setWeight, height, setHeight }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="BMI" component={BMIScreen} />
          <Tab.Screen name="Age" component={AgeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
