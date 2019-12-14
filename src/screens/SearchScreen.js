import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return(
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>Results: {results.length}</Text>

      { errorMessage ? <Text>{errorMessage}</Text> : null }

      <ResultsList title='Cost Effective' results={results} />
      <ResultsList title='Bit Pricier' results={results} />
      <ResultsList title='Big Spender' results={results} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;