import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { elevation } from '../common/styles';

const RestaurantItem = (props) => {
  const {
    restaurant,
  } = props;

  return (
    <View style={[elevation, styles.container]}>
      <Image source={{uri: restaurant.image_url}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.header}>{restaurant.name}</Text>
        <View style={styles.info}>
          <Text style={styles.rating}>
            {restaurant.rating}
          </Text>
          <Text style={styles.money}>
            {restaurant.price}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 100,
    // alignSelf: "stretch",
    borderRadius: 1,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "black",
    borderWidth: 0.1,
    // backgroundColor: "pink"
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 8,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  info: {
    flexDirection: 'row',
  },
  rating: {
    marginRight: 20,
  },
  money: {
    color: "gold"
  }
})

export default RestaurantItem;
