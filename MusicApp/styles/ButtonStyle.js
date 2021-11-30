import { StyleSheet } from "react-native";

const ButtonStyle = StyleSheet.create({
  body: {
    width: "95%",
    height: 80,
    overflow: "hidden",
    backgroundColor: "#333",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
  },
  mainView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgBody: {
    padding: 10,
  },
  img: {
    width: 60,
    height: 60,
    maxHeight: "100%",
    resizeMode: "contain",
  },
  txtBody: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: "#fff",
    fontSize: 16,
  },
  iconBody: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ButtonStyle;
