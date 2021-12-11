import React from "react";
import { TouchableHighlight } from "react-native";

class HoverButton extends React.Component {
  render() {
    const { onPress } = this.props;
    return <TouchableHighlight></TouchableHighlight>;
  }
}

export default HoverButton;
