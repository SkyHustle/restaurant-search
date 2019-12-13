import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange }) => {
  return(
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder='Search'
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: 'lightgrey',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10
  }
});

export default SearchBar;