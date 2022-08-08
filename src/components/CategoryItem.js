import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { elevation } from '../common/styles';

export default function CategoryItem(props) {
  const {
    categoryLabel,
    categoryImagePath,
    index,
    categoryOptionsLength,
  } = props;

  console.log(categoryOptionsLength)

  return (
    <View 
      style={[
        styles.container, 
        elevation, 
        index === 0 ? { marginLeft: 12 } : { marginLeft: 10 }, 
        index === categoryOptionsLength - 1 ? { marginRight: 12 } : { marginRight: 10 } 
      ]}
    >
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
    backgroundColor: "white",
    padding: 4,

    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
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
