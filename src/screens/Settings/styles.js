import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { colors } from "../../utils/colors";
const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor:colors.white
  },
  heading:{
    width:"100%",
    height:30,
    justifyContent:'center',
    backgroundColor:colors.lightgrey
  },
  avatar:{
    backgroundColor:colors.primary,
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
    marginLeft:10
  },
  row:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  card:{
    width:"100%",
    height:60,
    justifyContent:'center',
    borderBottomWidth:0.2,
    borderColor: colors.grey
  },
  cardHead:{
    width:"100%",
    height:80,
    justifyContent:'center'
  },
  text:{
    fontWeight:'600',
    color: colors.gray,
    paddingLeft:20
  },
  lowHead:{
    marginLeft:20,
    color:'#000',
    fontWeight:"bold"
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
    height: height * 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  lowerContainer: {
    padding: 5,
    
  },
  backgroundImage: {
    width: 80,
    height: 80,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  formSubContainer: {
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
    padding: 10,
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
  input:{
    padding:10,
    borderBottomWidth: 0.2,
    borderWidth:0.2,
    borderColor:colors.black,
    borderRadius:5,
    
  },
  Pinput:{
    padding:2,
    borderBottomWidth: 0.2,
    borderWidth:0.2,
    borderColor:colors.black,
    borderRadius:5,
    
  },
  saveBtn:{
    backgroundColor:colors.primary,
    width:60,
    height:60
  }
  
});
export default styles;