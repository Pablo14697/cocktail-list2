import { Platform, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 30 : 0,
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    backgroundColor: "transparent",
    margin: 0
  },
  searchBarContainer: {
    width: "100%",
    height: 45
  },
  placeListContainer: {
    width: "95%",
    height: "90%",
    paddingBottom: 10,
    paddingTop: 10,

    marginTop: 20,
    justifyContent: "center"
  }
});
