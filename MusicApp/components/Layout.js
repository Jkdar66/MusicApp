import React from "react";
import { SafeAreaView } from "react-native";

class Layout extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>{this.props.children}</SafeAreaView>
    );
  }
}

export default Layout;
