import React, { useState } from 'react';
import style from './MyAccount.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const MyAccount = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post(
                'http://localhost:8080/api/users',
                user
            );

            console.log('User created:', response.data);

            alert('Account created successfully!');

            // Form clear
            setUser({
                username: '',
                email: '',
                password: ''
            });

        } catch (error) {

            console.log('Error:', error);
            console.log('Response:', error.response);
            console.log('Data:', error.response?.data);
            console.log('Status:', error.response?.status);

            alert('Something went wrong');

        }
    };

    return (
        <>
            {/* HEADER */}

            <header className={style.MyAccount}>
                <div className={style.MyAccountinner}>

                    <h1 className={style.MyAccounthead}>
                        My Account
                    </h1>

                    <nav>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? style.co : ""} ${style.ss}`
                            }
                            to="/myaccount"
                        >
                            My Account
                        </NavLink>
                    </nav>

                </div>
            </header>


            {/* ACCOUNT FORM */}

            <div className={style.MyAccountnext}>

                <div className={style.nextinner}>

                    <ul className={style.myul}>
                        <li>
                            <span>Register</span>
                        </li>
                    </ul>


                    <form
                        className={style.from}
                        onSubmit={handleSubmit}
                    >

                        {/* USERNAME */}

                        <div className={style.fromp}>

                            <div className={style.lko}>

                                <label
                                    className={style.label}
                                    htmlFor="username"
                                >
                                    Username *
                                </label>

                            </div>

                            <input
                                id="username"
                                type="text"
                                name="username"
                                value={user.username}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        {/* EMAIL */}

                        <div className={style.fromp}>

                            <div className={style.lko}>

                                <label
                                    className={style.label}
                                    htmlFor="email"
                                >
                                    Email address *
                                </label>

                            </div>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        {/* PASSWORD */}

                        <div className={style.fromp}>

                            <div className={style.lko}>

                                <label
                                    className={style.label}
                                    htmlFor="password"
                                >
                                    Password *
                                </label>

                            </div>

                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        {/* BUTTON */}

                        <div className={style.fromps}>

                            <button
                                type="submit"
                                className={style.checkbutton}
                            >
                                CREATE ACCOUNT
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </>
    );
};

export default MyAccount;