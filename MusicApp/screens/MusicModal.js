import React from "react";
import { Modal } from "react-native";

class MusicModal extends React.Component {
  render() {
    const { visible } = this.props;
    return <Modal visible={visible}></Modal>;
  }
}

export default MusicModal;
