import React from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { colors } from "../../utils/colors";
import styles from "./styles";

export default function Details({ route }) {
  const { item } = route.params;
  return (
    <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.topContainer}>
        <Image
          source={require("../../assets/push-up.png")}
          PlaceholderContent={<ActivityIndicator />}
          style={{ width: 150, height: 140 }}
        />
      </View>
      <View style={styles.lowerContainer}>
        <View style={{padding:20}}>
        <Text style={[styles.text, {textAlign:'center', fontSize:20}]}>
            {item.name}
        </Text>
        <Text  style={[styles.text, {textAlign:'center', fontSize:12}]}>
            {item.mainMuscles}
        </Text>
        <Text  style={[styles.text, {textAlign:'center', fontSize:12}]}>
            {item.secondaryMuscles}
        </Text>
        <Text  style={styles.descText}>
            {item.description}
        </Text>
        </View>
      </View>
    </ScrollView>
  );
}
