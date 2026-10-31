import React from 'react'
import style from './Shop.module.css';
import { NavLink } from 'react-router-dom';
import Product2 from '../components/Product2';

const Shop = () => {
    return (
        <>
            <header className={style.MyAccount}>
                <div className={style.MyAccountinner}>

                    <h1 className={style.MyAccounthead}>
                        Shop
                    </h1>

                    <nav>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? style.co : ""} ${style.ss}`
                            }
                            to="/shop"
                        >
                            Shop
                        </NavLink>
                    </nav>

                </div>
            </header>

            <div className={style.shop}>
                <div className={style.shopinner}>
                    <div className={style.shopmain}>
                        <nav className={style.nav}>
                            <a className={`${style.nava} ${style.lo}`} href="#"></a>
                            <a className={style.nava} href="#"></a>
                        </nav>

                        <form action="#">
                            <select className={style.ss} name="" id="">
                                <option value="">Defaut Sorting</option>
                                <option value="">Sort by popularity</option>
                                <option value="">Sort by average rating</option>
                                <option value="">Sort by latest</option>
                                <option value="">Sort by price: low to high</option>
                                <option value="">Sort by price: high to low</option>
                            </select>
                        </form>

                        <ul className={style.ul}>
                            <li className={style.ulli}>View:</li>
                            <li className={style.ulli}>12</li>
                            <li className={style.ulli}>/24</li>
                            <li className={style.ulli}>/ALL</li>
                        </ul>
                    </div>
                </div>

                <Product2 />

            </div>
        </>
    )
}

export default Shop
