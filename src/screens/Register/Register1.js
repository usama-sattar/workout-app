import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
} from "react-native";
import styles from "./styles";
import { Image, Button, Input, Icon, LinearProgress } from "@rneui/themed";
const { height } = Dimensions.get("window");
import { colors } from "../../utils/colors";
import { useRegister } from "./useRegister";

export default function Register({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    onRegister,
    isValid,
    setPassword,
    setEmail,
    setFirstName,
    setLastName,
    firstName,
    lastName,
    email,
    password,
    phone,
    error,
    setError,
  } = useRegister();
  const [emptyMessage, setEmptyMessage] = useState("");
  const moveNext = () => {
    // if (
    //   firstName === "" ||
    //   lastName === "" ||
    //   email === "" ||
    //   password === ""
    // ) {
    //   setEmptyMessage("Fill out all fields");
    //   setTimeout(() => {
    //     setEmptyMessage("");
    //   }, 2000);
    //   return;
    // }
    if (!error) {
      navigation.navigate("Register2");
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
    >
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          height: height * 1,
        }}
      >
        <View style={{ flex: 1, backgroundColor: colors.white }}>
          <View style={styles.topContainer}>
            <View>
              <Image
                source={require("../../assets/logo.png")}
                PlaceholderContent={<ActivityIndicator />}
                style={{ width: 150, height: 140 }}
              />
            </View>
          </View>
          <View style={styles.lowerContainer}>
            <View style={styles.headingText}>
              <Text style={styles.signup}>Sign Up</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.white,
                  textAlign: "center",
                  marginVertical: 10,
                }}
              >
                Step 1/3
              </Text>
              {emptyMessage !== "" && (
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.error,
                    textAlign: "center",
                    marginVertical: 10,
                  }}
                >
                  {emptyMessage}
                </Text>
              )}
            </View>
            <View style={{ alignSelf: "center" }}>
              <Input
                placeholder="First Name"
                onChangeText={(text) => setFirstName(text)}
                inputContainerStyle={styles.inputStyle}
                onBlur={isValid}
                autoCapitalize="none"
                errorMessage={
                  error && error.firstName ? error.firstName.join(",") : null
                }
                errorStyle={{ color: colors.error }}
                defaultValue={firstName}
                returnKeyType="next"
                style={{ paddingLeft: 8 }}
                leftIcon={
                  <Icon
                    onPress={() => setShowPassword(!showPassword)}
                    type="font-awesome"
                    color="gray"
                    name={'user'}
                    size={15}
                    style={{marginLeft:10}}
                  />
                }
              />
              <Input
                placeholder="Last Name"
                onChangeText={(text) => setLastName(text)}
                inputContainerStyle={styles.inputStyle}
                onBlur={isValid}
                autoCapitalize="none"
                errorStyle={{ color: colors.error }}
                errorMessage={
                  error && error.lastName ? error.lastName.join(",") : null
                }
                defaultValue={lastName}
                returnKeyType="next"
                style={{ paddingLeft: 8 }}
                leftIcon={
                  <Icon
                    onPress={() => setShowPassword(!showPassword)}
                    type="font-awesome"
                    color="gray"
                    name={'user'}
                    size={15}
                    style={{marginLeft:10}}
                  />
                }
              />
              <Input
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                inputContainerStyle={styles.inputStyle}
                errorMessage={
                  error && error.email ? error.email.join(",") : null
                }
                onBlur={isValid}
                autoCapitalize="none"
                errorStyle={{ color: colors.error }}
                keyboardType="email-address"
                defaultValue={email}
                returnKeyType="next"
                style={{ paddingLeft: 8 }}
                leftIcon={
                  <Icon
                    onPress={() => setShowPassword(!showPassword)}
                    type="material-icon"
                    color="gray"
                    name={'email'}
                    size={15}
                    style={{marginLeft:10}}
                  />
                }
              />

              <Input
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                inputContainerStyle={styles.inputStyle}
                returnKeyType="go"
                style={{ paddingLeft: 8 }}
                secureTextEntry={!showPassword}
                rightIconContainerStyle={{ marginRight: 10 }}
                errorMessage={
                  error && error.password ? error.password.join(",") : null
                }
                onBlur={isValid}
                autoCapitalize="none"
                errorStyle={{ color: colors.error }}
                defaultValue={password}
                leftIcon={
                  <Icon
                    onPress={() => setShowPassword(!showPassword)}
                    type="entypo"
                    color="gray"
                    name={'lock'}
                    size={15}
                    style={{marginLeft:10}}
                  />
                }
                rightIcon={
                  <Icon
                    onPress={() => setShowPassword(!showPassword)}
                    type="font-awesome"
                    color="gray"
                    name={showPassword ? "eye" : "eye-slash"}
                    size={15}
                  />
                }
              />
            </View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <Text
                style={{ marginTop: 5, color: colors.grey, marginLeft: 10 }}
              >
                Already have an account?
                <Text
                  style={{ color: colors.error }}
                  onPress={() => navigation.navigate("Login")}
                >
                  {" "}
                  Login{" "}
                </Text>
                here
              </Text>
              <Button
                title={
                  <Icon
                    onPress={moveNext}
                    type="ant-design"
                    color={colors.primary}
                    name={"arrowright"}
                    size={25}
                  />
                }
                onPress={moveNext}
                buttonStyle={{
                  backgroundColor: colors.error,
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 5,
                  width: 60,
                  height: 60,
                }}
                style={{
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 3,
                }}
                titleStyle={{ color: colors.primary }}
              ></Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
