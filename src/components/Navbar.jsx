import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
import logo from '../assets/bag.png'
import Foot from './Foot'

const Navbar = () => {
    return (
        <>
            <div className={style.nav}>
                <div className={style.navmessage}>
                    <div className={style.navll}>
                        <p>FREE DELIVERY OVER $100 ON ALL PRODUCTS</p>
                    </div>
                </div>
            </div>

            <div className={style.head}>
                <header>
                    <div className={style.headinner}>
                        <div className={style.headinner1}>
                            <NavLink to={'/'}>
                                <img width={136} src={logo} alt="Bag Logo" />
                            </NavLink>
                        </div>

                        <div className={style.links}>
                            <nav className={style.links1}>
                                <ul>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? style.co : ""} ${style.ss}`)} to="/">HOMEPAGE</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? style.co : ""} ${style.ss}`)} to="/shop">SHOP</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? style.co : ""} ${style.ss}`)} to="/blog">BLOG</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? style.co : ""} ${style.ss}`)} to="/contact">CONTACT</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? style.co : ""} ${style.ss}`)} to="/myaccount">MY ACCOUNT</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? style.co : ""} ${style.ss}`)} to="/cart">0</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
            <Outlet />
            <Foot />
        </>
    )
}

export default Navbar
