import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabIcon } from "./options";
import { colors } from "../utils/colors";
import Email from "../screens/Settings/Email";
import Phone from "../screens/Settings/Phone";
import Password from "../screens/Settings/Password";
import Preferences from "../screens/Settings/Preferences";


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
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="Phone" component={Phone} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Preferences" component={Preferences} />
      
    </Stack.Navigator>
  );
}
