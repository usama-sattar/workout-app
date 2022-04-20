import { useState, useRef, useContext } from 'react'
import validateRegister from '../../utils/validate'

export function useRegister() {
  const [error, setError] = useState()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [countryCode, setCountryCode] = useState('PK')
  const [date, setDate] = useState(null)
  const [gender, setGender] = useState('')
  const [units, setUnits] = useState('Standard');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [country, setCountry] = useState({
    callingCode: ['92'],
    cca2: 'PK',
    currency: ['PKR'],
    flag: 'flag-pk',
    name: 'Pakistan',
    region: 'Asia',
    subregion: 'Southern Asia'
  })

  const onCountrySelect = country => {
    setCountryCode(country.cca2)
    setCountry(country)
  }
  
  const isValid = async () => {
    const errors = validateRegister({firstName,lastName,email, password })
    setError(errors)
    if (errors) return false
    return true
  }
  const onRegister = async () => { 
  }
  return {
    onRegister,
    isValid,
    setPassword,
    setEmail,
    setFirstName, 
    setLastName,
    setPhone,
    onCountrySelect,
    date,
    setError,
    height,
    weight,
    setHeight,
    setWeight,
    setDate,
    gender,
    setGender,
    country,
    countryCode,
    firstName,
    lastName,
    email,
    password,
    phone,
    error,
    units,
    setUnits
  }
}
