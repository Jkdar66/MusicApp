import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StatusBar } from "react-native";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

const DefualtColors = {
  playBtn: "#f08",
};

class StackNavigation extends React.Component {
  state = { mode: "dark" };

  constructor(props) {
    super(props);
    this.onThemeChange = this.onThemeChange.bind(this);
  }

  onThemeChange(value) {
    let values = ["light", "dark-content"];
    value === true ? (values = ["dark", "light-content"]) : null;
    this.setState({ mode: values[0] });
    StatusBar.setBarStyle(values[1]);
  }

  render() {
    return (
      <NavigationContainer
        theme={
          this.state.mode === "dark"
            ? {
                dark: true,
                colors: {
                  ...DefualtColors,
                  background: "#000000aa",
                  border: "#00000000",
                  card: "#1b262c",
                  notification: "#fff",
                  primary: "#fff",
                  text: "#fff",
                  customBorder: "#555",
                },
              }
            : {
                dark: false,
                colors: {
                  ...DefualtColors,
                  background: "#ffffffaa",
                  border: "#00000000",
                  card: "#eee",
                  notification: "#eee",
                  primary: "#000",
                  text: "#000",
                  customBorder: "#999",
                },
              }
        }
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home">
            {(props) => (
              <TabNavigation {...props} onThemeChange={this.onThemeChange} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default StackNavigation;
