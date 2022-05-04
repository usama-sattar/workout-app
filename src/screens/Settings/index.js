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

export default function Settings() {
  const refName = useRef();
  const { user, logout } = useContext(UserContext);

  return (
    <>
      <View style={styles.formContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={styles.flex}
        >
          <ScrollView style={[styles.flex]} showsVerticalScrollIndicator={false}>
            <View style={styles.upperContainer}>
              <ImageBackground
                source={require("../../assets/man.png")}
                style={styles.backgroundImage}
                resizeMode="contain"
              ></ImageBackground>
            </View>

            <View style={styles.lowerContainer}>
              <View style={styles.formSubContainer}>
                <View style={styles.containerHeading}>
                  <View style={styles.headingTitle}>
                    <Text style={{color: colors.white}}>
                      Profile info
                    </Text>
                  </View>
                  <View style={styles.headingLink}>
                    <TouchableOpacity
                      activeOpacity={0.3}
                      style={styles.headingButton}
                    >
                      <Text>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.3}
                      style={[styles.headingButton, {marginLeft:10}]}
                      onPress={logout}
                    >
                      <Text>Logout</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.containerInfo}>
                  <View style={styles.flexRow}>
                    <View style={styles.icon}>
                      <FontAwesome name="user" size={15} color="black" />
                    </View>
                    <View style={styles.details}>
                      <Text>
                        {user?.firstName} {user?.lastName}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.flexRow}>
                    <View style={styles.icon}>
                      <Zocial name="email" size={15} color="black" />
                    </View>
                    <View style={styles.details}>
                      <Text>{user?.email}</Text>
                    </View>
                  </View>

                  <View style={styles.flexRow}>
                    <View style={styles.icon}>
                      <Entypo name="phone" size={15} color="black" />
                    </View>
                    <View style={styles.details}>
                      <Text>{user?.phoneNumber}</Text>
                    </View>
                  </View>
                  <View style={styles.flexRow}>
                    <View style={styles.icon}>
                      <FontAwesome5
                        name="weight-hanging"
                        size={15}
                        color="black"
                      />
                    </View>
                    <View style={styles.details}>
                      <Text>{user?.weight}</Text>
                    </View>
                  </View>
                  <View style={styles.flexRow}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="human-male-height"
                        size={15}
                        color="black"
                      />
                    </View>
                    <View style={styles.details}>
                      <Text>{user?.height}</Text>
                    </View>
                  </View>
                  <View style={styles.flexRow}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="gender-male-female"
                        size={15}
                        color="black"
                      />
                    </View>
                    <View style={styles.details}>
                      <Text>{user?.gender}</Text>
                    </View>
                  </View>
                  <View style={styles.flexRow}>
                  <View style={styles.icon}>
                    <FontAwesome
                      name="sort-amount-asc"
                      size={15}
                      color="black"
                    />
                  </View>
                  <View style={styles.details}>
                    <Text>{user?.units}</Text>
                  </View>
                </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}
