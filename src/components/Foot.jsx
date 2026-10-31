import React from 'react'
import style from './Foot.module.css'

const Foot = () => {
    return (
        <>
            <footer>
                <div className={style.footmain}>
                    <div className={style.footinner}>
                        <div className={style.mainfoot}>

                            <div className={style.footbox1}>
                                <div className={style.box1}>
                                    <div className={style.box1info}>
                                        <p>CONTACT INFO</p>
                                    </div>
                                </div>
                                <ul className={style.footul}>
                                    <li className={style.footli}>
                                        <div className={style.footlidiv}>
                                            <span className={style.text}>London Eye, London, United Kingdom</span>
                                        </div>
                                    </li>
                                    <li className={style.footli}>
                                        <div className={style.footlidiv}>
                                            <span className={style.text}>621-254-2147</span>
                                        </div>
                                    </li>
                                    <li className={style.footli}>
                                        <div className={style.footlidiv}>
                                            <span className={style.text}>contact@support.com</span>
                                        </div>
                                    </li>
                                </ul>

                            </div>

                            <div className={style.footbox1}>
                                <div className={style.box1}>
                                    <div className={style.box1info}>
                                        <p>INFORMATION</p>
                                    </div>
                                </div>
                                <div>
                                    <ul className={style.footul}>
                                        <li className={style.footlink}><a href="#">About Us</a></li>
                                        <li className={style.footlink}><a href="#">Store Location</a></li>
                                        <li className={style.footlink}><a href="#">Contact Us</a></li>
                                        <li className={style.footlink}><a href="#">Shipping & Delivery</a></li>
                                        <li className={`${style.footlink} ${style.op}`}><a href="#">Latest News</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className={style.footbox1}>
                                <div className={style.box1}>
                                    <div className={style.box1info}>
                                        <p>OUR SERVICE</p>
                                    </div>
                                </div>
                                <div>
                                    <ul className={style.footul}>
                                        <li className={style.footlink}><a href="#">About Us</a></li>
                                        <li className={style.footlink}><a href="#">Store Location</a></li>
                                        <li className={style.footlink}><a href="#">Contact Us</a></li>
                                        <li className={style.footlink}><a href="#">Shipping & Delivery</a></li>
                                        <li className={`${style.footlink} ${style.op}`}><a href="#">Latest News</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className={style.footbox1}>
                                <div className={style.box1}>
                                    <div className={style.box1info}>
                                        <p>NEWSLETTER</p>
                                    </div>
                                </div>

                                <div className={style.footlast}>
                                    <form action="#">
                                        <div className={style.footinput}>
                                            <input type="email" placeholder='Enter your email address' />
                                        </div>

                                        <div className={style.footcheck}>
                                            <label htmlFor="#">
                                                <input type="checkbox" />
                                                GDPR Checkbox Label
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={style.footbottom}>
                        <div className={style.bottom1}>
                            <div className={style.bottom2}>
                                © Copyright - OceanWP
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Foot
