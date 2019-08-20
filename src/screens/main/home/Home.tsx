import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import { Styles } from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { goToPage } from "../../../navigation";

class Home extends React.Component {
  state = {
    modalVisible: false
  };

  render() {
    return (
      <LinearGradient
        useAngle={true}
        angle={45}
        angleCenter={{ x: 0.4, y: 0.5 }}
        colors={["#ff5c33", "#cc00cc"]}
        style={Styles.container}
      >
        <View>
          <Icon name="cocktail" size={40} color="white" />
        </View>
        <View style={Styles.logo}>
          <Text style={Styles.logoText1}>Cocktail</Text>
          <Text style={Styles.logoText2}>Finder</Text>
        </View>
        <TouchableOpacity
          style={Styles.searchButton}
          onPress={() => {
            goToPage("SearchCocktail");
          }}
        >
          <Icon name="search" size={20} color="#cc00cc" />
          <Text style={Styles.searchButtonText}>
            Search your favourite cocktail
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

export default Home;
