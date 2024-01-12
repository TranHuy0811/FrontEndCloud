import React from 'react'
import { images } from '../../../../constants'
import './contact.css'
import './contact_reponsive.css'
import { Link } from "react-router-dom"

export const Contact = () => {
  return (
    <>
    <h1 className="in-touch" alt='a'> Đăng ký </h1>
    <div className="form">
        <form className="write-form">
            <div className="write-in">Tên đăng nhập</div>
            <input className="input-form" type="text" placeholder="Name" required />
            <div for="phoneNumber" className="write-in">Số Điện Thoại</div>
            <input className="input-form" type="text" placeholder='0123456789' name="phoneNumber" pattern="[0-9]{10}"  required />
            <div className="write-in">Email</div>
            <input className="input-form" type="text" placeholder="Email" required/>
            <div className="write-in">Mật Khẩu</div>
            <input className="input-form" type="password" placeholder="Password" required />
            <div className="write-in">Nhập lại mật Khẩu</div>
            <input className="input-form" type="password" placeholder="Password" required />
            
            <button className="form-button" type='submit'>
                <img className='button-img' src={images.form} alt='a'/>
            </button>

            <div className="login">
                Đã có tài khoản? <Link className='login-word' to="/login"> Đăng nhập </Link>
            </div>
        </form>
        <img className="uber" src={images.uber} alt='a'/>
    </div>
    </>
  )
}
