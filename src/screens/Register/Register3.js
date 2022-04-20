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
import {
  Image,
  Button,
  Input,
  Icon,
  LinearProgress,
  CheckBox,
} from "@rneui/themed";
const { height } = Dimensions.get("window");
import { colors } from "../../utils/colors";
import CountryPicker from "react-native-country-picker-modal";
import { useRegister } from "./useRegister";
import DateTimePicker from "@react-native-community/datetimepicker";
export default function Register3() {
  const [male, setMale] = useState("");
  const [female, setFemale] = useState("");
  const [nonBinary, setNonBinary] = useState("");
  const [none, setNone] = useState("");
  const [emptyMessage, setEmptyMessage] = useState("");
  const { setGender, height, gender, setHeight, weight,setWeight, onRegister } = useRegister();

  const genderMale = () => {
    setMale(true);
    setFemale(false);
    setNonBinary(false);
    setNone(false);
    setGender("male");
  };
  const genderFemale = () => {
    setMale(false);
    setFemale(true);
    setNonBinary(false);
    setNone(false);
    setGender("female");
  };
  const genderNonBinary = () => {
    setMale(false);
    setFemale(false);
    setNonBinary(true);
    setNone(false);
    setGender("nonbinary");
  };
  const genderNone = () => {
    setMale(false);
    setFemale(false);
    setNonBinary(false);
    setNone(true);
    setGender("none");
  };
  const signUp = () => {
    if (
      weight === 0 ||
      height === 0 ||
      gender === "" 
    ) {
      setEmptyMessage("Fill out all fields");
      setTimeout(() => {
        setEmptyMessage("");
      }, 2000);
      return;
    }
    if (!error) {
        onRegister()
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
                Step 3/3
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
            <View style={{ display: "flex", marginLeft: 20 }}>
              <View>
                <Input
                  placeholder="Weight in kg"
                  inputContainerStyle={styles.inputStyle}
                  autoCapitalize="none"
                  errorStyle={{ color: colors.error }}
                  keyboardType="numeric"
                  returnKeyType="next"
                  style={{ paddingLeft: 8 }}
                  leftIcon={
                    <Icon
                      onPress={() => setShowPassword(!showPassword)}
                      type="material-community"
                      color="gray"
                      name={'weight-kilogram'}
                      size={15}
                      style={{marginLeft:10}}
                    />
                  }
                />
              </View>
              <View>
                <Input
                  placeholder="Height in cm"
                  inputContainerStyle={[styles.inputStyle, { marginTop: 0 }]}
                  autoCapitalize="none"
                  errorStyle={{ color: colors.error }}
                  keyboardType="numeric"
                  returnKeyType="next"
                  style={{ paddingLeft: 8 }}
                  leftIcon={
                    <Icon
                      onPress={() => setShowPassword(!showPassword)}
                      type="material-community"
                      color="gray"
                      name={'human-male-height'}
                      size={15}
                      style={{marginLeft:10}}
                    />
                  }
                  
                />
              </View>
              <Text style={{ color: colors.white, fontSize: 15 }}>Gender</Text>
              <View style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
              <CheckBox
                title={"Male"}
                checkedIcon="dot-circle-o"
                uncheckedIcon={"circle-o"}
                checked={male}
                onPress={genderMale}
                containerStyle={{ backgroundColor: "transparent", padding: 0, width:'40%' }}
                textStyle={{ color: colors.white }}
                checkedColor={colors.error}
              />
              <CheckBox
                title={"Female"}
                checkedIcon="dot-circle-o"
                uncheckedIcon={"circle-o"}
                checked={female}
                onPress={genderFemale}
                containerStyle={{ backgroundColor: "transparent", padding: 0, width:'40%'  }}
                textStyle={{ color: colors.white }}
                checkedColor={colors.error}
              />
              <CheckBox
                title={"Non Binary"}
                checkedIcon="dot-circle-o"
                uncheckedIcon={"circle-o"}
                checked={nonBinary}
                onPress={genderNonBinary}
                containerStyle={{ backgroundColor: "transparent", padding: 0, width:'40%'  }}
                textStyle={{ color: colors.white }}
                checkedColor={colors.error}
              />
              <CheckBox
                title={"Prefer not to answer"}
                checkedIcon="dot-circle-o"
                uncheckedIcon={"circle-o"}
                checked={none}
                onPress={genderNone}
                containerStyle={{ backgroundColor: "transparent", padding: 0, width:'40%'  }}
                textStyle={{ color: colors.white }}
                checkedColor={colors.error}
              />
              </View>
            </View>
            <View
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Button
                title="Sign Up"
                // disabled={loading}
                onPress={signUp}
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
              ></Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
