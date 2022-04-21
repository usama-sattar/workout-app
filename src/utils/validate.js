import { validate } from 'validate.js'

const constraints = {
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
  phone:{
    format: {
      pattern: "[0-9]+"
    }
  },
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
export default function validateFunc(form) {
  return validate(form, constraints)
}
