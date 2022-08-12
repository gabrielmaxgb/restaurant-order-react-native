import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import yelp from "../api/yelp";

const Restaurants = () => {

  const searchRestaurants = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 5,
        term: "Dessert",
        location: "Brasília",
      }
    });
    console.log(response.data);
  };

  searchRestaurants();

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
