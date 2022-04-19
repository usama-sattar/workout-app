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
import { Picker } from "@react-native-picker/picker";
export default function Register2({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    onRegister,
    isValid,
    phone,
    setPhone,
    date,
    setDate,
    error,
    country,
    countryCode,
    onCountrySelect,
    units,
    setUnits,
  } = useRegister();

  const [showDate, setShowDate] = useState(false);
  
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
              <Text style={styles.signup}>Sign Up</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.white,
                  textAlign: "center",
                  marginVertical: 10,
                }}
              >
                Step 2/3
              </Text>
              {/* {emptyMessage !== "" && (
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
              )} */}
            </View>
            <View style={{ alignSelf: "center" }}>
              <View
                style={{
                  marginLeft: 10,
                  marginBottom: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <CountryPicker
                  countryCode={countryCode}
                  onSelect={(country) => onCountrySelect(country)}
                  withAlphaFilter
                  withFilter
                />
                <Text style={{ color: colors.white }}>{country?.name}</Text>
              </View>
              <Input
                placeholder="Phone Number"
                inputContainerStyle={styles.inputStyle}
                onChangeText={(text) => setPhone(text)}
                defaultValue={`${phone}`}
                autoCapitalize="none"
                errorStyle={{ color: colors.error }}
                returnKeyType="next"
                style={{ paddingLeft: 8 }}
              />
              <Button
                title={date ? date.toDateString() : "Date Of Birth"}
                icon={{
                  name: "date-range",
                  type: "material-icons",
                  size: 15,
                  color: colors.error,
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10 }}
                titleStyle={{ fontWeight: "700", color: colors.error }}
                buttonStyle={{
                  backgroundColor: colors.white,
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 5,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 10,
                }}
                onPress={() => {
                  setDate(new Date());
                  setShowDate(true);
                }}
              />
              {date && showDate && (
                <DateTimePicker
                  testID="datePicker"
                  value={date}
                  mode={"date"}
                  onChange={(event, selectedDate) => {
                    setShowDate(false);
                    setDate(selectedDate);
                  }}
                />
              )}
              <View
                style={{
                  marginLeft: 10,
                  marginVertical: 20,
                }}
              >
                <Text style={{ color: colors.white }}>Prefered Units</Text>
                <View
                  style={{
                    width: 140,
                    height: 50,
                    marginVertical: 10,
                    backgroundColor: "white",
                    elevation: 8,
                    borderRadius: 5,
                  }}
                >
                  <Picker
                    selectedValue={units}
                    onValueChange={(unit, item) => setUnits(unit)}
                    style={{
                      color: colors.black,
                      width: "100%",
                      height: "100%",
                      textAlign:'center'
                    }}
                  >
                    <Picker.Item label="Standard" value="Standard" />
                    <Picker.Item label="Metric" value="Metric" />
                    <Picker.Item label="Local" value="Local" />
                    <Picker.Item label="UTC/GMT" value="UTC/GMT" />
                  </Picker>
                </View>
              </View>
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
                    onPress={() => setShowPassword(!showPassword)}
                    type="ant-design"
                    color={colors.primary}
                    name={"arrowright"}
                    size={25}
                  />
                }
                // disabled={loading}
                onPress={() => navigation.navigate("Register3")}
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
              >
            
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
