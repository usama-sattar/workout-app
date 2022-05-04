import React,{useContext} from 'react'
import { Text, View } from 'react-native'
import { UserContext } from '../../context/user'

export default function Home() {
  const {user} = useContext(UserContext)
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:40}}>
            {"Coming Soon"}
        </Text>
    </View>
  )
}
