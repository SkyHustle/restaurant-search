import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ResultsList = ({ title, results }) => {
  return(
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        data={results}
        keyExtractor={(result) => result.name }
        renderItem={( {item} ) => {
          return (
            <Text>
              Name: {item.name} - Price {item.price}
            </Text>
          );
        }}
      />
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