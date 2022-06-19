import { StyleSheet } from 'react-native'
import {colors} from '../../utils/colors'

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  workoutContainer:{
      backgroundColor:colors.lightgrey, 
      width:'90%',
      alignSelf:'center',
      borderRadius:5,
      height:60,
      marginTop:10,
      justifyContent:'center',
      alignContent:'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.2,
      elevation:6
  },


})
export default styles
