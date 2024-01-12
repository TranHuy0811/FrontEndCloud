import React, { useRef, useState } from 'react'
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { updateProfile as updateProfileFirebase, getAuth } from "firebase/auth"; /* coi lại sau */
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase.js'

import images from '../constants/images.js';
import './Signup.css';

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
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
        await signup(emailRef.current.value, passwordRef.current.value).then(() => {
            let firebaseUser = getAuth().currentUser;
            return updateProfileFirebase(firebaseUser, { displayName: usernameRef.current.value }) /* coi lại sau */
        })
        const docData = {
            Email: emailRef.current.value,
            Fullname: fullnameRef.current.value,
        }
        await setDoc(doc(db, `users`, getAuth().currentUser.uid), docData);
        navigate("/user")
        } catch (error) {
        setError("Failed to create an account")
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
                <input className="input-form" ref={usernameRef} type="text" placeholder="Name" required />
                
                <div for="phoneNumber" className="write-in">Số Điện Thoại</div>
                <input className="input-form" type="text" placeholder='0123456789' name="phoneNumber" pattern="[0-9]{10}"  required />
                
                <div className="write-in">Email</div>
                <input className="input-form" type="text" ref={emailRef} placeholder="Email" required/>
                
                <div className="write-in">Mật Khẩu</div>
                <input className="input-form" type="password" ref={passwordRef} placeholder="Password" required />
                
                <div className="write-in">Nhập lại mật Khẩu</div>
                <input className="input-form" type="password" ref={passwordConfirmRef} placeholder="Password" required />
                
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