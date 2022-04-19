import { StyleSheet } from 'react-native'
import {colors} from '../../utils/colors'

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  scrollContainer: {
    justifyContent: 'center'
  },
  topContainer: {
    backgroundColor: colors.white,
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bgColor: {
    backgroundColor: colors.white
  },
  lowerContainer: {
    backgroundColor: colors.primary,
    flex: 0.7,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'space-around'
  },
  headingText: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle: {
    borderBottomWidth: 0,
    borderRadius: 8,
    height: 50,
    width: '90%',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  }
})
export default styles
