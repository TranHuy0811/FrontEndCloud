import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";
import "./navbar_reponsive.css"
import images from '../constants/images';
import { Cart } from './Cart/cart';

const navLinkStyles = ({ isActive }) => {
	return {
		fontWeight: isActive ? 'bold' : 'normal',
        color: 'black',
		textDecoration: isActive ? 'none' : 'none',

	}
}

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleCart, setToggleCart] = React.useState(false);

  return (
<>
    <div className="header">
        <div className='logo'>
            <img src={images.logo} alt='Logo'/>
        </div>
        <div className="menu-bar">
            <div><NavLink style={navLinkStyles} to='/'>Trang chủ</NavLink></div>
            <div><NavLink style={navLinkStyles} to='/about'>Về công ty</NavLink></div>
            <div><NavLink style={navLinkStyles} to='/product'>Sản phẩm</NavLink></div>
            <div><NavLink style={navLinkStyles} to='/blog'>Blog</NavLink></div>
            <div><NavLink style={navLinkStyles} to='/signup'> Đăng ký </NavLink></div>
            <div><NavLink style={navLinkStyles} to='/login'> Đăng nhập </NavLink></div>
            
        </div>
        
        <div className='navbar-cart'>
            <img className="bag" src={images.bag} alt='bag' onClick={() => setToggleCart(true)}/>
            {toggleCart && (
                <div className='navbar-cart_area'>
                    <div className="sidebar">
                        <img className='x1' src={images.x} alt='x' onClick={() => setToggleCart(false)} />
                        <div className="title">
                            <h1> Your Cart Items </h1>
                        </div>
                        <div className="cartItems">
                            <Cart />
                {/*It is possible to have setToggleCart receives false after the code goes into
                <Cart />. The suggested way is to have Cart returns something other than then
                the needed content, such as a variable called "checkClose". */}
                        </div>
                    </div>
                </div>
            )}
        </div>
        

        <div className='navbar-smallscreen'>
            <img className='stripes' src={images.stripes} alt='stripes' onClick={() => setToggleMenu(true)}/>
            {toggleMenu && (
                <div className="navbar-smallscreen_overlay">
                    <img className='x' src={images.x} alt='x' onClick={() => setToggleMenu(false)} />
                    <div className='navbar-smallscreen_links'>
                        <div><NavLink style={navLinkStyles} to='/'>Trang chủ</NavLink></div>
                        <div><NavLink style={navLinkStyles} to='/about'>Về công ty</NavLink></div>
                        <div><NavLink style={navLinkStyles} to='/products'>Sản phẩm</NavLink></div>
                        <div><NavLink style={navLinkStyles} to='/blog'>Blog</NavLink></div>
                        <div><NavLink style={navLinkStyles} to='/signUp'> Đăng ký </NavLink></div>
                        <div><NavLink style={navLinkStyles} to='/logIn'> Đăng nhập </NavLink></div>
            
                    </div>
                </div>
            )}
        </div>
    </div>
</>  
  )
}
