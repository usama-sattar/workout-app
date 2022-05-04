import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { colors } from "../../utils/colors";
const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.grey,
  },
  containerInfo: {
    width: "100%",
    marginTop: 15,
    
    marginBottom:50
  },
  upperContainer: {
    height: height * 0.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grey,
  },
  lowerContainer: {
    padding: 5,
  },
  backgroundImage: {
    width: 120,
    height: 120,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  formSubContainer: {
    backgroundColor: colors.white,
    alignSelf: "center",
    width: "100%",
    borderRadius: 20,
    height: "100%",
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: 20,
    marginTop: 10,
    padding: 15,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  icon: {
    padding: 8,
    width: "20%",
    alignItems: "center",
  },
  details: {
    backgroundColor: "#ECECEC",
    padding: 10,
    width: "60%",
    borderRadius: 10,
  },

  phoneDetails: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECECEC",
    padding: 10,
    width: "60%",
    borderRadius: 10,
  },
  containerHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 20,
  },
  headingTitle: {
    width: "50%",
  },
  headingLink: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  headingButton: {
    justifyContent: "center",
    backgroundColor: colors.grey,
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
  },
  saveContainer: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 10,
    width: 100,
  },

  titleContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
export default styles;
