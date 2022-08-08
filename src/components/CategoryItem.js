import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { elevation } from '../common/styles';

export default function CategoryItem(props) {
  const {
    categoryLabel,
    categoryImagePath,
  } = props;

  return (
    <View style={[styles.container, elevation]}>
      <View style={styles.imageContainer}>
        <Image 
          source={categoryImagePath} 
          style={styles.image}
        />
      </View>
      <Text style={styles.categoryLabel}>
        {categoryLabel}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 12,
    backgroundColor: "white",
    padding: 4,

    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // borderRadius: 8,
    // padding: 25,
    // backgroundColor: "white",
    width: 30,
    height: 30,
  },
  imageContainer: {
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 50,
  },
  categoryLabel: {
    fontWeight: "bold"
  }
})
