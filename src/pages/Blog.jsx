import React from 'react'
import style from './Blog.module.css'
import { NavLink } from 'react-router-dom'
import l1 from '../assets/l1.png'
import l2 from '../assets/l2.png'
import l3 from '../assets/l3.png'
import l4 from '../assets/l4.png'
import l5 from '../assets/l5.png'
import l6 from '../assets/l6.png'

const Blog = () => {
    return (
        <>
            <main>

                <header className={style.MyAccount}>
                    <div className={style.MyAccountinner}>

                        <h1 className={style.MyAccounthead}>
                            Blog
                        </h1>

                        <nav>
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive ? style.co : ""} ${style.ss}`
                                }
                                to="/blog"
                            >
                                Blog
                            </NavLink>
                        </nav>

                    </div>
                </header>

                <div className={style.blog}>

                    {/* box1 */}

                    <div className={style.blog1}>
                        <div className={style.blog2}>
                            <div className={style.blogimage}>
                                <a href="#">
                                    <img className={style.image} src={l1} alt="" />
                                </a>
                            </div>

                            <header className={style.lokk}>
                                <h2>
                                    <a href="#">Duis sagitis ipsum prasent</a>
                                </h2>
                            </header>

                            <ul className={style.blogul}>
                                <li>
                                    <a href="#">Tips</a>
                                </li>

                                <span>-</span>
                                <li>
                                    <a href="#">0 Comments</a>
                                </li>
                            </ul>

                            <div className={style.blogdiv}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.…
                                </p>
                            </div>

                            <div className={style.bloglast}>
                                <a href="#">Continue Reading</a>
                            </div>

                        </div>
                    </div>

                    {/* Box2 */}

                    <div className={style.blog1}>
                        <div className={style.blog2}>
                            <div className={style.blogimage}>
                                <a href="#">
                                    <img className={style.image} src={l2} alt="" />
                                </a>
                            </div>

                            <header className={style.lokk}>
                                <h2>
                                    <a href="#">Tortor neque adpiscing diam</a>
                                </h2>
                            </header>

                            <ul className={style.blogul}>
                                <li>
                                    <a href="#">Tips</a>
                                </li>

                                <span>-</span>
                                <li>
                                    <a href="#">0 Comments</a>
                                </li>
                            </ul>

                            <div className={style.blogdiv}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.…
                                </p>
                            </div>

                            <div className={style.bloglast}>
                                <a href="#">Continue Reading</a>
                            </div>

                        </div>
                    </div>

                    {/* Box3 */}

                    <div className={style.blog1}>
                        <div className={style.blog2}>
                            <div className={style.blogimage}>
                                <a href="#">
                                    <img className={style.image} src={l3} alt="" />
                                </a>
                            </div>

                            <header className={style.lokk}>
                                <h2>
                                    <a href="#">Vestibulum sapin prin quam</a>
                                </h2>
                            </header>

                            <ul className={style.blogul}>
                                <li>
                                    <a href="#">Tips</a>
                                </li>

                                <span>-</span>
                                <li>
                                    <a href="#">0 Comments</a>
                                </li>
                            </ul>

                            <div className={style.blogdiv}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.…
                                </p>
                            </div>

                            <div className={style.bloglast}>
                                <a href="#">Continue Reading</a>
                            </div>

                        </div>
                    </div>

                    {/* box4 */}

                    <div className={style.blog1}>
                        <div className={style.blog2}>
                            <div className={style.blogimage}>
                                <a href="#">
                                    <img className={style.image} src={l4} alt="" />
                                </a>
                            </div>

                            <header className={style.lokk}>
                                <h2>
                                    <a href="#">Neque adipiscing an cursus</a>
                                </h2>
                            </header>

                            <ul className={style.blogul}>
                                <li>
                                    <a href="#">Tips</a>
                                </li>

                                <span>-</span>
                                <li>
                                    <a href="#">0 Comments</a>
                                </li>
                            </ul>

                            <div className={style.blogdiv}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.…
                                </p>
                            </div>

                            <div className={style.bloglast}>
                                <a href="#">Continue Reading</a>
                            </div>

                        </div>
                    </div>

                    {/* Box5 */}

                    <div className={style.blog1}>
                        <div className={style.blog2}>
                            <div className={style.blogimage}>
                                <a href="#">
                                    <img className={style.image} src={l5} alt="" />
                                </a>
                            </div>

                            <header className={style.lokk}>
                                <h2>
                                    <a href="#">Litora torqent per conubia</a>
                                </h2>
                            </header>

                            <ul className={style.blogul}>
                                <li>
                                    <a href="#">Tips</a>
                                </li>

                                <span>-</span>
                                <li>
                                    <a href="#">0 Comments</a>
                                </li>
                            </ul>

                            <div className={style.blogdiv}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.…
                                </p>
                            </div>

                            <div className={style.bloglast}>
                                <a href="#">Continue Reading</a>
                            </div>

                        </div>
                    </div>

                    {/* Box6 */}

                    <div className={style.blog1}>
                        <div className={style.blog2}>
                            <div className={style.blogimage}>
                                <a href="#">
                                    <img className={style.image} src={l6} alt="" />
                                </a>
                            </div>

                            <header className={style.lokk}>
                                <h2>
                                    <a href="#">Praesent libro se cursus ante</a>
                                </h2>
                            </header>

                            <ul className={style.blogul}>
                                <li>
                                    <a href="#">Tips</a>
                                </li>

                                <span>-</span>
                                <li>
                                    <a href="#">0 Comments</a>
                                </li>
                            </ul>

                            <div className={style.blogdiv}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.…
                                </p>
                            </div>

                            <div className={style.bloglast}>
                                <a href="#">Continue Reading</a>
                            </div>

                        </div>
                    </div>
                </div>
            </main>


        </>
    )
}

export default Blog
