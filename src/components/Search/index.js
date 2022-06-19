import React from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import styles from "./styles";

function Search(props) {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <View style={styles.leftContainer}>
            <View style={styles.searchContainer}>
              <Ionicons name="ios-search" color={"red"} size={20} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.bodyStyleOne}
                placeholder="Exercise Name"
                placeholderTextColor={"gray"}
                onChangeText={(text) => props.setSearch(text)}
                value={props.search}
              />
            </View>
          </View>
          <View style={styles.cancelContainer}>
            {props.search ? (
              <TouchableOpacity
                onPress={() => {
                  props.setSearch("");
                }}
              >
                <AntDesign name="closecircleo" size={20} color={"yellow"} />
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>
      <Text
        style={{
          width: "90%",
          alignSelf: "center",
          marginVertical: 10,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Exercises
      </Text>
    </>
  );
}

export default Search;
