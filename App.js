import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import StackDemo from './components/StackDemo';
import SummaryScreen from './components/SummaryScreen';

const App = () => {
  const [showSummary, setShowSummary] = useState(false);

  const handleShowSummary = () => {
    setShowSummary(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: 'center', fontSize: 40 }}>StackDemo</Text>
      {/* Render the StackDemo component */}
      <StackDemo />
      {/* Conditionally render the SummaryScreen component */}
      {showSummary && <SummaryScreen />}
      {/* Button to trigger showing the SummaryScreen */}
      <Button title="Show Summary" onPress={handleShowSummary} />
    </View>
  );
};

export default App;
