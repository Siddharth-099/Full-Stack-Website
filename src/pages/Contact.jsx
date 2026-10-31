import React from 'react'
import style from './Contact.module.css';
import { Form, NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <main>
                <header className={style.contact}>
                    <div className={style.Contactinner}>
                        <div className={style.lkj}>
                            <h1 className={style.lkj2}>Contact</h1>

                            <li className={style.li}>
                                <NavLink className={({ isActive }) => (`${isActive ? style.co : ""} ${style.ss}`)} to={`/contact`}>Contact</NavLink >
                            </li>
                        </div>
                    </div>
                </header>


                <div className={style.contactinfo}>
                    <div className={style.info1}>
                        <div className={style.info2}>
                            <div className={style.info3}>

                                <div className={style.info4}>
                                    <div className={style.inhead}>
                                        <h2 className={style.h2}>WE’D LOVE TO HEAR FROM YOU!</h2>
                                    </div>

                                    <div className={style.infoinfo}>
                                        <div className={style.infoinfoinner}>
                                            <div className={style.lo}>
                                                <div className={style.lo1}>
                                                    <span>
                                                        <i className={`fas fa-phone`}></i>
                                                    </span>
                                                </div>
                                                <div className={style.lo2}>
                                                    <h6 className={style.h6}>Phone</h6>
                                                    <div className={style.h62}>
                                                        (657) 123-456
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.infoinfo}>
                                        <div className={style.infoinfoinner}>
                                            <div className={style.lo}>
                                                <div className={style.lo1}>
                                                    <span>
                                                        <i className={`fas fa-envelope`}></i>
                                                    </span>
                                                </div>
                                                <div className={style.lo2}>
                                                    <h6 className={style.h6}>Email</h6>
                                                    <div className={style.h62}>
                                                        contact@website.com
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.infoinfo}>
                                        <div className={style.infoinfoinner}>
                                            <div className={style.lo}>
                                                <div className={style.lo1}>
                                                    <span>
                                                        <i className={`fas fa-home`}></i>
                                                    </span>
                                                </div>
                                                <div className={style.lo2}>
                                                    <h6 className={style.h6}>Address</h6>
                                                    <div className={style.h62}>
                                                        London Eye, London,
                                                        United Kingdom
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={style.right}>
                                    <div className={style.right1}>
                                        <form action="#">
                                            <div className={style.oop}>
                                                <div className={style.oop1}>
                                                    <div className={style.olp}>
                                                        <div className={style.oop11}>
                                                            <input className={style.input} type="text" placeholder='First Name*' />
                                                        </div>
                                                        <div className={style.oop12}>
                                                            <input className={style.input} type="text" placeholder='Last Name*' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Contact
