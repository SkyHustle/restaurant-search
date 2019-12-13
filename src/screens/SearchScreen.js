import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import Yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return(
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log(Yelp.get())}
      />
      <Text>Term: {term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;