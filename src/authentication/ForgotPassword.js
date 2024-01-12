import React, { useRef, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"
import { Alert } from "react-bootstrap"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
        <h1 className="in-touch" alt='a'> Reset mật khẩu </h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="form" onSubmit={handleSubmit}>
            <form className="write-form">
                <div className="write-in">Email</div>
                <input className="input-form" type="text" ref={emailRef} placeholder="Email" required/>
            </form>
            <div className="login"> 
                <Link to="/login">
                    Đăng nhập 
                </Link>
            </div>
            <div className="signup"> 
                <Link to="/signup"> 
                    Tạo tài khoản mới 
                </Link>
            </div>
        </div>
    </>
  )
}
