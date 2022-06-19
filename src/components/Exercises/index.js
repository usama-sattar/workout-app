import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../utils/colors";
import styles from "./styles";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Exercises({ item, navigation }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate("Exercise-Detail", {
          item,
        });
      }}
    >
      <View style={styles.workoutContainer}>
        <View
          style={{
            padding: 10,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "90%",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: colors.black, fontWeight: "100" }}>
            {item.name}
          </Text>
          <AntDesign name="arrowright" size={20} color={colors.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
