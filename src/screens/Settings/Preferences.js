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
  import { UserContext } from "../../context/user";
  import { colors } from "../../utils/colors";
  import { Button, Input, Icon } from "@rneui/themed";
  
  export default function Preferences() {
    const { user, logout } = useContext(UserContext);
    const refPhone = useRef();

    return (
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
                      ref={refPhone}
                      defaultValue={user?.firstName}
                      autoFocus={false}
                      labelFontSize={12}
                      fontSize={15}
                      errorColor={colors.error}
                      style={{ paddingLeft: 8 }}
                      inputContainerStyle={styles.Pinput}
                      leftIcon={
                        <Icon
                          type="material-icon"
                          color="gray"
                          name={"person"}
                          size={20}
                          style={{ marginLeft: 10 }}
                        />
                      }
                    />
                     <Input
                      ref={refPhone}
                      defaultValue={user?.weight + " kg "}
                      autoFocus={false}
                      labelFontSize={12}
                      fontSize={15}
                      errorColor={colors.error}
                      style={{ paddingLeft: 8 }}
                      inputContainerStyle={styles.Pinput}
                      leftIcon={
                        <Icon
                          type="font-awesome-5"
                          color="gray"
                          name="weight-hanging"
                          size={20}
                          style={{ marginLeft: 10 }}
                        />
                      }
                    /> 
                    <Input
                    ref={refPhone}
                    defaultValue={user?.height + " cm "}
                    autoFocus={false}
                    labelFontSize={12}
                    fontSize={15}
                    errorColor={colors.error}
                    style={{ paddingLeft: 8 }}
                    inputContainerStyle={styles.Pinput}
                    leftIcon={
                      <Icon
                        type="material-community"
                        color="gray"
                        name="human-male-height"
                        size={20}
                        style={{ marginLeft: 10 }}
                      />
                    }
                  />
                     <Input
                    ref={refPhone}
                    defaultValue={user?.gender}
                    autoFocus={false}
                    labelFontSize={12}
                    fontSize={15}
                    errorColor={colors.error}
                    style={{ paddingLeft: 8 }}
                    inputContainerStyle={styles.Pinput}
                    leftIcon={
                      <Icon
                        type="material-community"
                        color="gray"
                        name="gender-male-female"
                        size={20}
                        style={{ marginLeft: 10 }}
                      />
                    }
                  />
                     <Input
                    ref={refPhone}
                    defaultValue={user?.units}
                    autoFocus={false}
                    labelFontSize={12}
                    fontSize={15}
                    errorColor={colors.error}
                    style={{ paddingLeft: 8 }}
                    inputContainerStyle={styles.Pinput}
                    leftIcon={
                      <Icon
                        type="font-awesome"
                        color="gray"
                        name="sort-amount-asc"
                        
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
    );
  }
  