import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15
  },
  containerModal: {
    width: "100%",
    height: "100%"
  },
  logo: {
    flexDirection: "row",
    marginBottom: 20
  },
  logoText1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white"
  },
  logoText2: {
    fontSize: 28,
    color: "white",
    fontWeight: "normal"
  },
  searchButton: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  searchButtonText: {
    fontSize: 18,
    color: "#737373"
  }
});
