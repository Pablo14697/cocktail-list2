/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";

import { View, Image, Text } from "react-native";

import { styles } from "./styles";

const listItem = (props: any) => {
  return (
    <View style={styles.listItem}>
      <Image style={styles.imageItem} source={{ uri: props.drinkImage }} />
      <Text style={styles.textItem}>{props.drinkName}</Text>
    </View>
  );
};

export default listItem;
