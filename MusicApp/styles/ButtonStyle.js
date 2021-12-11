import { StyleSheet } from "react-native";

const ButtonStyle = StyleSheet.create({
  body: {
    width: "100%",
    height: 80,
    overflow: "hidden",
    backgroundColor: "#222",
    alignSelf: "center",
    borderBottomWidth: 0.5,
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
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBtn: {
    marginLeft: 0,
  },
});

export default ButtonStyle;
