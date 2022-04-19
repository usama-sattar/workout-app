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
import { Image, Button, Input, Icon } from "@rneui/themed";
const { height } = Dimensions.get("window");
import { colors } from "../../utils/colors";
import { useLogin } from "./useLogin";

export default function Login({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const { onLogin, isValid, error, setPassword, setEmail, email, password } =
    useLogin();
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
          height: height * 1.0,
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
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: colors.white,
                }}
              >
                Login with your email
              </Text>
            </View>
            <View style={{ flex: 0.4, alignSelf: "center" }}>
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
                containerStyle={{ marginTop: 5 }}
                onBlur={isValid}
                autoCapitalize="none"
                errorStyle={{ color: colors.error }}
                defaultValue={password}
                rightIcon={
                  <Icon
                    onPress={() => setShowPassword(!showPassword)}
                    type="font-awesome"
                    color="gray"
                    name={showPassword ? "eye" : "eye-slash"}
                    size={20}
                  />
                }
              />
            </View>
            <View
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                flex: 0.3,
              }}
            >
              <Button
                title="Sign in"
                // disabled={loading}
                onPress={onLogin}
                buttonStyle={{
                  backgroundColor: colors.error,
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 5,
                  width: 250,
                  height: 50,
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
              >
                {/* {loading ? (
                  <Spinner spinnerColor={colors.buttonText} />
                ) : (
                  <TextDefault textColor={colors.buttonText} H3 bold>
                    Login
                  </TextDefault>
                )} */}
              </Button>
              <Text style={{ marginTop: 10, color: colors.grey }}>
                Does't have account?
                <Text
                  style={{ color: colors.error }}
                  onPress={() => navigation.navigate("Register1")}
                >
                  {" "}
                  Sign up
                  {" "}
                </Text>
                here
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
