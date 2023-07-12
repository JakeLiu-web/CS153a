import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        age,
        setAge,
        weight,
        setWeight,
        height,
        setHeight,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
