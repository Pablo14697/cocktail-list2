import React from "react";

import { Styles } from "./styles";
import { View, Alert } from "react-native";
import { SearchBar } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

import { connect } from "react-redux";
import { Store } from "../../../store";
import { fetchDrinks } from "../../../actions/searchCocktail";
import PlaceList from "../../../components/PlaceList/PlaceList";

type StoreProps = ReturnType<typeof mapStateToProps>;

type ConnectProps = StoreProps & {
  fetchDrinks: Function;
};

interface State {
  search: string;
  loading: boolean;
}
type Props = ConnectProps;

class SearchCocktail extends React.Component<Props, State> {
  state = {
    search: "",
    loading: false
  };

  search(search: any) {
    //when I press the X button, Component SearchBar set search="" for default
    if (search !== "") {
      this.setState({ loading: true }, async () => {
        const { fetchDrinks } = this.props;
        await fetchDrinks(search);
        this.setState({ loading: false }, () => {
          const { error } = this.props;

          if (error) {
            Alert.alert("Error on Fetch: \n" + error);
          }
        });
      });
    }
  }

  updateSearch = (search: any) => {
    this.setState({ search });
    if (search !== "") {
      this.search(search);
    } else {
      this.pressForClear();
    }
  };
  pressForClear = () => {
    this.setState({ search: "" });
    this.search(null);
  };

  render() {
    const { search } = this.state;

    return (
      <LinearGradient
        useAngle={true}
        angle={45}
        angleCenter={{ x: 0.4, y: 0.5 }}
        colors={["#cc00cc", "#ff5c33"]}
        style={Styles.container}
      >
        <View style={Styles.searchBarContainer}>
          <SearchBar
            placeholder="Search"
            onChangeText={this.updateSearch}
            onCancel={this.pressForClear}
            onClear={this.pressForClear}
            value={search}
            platform="ios"
            inputContainerStyle={{ backgroundColor: "#bfbfbf" }}
            containerStyle={{ backgroundColor: "white" }}
            inputStyle={{ backgroundColor: "#bfbfbf", color: "black" }}
            placeholderTextColor="#cc00cc"
          />
        </View>
        <View style={Styles.placeListContainer}>
          <PlaceList drinks={this.props.cocktails} />
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (store: Store) => {
  return {
    cocktails: store.searchCocktail.cocktails,
    error: store.searchCocktail.error
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchDrinks: (drinks: any) => dispatch(fetchDrinks(drinks))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCocktail);