import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MusicScreen from "../screens/MusicScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

class TabNavigation extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Music"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "musical-notes-sharp" : "musical-notes-outline"}
                size={size}
                color={color}
              />
            ),
          }}
          component={MusicScreen}
        />
        <Tab.Screen
          name="Settings"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        >
          {(props) => (
            <SettingsScreen
              {...props}
              onThemeChange={this.props.onThemeChange}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    );
  }
}

export default TabNavigation;
