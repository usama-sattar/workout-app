import { useState, useRef, useContext } from 'react'
import { UserContext } from '../../context/user'
import validateLogin from '../../utils/validate'


export function useLogin() {
  const {login, loginError}  = useContext(UserContext)
  const [error, setError] = useState()
  const [email, setEmail] = useState('junaidjavaid971@gmail.com')
  const [password, setPassword] = useState('Junaid@12')

  const isValid = async () => {
    const errors = validateLogin({ email, password })
    setError(errors)
    if (errors) return false
    return true
  }
  const onLogin = async () => { 
    login({email,password}) 
  }
  return {
    onLogin,
    isValid,
    setPassword,
    setEmail,
    email,
    password,
    error,
    loginError
  }
}
