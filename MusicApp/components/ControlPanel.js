import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

class ControlPanel extends React.Component {
  render() {
    const {
      PlaySound,
      PlayBack,
      PlayNext,
      Colors,
      isPlaying,
      positionPercent,
    } = this.props;
    return (
      <View
        style={[
          style.body,
          {
            backgroundColor: Colors.card,
            borderBottomColor: Colors.customBorder,
          },
        ]}
      >
        <View
          style={{
            width: `${positionPercent}%`,
            height: 5,
            backgroundColor: "#f08",
          }}
        />
        {/* <Slider /> */}
        <View style={style.mainView}>
          <TouchableHighlight
            onPress={PlayBack}
            underlayColor="#555"
            style={style.controlBtn}
          >
            <Ionicons name="play-back" size={25} color={Colors.text} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={PlaySound}
            underlayColor="#555"
            style={style.playBtn}
          >
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              color={Colors.text}
              size={25}
              style={{ marginLeft: isPlaying ? 2 : 5 }}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={PlayNext}
            underlayColor="#555"
            style={style.controlBtn}
          >
            <Ionicons name="play-forward" size={25} color={Colors.text} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  mainView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 1,
  },
  controlBtn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  playBtn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginHorizontal: 10,
  },
});

export default ControlPanel;
