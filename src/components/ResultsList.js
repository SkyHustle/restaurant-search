import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
  return(
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        data={results}
        keyExtractor={(result) => result.id }
        renderItem={( {item} ) => {
          return (
            <Text>
              Name: {item.name} - Price {item.price}
            </Text>
          );
        }}
      />
      <ResultsDetail />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultsList;