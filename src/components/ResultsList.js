import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ResultsList = ({ results }) => {
  return(
    <FlatList
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(result) => result.name }
      renderItem={( {item} ) => {
        return (
          <Text>
            {item.name}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ResultsList;