// import React from 'react'
// import style from './Product.module.css'
// import { myContext } from '../context/Product'
// import { useContext } from 'react'
// import { NavLink } from 'react-router-dom'

// const Product = () => {

//     const { products } = useContext(myContext);

//     const fitefilterproduct = products.filter((s) => s.id <= 8)

//     return (
//         <>
//             <div className={style.image}>
//                 <ul className={style.imageul}>
//                     <li className={style.imageli}>
//                         <div className={style.liinner}>
//                             <ul className={style.liul}>
//                                 <li className={style.mainimage}>
//                                     {


//                                         fitefilterproduct.map((ss) => (
//                                             <>
//                                                 <div className={style.kjh} key={ss.id}>
//                                                     <div className={style.la}>
//                                                         <h1>Heelo</h1>
//                                                     </div>
//                                                     <div>
//                                                         <div className={style.pp}>
//                                                             <img width={300} height={300} src={ss.image} alt="Bag" />
//                                                         </div>

//                                                         <div className={style.imageinfo}>
//                                                             <p className={style.pet}>
//                                                                 <NavLink>Pet</NavLink>
//                                                             </p>

//                                                             <p className={style.pet}>
//                                                                 <h2 className={style.imagetitle}>
//                                                                     <NavLink>{ss.name}</NavLink>
//                                                                 </h2>
//                                                             </p>

//                                                             <p className={style.productprice}>
//                                                                 <span className={style.ppa}>${ss.price}</span>
//                                                             </p>
//                                                         </div>
//                                                     </div>

//                                                 </div>
//                                             </>
//                                         ))
//                                     }
//                                 </li>
//                             </ul>
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//         </>
//     )
// }

// export default Product
import React, { useContext } from 'react';

import style from './Product.module.css';

import { myContext } from '../context/Product';

import { NavLink } from 'react-router-dom';

import { useCart } from '../context/CartContext';

import ja from '../assets/bb.png';

const Product = () => {

    const { products } = useContext(myContext);

    const { addToCart } = useCart();


    const fitefilterproduct = products.filter((s) => s.id <= 8);

    return (
        <>
            <div className={style.image}>

                <ul className={style.imageul}>

                    <li className={style.imageli}>

                        <div className={style.liinner}>

                            <ul className={style.liul}>

                                <li className={style.mainimage}>

                                    {fitefilterproduct.map((ss) => (

                                        <div
                                            className={style.kjh}
                                            key={ss.id}
                                        >

                                            {/* =========================
                                                PRODUCT IMAGE AREA
                                            ========================== */}

                                            <div className={style.productImageArea}>


                                                {/* =========================
                                                    LEFT THUMBNAILS
                                                ========================== */}

                                                <div className={style.thumbnails}>

                                                    {/* MAIN PRODUCT IMAGE */}

                                                    <div className={style.thumbnailActive}>
                                                        <img
                                                            src={ss.image}
                                                            alt={ss.name}
                                                        />
                                                    </div>


                                                    {/* SECOND IMAGE
                                                        bb.png
                                                    */}

                                                    <div className={style.thumbnail}>
                                                        <img
                                                            src={ja}
                                                            alt="Product view"
                                                        />
                                                    </div>

                                                </div>


                                                {/* =========================
                                                    MAIN PRODUCT IMAGE
                                                ========================== */}

                                                <div className={style.pp}>

                                                    <img
                                                        src={ss.image}
                                                        alt={ss.name}
                                                    />

                                                </div>


                                                {/* =========================
                                                    RIGHT SIDE BUTTONS
                                                ========================== */}

                                                <div className={style.actions}>

                                                    <button
                                                        className={style.topAction}
                                                        type="button"
                                                    >
                                                    </button>


                                                    <button
                                                        className={style.heart}
                                                        type="button"
                                                    >
                                                        ♡
                                                    </button>

                                                </div>


                                                {/* =========================
                                                    ADD TO CART
                                                ========================== */}
                                                <button
                                                    className={style.addCart}
                                                    type="button"
                                                    onClick={() => addToCart(ss)}
                                                >
                                                    ADD TO CART
                                                </button>

                                            </div>


                                            {/* =========================
                                                PRODUCT INFORMATION
                                            ========================== */}

                                            <div className={style.imageinfo}>

                                                <p className={style.pet}>
                                                    <NavLink to="#">
                                                        Pet
                                                    </NavLink>
                                                </p>


                                                <h2 className={style.imagetitle}>
                                                    <NavLink to="#">
                                                        {ss.name}
                                                    </NavLink>
                                                </h2>


                                                <p className={style.productprice}>
                                                    <span className={style.ppa}>
                                                        ${ss.price}
                                                    </span>
                                                </p>


                                                {/* RATING */}

                                                {ss.rating > 0 && (

                                                    <div className={style.rating}>

                                                        {Array.from(
                                                            { length: 5 },
                                                            (_, index) => (

                                                                <span key={index}>

                                                                    {index < ss.rating
                                                                        ? '★'
                                                                        : '☆'}

                                                                </span>

                                                            )
                                                        )}

                                                    </div>

                                                )}

                                            </div>

                                        </div>

                                    ))}

                                </li>

                            </ul>

                        </div>

                    </li>

                </ul>

            </div>
        </>
    );
};

export default Product;