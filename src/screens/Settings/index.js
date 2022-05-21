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
import { Avatar } from "@rneui/base";

export default function Settings({navigation}) {
  const { user, logout } = useContext(UserContext);

  return (
    <>
      <View style={styles.flex}>
        <View style={styles.heading}>
          <Text style={styles.text}>Profile</Text>
        </View>
        <View style={styles.cardHead}>
          <View style={styles.row}>
            <View style={styles.avatar}>
              <Text style={{ color: "white", fontSize:20 }}>{user?.firstName[0]}</Text>
            </View>
            <Text style={[styles.lowHead, { marginLeft: 10, fontSize:16 }]}>
              {user?.firstName + " " + user?.lastName}
            </Text>
          </View>
        </View>
        <View style={styles.heading}>
          <Text style={styles.text}>Account Details</Text>
        </View>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Email')}>
          <Text style={styles.lowHead}>Change Email Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Phone')}>
          <Text style={styles.lowHead}>Change Phone Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Password')}>
          <Text style={styles.lowHead}>Change Password</Text>
        </TouchableOpacity>
        <View style={styles.heading}>
          <Text style={styles.text}>Account Management</Text>
        </View>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Preferences')}>
          <Text style={styles.lowHead}>Preference</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={logout}>
          <Text style={styles.lowHead}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
