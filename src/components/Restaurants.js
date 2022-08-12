import React, { useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import yelp from "../api/yelp";
import useRestaurants from '../hooks/useRestaurants';

const Restaurants = () => {
  const [{data, loading, error}, searchRestaurants] = useRestaurants();

  useEffect(() => {searchRestaurants()}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Restaurants
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 15,
    // flex: 1,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
    height: 35,
  }
});

export default Restaurants;
