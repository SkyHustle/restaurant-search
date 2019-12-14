import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
  return(
    <View>
      <Text>Name: {result.name} - Price {result.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsDetail;