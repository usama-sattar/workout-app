import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollContainer: {
    justifyContent: "center",
  },
  topContainer: {
    backgroundColor: colors.white,
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  signup: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
    marginTop: 25,
  },
  lowerContainer: {
    backgroundColor: colors.primary,
    flex: 0.8,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  bgColor: {
    backgroundColor: colors.white,
  },
  headingText: {
    marginLeft: 10,
    marginBottom: 20,
  },
  inputStyle: {
    borderBottomWidth: 0,
    height: 50,
    borderRadius: 5,
    width: "90%",
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
export default styles;
