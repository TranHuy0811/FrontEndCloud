import { useAuth } from "../context/AuthContext"
import React, { useRef, useState, useEffect } from "react"
import { Link, useNavigate, Navigate } from "react-router-dom"
import { images } from "../constants"
import "./Login.css"
import { axiosInstance } from '../axios.jsx';
import { Form, Button, Card, Alert } from "react-bootstrap"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { currentUser } = useAuth();

  /* kt có login chưa */
  useEffect(() => {
    if (currentUser) {
      navigate("/user")
    }
  }, []); /* chắc bỏ [] dc, ko sợ lặp lại */

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      const payload = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      const response = await axiosInstance.post("/auth", payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      alert("Email" + emailRef.current.value + "  login successfully!");
      
    } catch(error) {
      setError("Failed to Login")
      console.log(error.response.data)
    }

    setLoading(false)
  }

  return (
    <>
        <h1 className="in-touch" alt='a'> Đăng nhập </h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="form" onSubmit={handleSubmit}>
            <form className="write-form">
                <div className="write-in">Email</div>
                <input className="input-form" type="text" ref={emailRef} placeholder="Email" required/>
                <div className="write-in">Mật Khẩu</div>
                <input className="input-form" type="password" ref={passwordRef} placeholder="Password" required />
                
                <div className="extra">
                    <div className="forgot-pass"> 
                        <Link to="/forgot-password">
                            Quên mật khẩu 
                        </Link>
                    </div>
                    <div className="signup"> 
                        <Link to="/signup"> 
                            Tạo tài khoản mới 
                        </Link>
                    </div>
                </div> 
                
                <button disabled={loading} className="form-button" type='submit'>
                    <img className="button-img" src={images.login} alt='a'/>
                </button>
            </form>
            <img className="uber" src={images.uber} alt='a'/>
            
        </div>
    </>
  )
}
