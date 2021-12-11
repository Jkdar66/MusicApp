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

class SoundCard extends React.Component {
  render() {
    const { onPress, playBtnOnPress, title, id, index, isPlaying, Colors } =
      this.props;
    return (
      <TouchableHighlight
        style={[
          ButtonStyle.body,
          {
            borderBottomColor: Colors.customBorder,
            backgroundColor: Colors.customCardBG,
          },
        ]}
        underlayColor="#555"
        onPress={() => onPress({ id: id, index: index })}
      >
        <View style={ButtonStyle.mainView}>
          <View style={ButtonStyle.imgBody}>
            <Image
              resizeMode="contain"
              source={require("../assets/mp3.png")}
              style={ButtonStyle.img}
            />
          </View>
          <View style={ButtonStyle.txtBody}>
            <Text style={[ButtonStyle.txt, { color: Colors.text }]}>
              {title}
            </Text>
          </View>
          <View style={ButtonStyle.iconBody}>
            <TouchableOpacity style={ButtonStyle.iconBtn}>
              <Ionicons name="heart-outline" color={Colors.text} size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={playBtnOnPress}
              style={{ marginLeft: 15 }}
            >
              <Ionicons
                name={isPlaying ? "pause-outline" : "play-outline"}
                size={30}
                color={isPlaying ? "#f08" : Colors.text}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default SoundCard;
