import { useState, useRef, useContext } from 'react'
import { UserContext } from '../../context/user'

export function useRegister() {
  const {register}  = useContext(UserContext)
 
  const onRegister = async ({firstName,lastName,email,password, countryName:country, phone:phoneNumber, d:birthDate, units, weight, userHeight:height ,gender}
    ) => { 
    register({"lvl": 2, firstName,lastName,email,password,country,phoneNumber, birthDate, units,weight,height, gender})
  }
  return {
    onRegister,
  }
}
