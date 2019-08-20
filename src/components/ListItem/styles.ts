import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: "3%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    height: 140,
    width: "99%",
    backgroundColor: "#eee"
  },
  imageItem: {
    marginLeft: 20,
    marginBottom: 4.5,
    width: 110,
    height: 110,
    borderRadius: 110 / 2
  },
  textItem: {
    color: "black",
    width: "40%",
    fontWeight: "bold",
    fontSize: 26,
    marginLeft: "15%"
  }
});
