import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabIcon } from "./options";
import { colors } from "../utils/colors";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function MainStack() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => tabIcon(route)}
      tabBarLabelStyle={{
        color: colors.primary,
      }}
    >
      <Tabs.Screen name="Home" component={StackRoutes} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
}

function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Home} />
    </Stack.Navigator>
  );
}
