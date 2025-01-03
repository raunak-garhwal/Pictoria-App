import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Select} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'


function Login() {
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const login = async (data) => {
        setError("")
        try {
            const response = await authService.login(data.email, data.password)
            dispatch(authLogin(response))
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div>Login</div>
  )
}

export default Login