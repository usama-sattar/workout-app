import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"
const styles = StyleSheet.create({
    bodyStyleOne: {
      fontSize: 15,
      color: 'black'
    },
    mainContainer: {
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: colors.white,
      borderWidth:1,
      borderColor:colors.primary,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.2,
      shadowRadius: 1,
      borderRadius:20,
      paddingLeft:10,
      paddingRight:10,
      elevation:6
      
    },
    subContainer: {
      width: '90%',
      height: '80%',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    leftContainer: {
      flexDirection: 'row',
      width: '90%'
    },
    searchContainer: {
      width: '10%',
      height: '80%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:5
    },
    inputContainer: {
      width: '100%',
      justifyContent: 'center',
      marginLeft:5,
      marginRight:5
    },
    cancelContainer: {
      width: '10%',
      height: '80%',
      justifyContent: 'center',
      alignItems: 'center'
    },
  })
export default styles