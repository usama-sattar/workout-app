import { StyleSheet } from 'react-native'
import {colors} from '../../utils/colors'

const styles = StyleSheet.create({
  topContainer:{
    backgroundColor: colors.lightgrey,
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lowerContainer: {
    backgroundColor: colors.primary,
    flex: 0.7,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  text:{
      color:'white'
  },
  descText:{
      color:colors.lightgrey,
      marginTop:10
  }
})
export default styles
