/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const placeList = (props: any) => {
  return (
    <FlatList
      data={props.drinks}
      renderItem={(info: any) => (
        <ListItem
          drinkName={info.item.strDrink}
          drinkImage={info.item.strDrinkThumb}
        />
      )}
      keyExtractor={(item: any) => item.idDrink}
    />
  );
};

export default placeList;
