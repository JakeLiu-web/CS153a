import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';
import { AppContext } from './AppContext';

const ProfileScreen = () => {
  const { name, setName, age, setAge, weight, setWeight, height, setHeight } = useContext(AppContext);
  const [currentValue, setCurrentValue] = useState({ name: '', age: '', weight: '', height: '' });

  useEffect(() => {
    setCurrentValue({ name, age, weight, height });
  }, [name, age, weight, height]);

  const handleInputChange = (field, value) => {
    setCurrentValue((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const saveData = () => {
    setName(currentValue.name);
    setAge(currentValue.age);
    setWeight(currentValue.weight);
    setHeight(currentValue.height);
    console.log('Data saved');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.currentValueContainer}>
          <Text style={styles.currentValue}>currentValue = {JSON.stringify(currentValue)}</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={[styles.inputContainer, styles.nameInputContainer]}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={[styles.input, styles.nameInput]}
              placeholder="Enter your name"
              value={currentValue.name}
              onChangeText={(value) => handleInputChange('name', value)}
            />
          </View>
          <View style={[styles.inputContainer, styles.ageInputContainer]}>
            <Text style={styles.label}>Age:</Text>
            <TextInput
              style={[styles.input, styles.ageInput]}
              placeholder="Enter your age"
              value={currentValue.age}
              onChangeText={(value) => handleInputChange('age', value)}
            />
          </View>
          <View style={[styles.inputContainer, styles.weightInputContainer]}>
            <Text style={styles.label}>Weight:</Text>
            <TextInput
              style={[styles.input, styles.weightInput]}
              placeholder="Enter your weight"
              value={currentValue.weight}
              onChangeText={(value) => handleInputChange('weight', value)}
            />
          </View>
          <View style={[styles.inputContainer, styles.heightInputContainer]}>
            <Text style={styles.label}>Height:</Text>
            <TextInput
              style={[styles.input, styles.heightInput]}
              placeholder="Enter your height"
              value={currentValue.height}
              onChangeText={(value) => handleInputChange('height', value)}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.saveButtonContainer}>
        <Button title="SAVE PROFILE" onPress={saveData} color="#007AFF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  currentValueContainer: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
  },
  currentValue: {
    textAlign: 'left',
  },
  formContainer: {
    width: '80%',
    alignSelf: 'center',
    paddingTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 70,
  },
  label: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  nameInputContainer: {
    backgroundColor: 'transparent',
  },
  ageInputContainer: {
    backgroundColor: 'transparent',
  },
  weightInputContainer: {
    backgroundColor: 'transparent',
  },
  heightInputContainer: {
    backgroundColor: 'transparent',
  },
  nameInput: {
    backgroundColor: 'green',
  },
  ageInput: {
    backgroundColor: 'lightblue',
  },
  weightInput: {
    backgroundColor: 'pink',
  },
  heightInput: {
    backgroundColor: 'blue',
  },
  saveButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
});

export default ProfileScreen;
