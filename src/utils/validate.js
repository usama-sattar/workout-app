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
 
}

export default function validateFunc(form) {
  return validate(form, constraints)
}
