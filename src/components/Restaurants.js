import React, { useEffect } from 'react';
import {View, StyleSheet, Text, ActivityIndicator, FlatList, ScrollView} from 'react-native';
import yelp from "../api/yelp";
import useRestaurants from '../hooks/useRestaurants';
import RestaurantItem from './RestaurantItem';

const Restaurants = (props) => {
  const {
    term,
  } = props;
  const [{data, loading, error}, searchRestaurants] = useRestaurants();

  useEffect(() => {
    searchRestaurants(term);
  }, [term]);

  console.log("term");
  console.log(term);
  console.log("data");
  console.log(data);
  console.log("loading");
  console.log(loading);

  if (loading) return <ActivityIndicator size="large" matginVertical={30} color="black" />;

  if (error) return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {error}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Restaurants
      </Text>
      <FlatList 
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({item}) => <RestaurantItem restaurant={item} />}
      />
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
    // height: 35,
    // backgroundColor: "pink"
  },
  activityIndicator: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});

export default Restaurants;
