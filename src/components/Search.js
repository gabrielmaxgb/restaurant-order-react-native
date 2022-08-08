import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { elevation } from '../common/styles';

export default function Search() {
  return (
    <View style={[styles.textInputContainer, elevation]} >
      <AntDesign name="search1" size={24} color="black" />
      <TextInput placeholder='Restaurants, food' />
    </View>
  )
};

export const styles = StyleSheet.create({
  textInputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    margin: 12,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "white",
  }
})