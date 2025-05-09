import React, { useRef, useState } from 'react'
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { updateProfile as updateProfileFirebase, getAuth } from "firebase/auth"; /* coi lại sau */
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase.js'

import images from '../constants/images.js';
import './Signup.css';
import { axiosInstance } from '../axios.jsx';

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const phoneNumberRef = useRef()
    const usernameRef = useRef()
    const fullnameRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            
            console.log(emailRef.current.value, passwordRef.current.value, usernameRef.current.value, fullnameRef.current.value, phoneNumberRef.current.value)

            const payload = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
                username: usernameRef.current.value,
                fullName: fullnameRef.current.value,
                phoneNumber: phoneNumberRef.current.value,
            }
            
            const response = await axiosInstance.post("/user", payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            alert("Email" + emailRef.current.value + " created successfully!");

        } catch (error) {
            setError("Failed to create an account")
            console.log(error.response)
        }

        setLoading(false)
    }

    return (
    <>
    <div className='signup-body'>
        <h1 className="in-touch" alt='a'> Đăng ký </h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="form" onSubmit={handleSubmit}>
            <form className="write-form">
                <div className="write-in">Tên đăng nhập</div>
                <input className="input-form" id="username" ref={usernameRef} type="username" placeholder="Name" required />

                <div className="write-in">Tên đầy đủ</div>
                <input className="input-form" id="fullname" ref={fullnameRef} type="fullname" placeholder="Name" required />
                
                <div for="phoneNumber" className="write-in">Số Điện Thoại</div>
                <input className="input-form" type="phone-number" ref={phoneNumberRef} name="phoneNumber" pattern="[0-9]{10}"  required />
                
                <div className="write-in">Email</div>
                <input className="input-form" id="email" type="email" ref={emailRef} placeholder="Email" required/>
                
                <div className="write-in">Mật Khẩu</div>
                <input className="input-form" id="password" type="password" ref={passwordRef} placeholder="Password" required />
                
                <div className="write-in">Nhập lại mật Khẩu</div>
                <input className="input-form" id="password-confirm" type="password" ref={passwordConfirmRef} placeholder="Password" required />
                
                <button disabled={loading} className="form-button" type='submit'>
                    <img className='button-img' src={images.form} alt='a'/>
                </button>

                <div className="login">
                    Đã có tài khoản? <Link className='login-word' to="/login"> Đăng nhập </Link>
                </div>
            </form>
            <img className="uber" src={images.uber} alt='a'/>
        </div>
    </div>
    </>
    )
}