import { Icon } from "@rneui/themed";
import { Dimensions, Platform, View } from "react-native";
import { colors } from "../utils/colors";
import { Ionicons } from '@expo/vector-icons';
const { height } = Dimensions.get("window");

const tabIcon = (route) => ({
  headerShown: false,
  keyboardHidesTabBar: true,
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.black,
  tabBarItemStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarLabelStyle: {
    paddingBottom: Platform.OS === "android" ? 8 : 8,
    textAlign: "center",
  },
  tabBarStyle: {
    position: "absolute",
    height: Platform.OS === "android" ? 70 : height * 0.12,
    backgroundColor: colors.white,
    borderColor: "black",
  },
  tabBarIcon: ({ color, size }) => {
    let iconName;
    if (route.name === "Home") {
      iconName = "home";
    } else if (route.name === "Settings") {
      iconName = "settings-sharp";
    }
    return (
      <View style={{ paddingTop: 10, paddingHorizontal: 12 }}>
        <Ionicons name={iconName} size={25} color={color} />
      </View>
    );
  },
});

export { tabIcon };
