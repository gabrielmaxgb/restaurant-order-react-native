import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { elevation } from '../common/styles';

export default function Search(props) {
  const {
    setTerm
  } = props;
  const [input, setInput] = useState("");

  const handleEndEditing = () => {
    if(!input) return;
    setTerm(input);
    setInput("");
  }

  return (
    <View style={[styles.textInputContainer, elevation]} >
      <AntDesign style={styles.searchIcon} name="search1" size={24} color="black" />
      <TextInput 
        style={styles.input}
        placeholder='Restaurants, food'
        value={input}
        onChangeText={(text) => setInput(text)}
        onEndEditing={() => handleEndEditing()}
      />
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
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    // color: "red",
    maxWidth: "90%",
  }
})