import React from 'react'
import {useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

export default function LogoutBtn() {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
        //logout is a promise in itself so when we use it we get a promise so to handle the promise we have to use .then and .catch 
        .then(() => {
            dispatch(logout())
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
  return (
    <button 
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}
