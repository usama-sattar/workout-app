import { useState, useRef, useContext } from 'react'
import { UserContext } from '../../context/user'
import validateRegister from '../../utils/validate'

export function useRegister() {
  const {register}  = useContext(UserContext)
 
  const onRegister = async ({firstName,lastName,email,password, country, phone, date, units, weight,height,gender}
    ) => { 
    console.log("data",{firstName,lastName,email,password, country, phone, date, units, weight,height,gender})
    register({firstName,lastName,email,password,country,phone,date, units,weight,height, gender})
  }
  return {
    onRegister,
  }
}
