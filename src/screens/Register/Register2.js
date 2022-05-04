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
import ModalSelector from "react-native-modal-selector";
const { height } = Dimensions.get("window");
import { colors } from "../../utils/colors";
import CountryPicker from "react-native-country-picker-modal";
import { useRegister } from "./useRegister";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import {validateFunc2} from "../../utils/validate";

export default function Register2({ navigation, route }) {
  const { firstName,lastName,email,password } = route.params
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState('PK')
  const [date, setDate] = useState(null)
  const [phone, setPhone] = useState('')
  const [units, setUnits] = useState('Standard');

  const [country, setCountry] = useState({
    callingCode: ['92'],
    cca2: 'PK',
    currency: ['PKR'],
    flag: 'flag-pk',
    name: 'Pakistan',
    region: 'Asia',
    subregion: 'Southern Asia'
  })
  const [error, setError] = useState();

  const isValid = async () => {
    const errors = validateFunc2({ phone });
    setError(errors);
    if (errors) return false;
    return true;
  };
  const onCountrySelect = country => {
    setCountryCode(country.cca2)
    setCountry(country)
  }
  const [showDate, setShowDate] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState("");
 
  const data = [
    { key: 0, section: true, label: "Units" },
    { key: 1, label: "Standard" },
    { key: 2, label: "Metric" },
    { key: 3, label: "Local" },
    { key: 4, label: "UTC/GMT" },
  ];
  const moveNext =async () => {
    if (
      country === "" ||
      phone === "" ||
      date === null ||
      units === ""
    ) {
      setEmptyMessage("Fill out all fields");
      setTimeout(() => {
        setEmptyMessage("");
      }, 2000);
      return;
    }
    if (!error) {
      const {name:countryName} = await country
      const d = await date.toString()
      navigation.navigate("Register3",{
        firstName,lastName,email,password, countryName, phone, d, units
      });
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
                  marginVertical: 5,
                }}
              >
                Step 2/3
              </Text>
              {emptyMessage !== "" && (
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.error,
                    textAlign: "center",
                    marginVertical: 5,
                  }}
                >
                  {emptyMessage}
                </Text>
              )}
            </View>
            <View style={{ alignSelf: "center" }}>
              <View
                style={{
                  marginLeft: 10,
                  marginBottom: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth:0.5,
                  borderColor:colors.white,
                  borderRadius:5,
                  width:120,
                  padding:5
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
                keyboardType="numeric"
                onBlur={isValid}
                defaultValue={`${phone}`}
                autoCapitalize="none"
                errorMessage={
                  error && error.phone ? error.phone.join(",") : null
                } 
               errorStyle={{ color: colors.error }}
                returnKeyType="next"
                style={{ paddingLeft: 8 }}
                leftIcon={
                  <Icon
                    onPress={() => setShowPassword(!showPassword)}
                    type="material-icon"
                    color="gray"
                    name={'phone'}
                    size={15}
                    style={{marginLeft:10}}
                  />
                }
              />
              <Button
                title={date ? date.toDateString() : "Date Of Birth"}
                icon={{
                  name: "date-range",
                  type: "material-icons",
                  size: 15,
                  color: colors.gray,
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10 }}
                titleStyle={{ color: colors.gray }}
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
                    backgroundColor:
                      Platform.OS === "android" ? colors.white : "transparent",
                    elevation: 8,
                    borderRadius: 5,
                  }}
                >
                  {Platform.OS === "android" ? (
                    <Picker
                      selectedValue={units}
                      onValueChange={(unit, item) => setUnits(unit)}
                      style={{
                        color: colors.gray,
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                      }}
                    >
                      <Picker.Item label="Standard" value="Standard" />
                      <Picker.Item label="Metric" value="Metric" />
                      <Picker.Item label="Local" value="Local" />
                      <Picker.Item label="UTC/GMT" value="UTC/GMT" />
                    </Picker>
                  ) : (
                    <ModalSelector
                      data={data}
                      initValue={units}
                      cancelButtonAccessibilityLabel={"Cancel Button"}
                      onChange={(option) => {
                        setUnits(option.label);
                      }}
                    ></ModalSelector>
                  )}
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
                    onPress={moveNext}
                    type="ant-design"
                    color={colors.primary}
                    name={"arrowright"}
                    size={25}
                  />
                }
                // disabled={loading}
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
