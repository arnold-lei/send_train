import { LOGIN } from './actionTypes'; 

export const login = (authData) => { 
  return {
    type: 'LOGIN', 
    authData: authData, 
  }
}
