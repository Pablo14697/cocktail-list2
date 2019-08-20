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
  componentDidUpdate() {
    const { error } = this.props;
    if (error) {
      Alert.alert(`Fetch ${error}`);
    }
  }
  search(search: any) {
    //when I press the X button, Component SearchBar set search="" for default
    if (search !== "" && String(search).length >= 3) {
      const { fetchDrinks } = this.props;

      fetchDrinks(search);
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
    const { cocktails } = this.props;
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
            cancelButtonProps={{ color: "#808080" }}
            value={search}
            platform="ios"
            inputContainerStyle={{ backgroundColor: "#facccc" }}
            containerStyle={{ backgroundColor: "white" }}
            inputStyle={{ backgroundColor: "#facccc", color: "black" }}
            placeholderTextColor="#808080"
          />
        </View>
        <View style={Styles.placeListContainer}>
          <PlaceList drinks={cocktails} />
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
