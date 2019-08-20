import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: "3%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    height: 120,
    width: "99%",
    backgroundColor: "#eee"
  },
  imageItem: {
    marginBottom: 4.5,
    width: 90,
    height: 90,
    borderRadius: 90 / 2
  },
  textItem: {
    color: "black",
    width: "40%",
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: "15%"
  }
});
