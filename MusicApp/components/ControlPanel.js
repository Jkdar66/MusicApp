import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Slider from "@react-native-community/slider";

class ControlPanel extends React.Component {
  millisToMinutesAndSeconds(millis) {
    millis = millis ? millis : 0;
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds
    );
  }

  render() {
    const {
      PlaySound,
      PlayBack,
      PlayNext,
      Colors,
      isPlaying,
      index,
      maxIndex,
      soundPosition,
      soundPositionMillis,
      soundDurationMillis,
      setSoundPositionValue,
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
        <View>
          <View style={style.durationPositionView}>
            <Text style={{ color: "#fff" }}>
              {this.millisToMinutesAndSeconds(soundPositionMillis)}
            </Text>
            <Text style={{ color: "#fff" }}>
              {this.millisToMinutesAndSeconds(soundDurationMillis)}
            </Text>
          </View>
          <Slider
            style={{ height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#f08"
            thumbTintColor="#f08"
            value={soundPosition}
            onSlidingComplete={(value) =>
              setSoundPositionValue ? setSoundPositionValue(value) : null
            }
          />
        </View>
        <View style={style.mainView}>
          <TouchableHighlight
            onPress={PlayBack}
            underlayColor="#f08"
            style={style.controlBtn}
            disabled={index === 0}
          >
            <Ionicons
              name="play-back"
              size={25}
              color={Colors.text}
              style={{ opacity: index === 0 ? 0.5 : 1 }}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={PlaySound}
            underlayColor="#f08"
            style={style.playBtn}
          >
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              color={Colors.text}
              size={30}
              style={{ marginLeft: isPlaying ? 2 : 5 }}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={PlayNext}
            underlayColor="#f08"
            style={style.controlBtn}
            disabled={index === maxIndex}
          >
            <Ionicons
              name="play-forward"
              size={25}
              color={Colors.text}
              style={{ opacity: index === maxIndex ? 0.5 : 1 }}
            />
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
    padding: 5,
  },
  sliderView: {},
  durationPositionView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
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
