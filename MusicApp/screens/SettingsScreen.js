import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { Switch, View } from "react-native";
import Layout from "../components/Layout";

const SettingsScreen = (props) => {
  const [themeIsDark, setThemeIsDark] = useState(useTheme().dark);
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Switch
          value={themeIsDark}
          onValueChange={(value) => {
            setThemeIsDark(value);
            props.onThemeChange(value);
          }}
        />
      </View>
    </Layout>
  );
};

export default SettingsScreen;
