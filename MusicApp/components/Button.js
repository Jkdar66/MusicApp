import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import ButtonStyle from "../styles/ButtonStyle";

class Button extends React.Component {
  render() {
    const { onPress, playBtnOnPress, title, id, index, isPlaying } = this.props;
    return (
      <TouchableHighlight
        style={ButtonStyle.body}
        underlayColor="#555"
        onPress={() => onPress({ id: id, index: index })}
      >
        <View style={ButtonStyle.mainView}>
          <View style={ButtonStyle.imgBody}>
            <Image
              resizeMode="contain"
              //   source={require("")}
              style={ButtonStyle.img}
            />
          </View>
          <View style={ButtonStyle.txtBody}>
            <Text style={ButtonStyle.txt}>{title}</Text>
          </View>
          <View style={ButtonStyle.iconBody}>
            <TouchableOpacity onPress={playBtnOnPress}>
              <Ionicons
                name={isPlaying ? "pause" : "play"}
                size={40}
                color="#bbb"
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Button;
