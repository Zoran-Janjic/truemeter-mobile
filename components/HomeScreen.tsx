import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CarCheckForm from './CarCheckForm';
import ResultsDisplay from './ResultsDisplay';

export default function HomeScreen() {
  const [results, setResults] = useState<any>(null);

  const handleResultsReceived = (fraudResults: any) => {
    setResults(fraudResults);
  };

  const handleCheckAnother = () => {
    setResults(null);
  };

  return (
    <View style={styles.container}>
      {results ? (
        <ResultsDisplay 
          results={results} 
          onCheckAnother={handleCheckAnother}
        />
      ) : (
        <CarCheckForm onResultsReceived={handleResultsReceived} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
});
