import React, {
  useState,
  useRef,
  useContext,
  useLayoutEffect,
  useEffect,
} from "react";
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StatusBar,
  Image,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import {
  Feather,
  Entypo,
  FontAwesome,
  Zocial,
  FontAwesome5,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { UserContext } from "../../context/user";
import { colors } from "../../utils/colors";
import { Button, Input, Icon } from "@rneui/themed";

export default function Email() {
  const { user, logout } = useContext(UserContext);
  const refEmail = useRef();

  return (
    <>
      <View style={styles.formContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={styles.flex}
        >
          <ScrollView
            style={[styles.flex]}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.upperContainer}>
              <ImageBackground
                source={require("../../assets/man.png")}
                style={styles.backgroundImage}
                resizeMode="contain"
              ></ImageBackground>
            </View>

            <View style={styles.lowerContainer}>
              <View style={styles.formSubContainer}>
                <View style={styles.containerInfo}>
                  <Input
                    ref={refEmail}
                    defaultValue={user?.email}
                    autoFocus={false}
                    labelFontSize={12}
                    fontSize={15}
                    errorColor={colors.error}
                    style={{ paddingLeft: 8 }}
                    inputContainerStyle={styles.input}
                    leftIcon={
                      <Icon
                        type="material-icon"
                        color="gray"
                        name={"email"}
                        size={20}
                        style={{ marginLeft: 10 }}
                      />
                    }
                  />
                  <Button
                    style={styles.saveBtn}
                    title="Save"
                    containerStyle={{ width: 80, alignSelf: "center" }}
                    buttonStyle={{ backgroundColor: colors.primary }}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}
