import { validate } from 'validate.js'

const constraints1 = {
  firstName:{
    presence:true
  },
  lastName: {
    presence: true,
    length: {
      minimum: 3,
      maximum: 10
    }
  },
  email: {
    email:true
  },
  password: {
    presence: true,
    length: {
      minimum: 3,
      maximum: 20
    }
  },
}

const constraints2 = {
  phone:{
    format: {
      pattern: "[0-9]+"
    }
  },
}

const constraints3 = {
  weight:{
    format: {
      pattern: "[0-9]+"
    }
  },
  height:{
    format: {
      pattern: "[0-9]+"
    }
  },
  
}
export default function validateFunc1(form) {
  return validate(form, constraints1)
}
export function validateFunc2(form) {
  return validate(form, constraints2)
}
export function validateFunc3(form) {
  return validate(form, constraints3)
}