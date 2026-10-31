import { useState } from "react";

import { NavLink } from "react-router-dom";

import { useCart } from "../context/CartContext";

import style from "./Cart.module.css";

const Cart = () => {

    const {
        cartItems,
        cartTotal,
        removeFromCart,
        updateQuantity,
        undoRemove,
        removedItem,
        showRemovedMessage,
        setShowRemovedMessage,
    } = useCart();

    const [coupon, setCoupon] = useState("");

    const [couponMessage, setCouponMessage] = useState("");

    const handleCoupon = (event) => {

        event.preventDefault();

        if (!coupon.trim()) {
            setCouponMessage("Please enter a coupon code.");
            return;
        }

        setCouponMessage(
            "This coupon code is not valid."
        );
    };

    return (
        <main className={style.cartPage}>

            {/* PAGE TITLE */}

            <section className={style.pageBanner}>

                <div className={style.container}>

                    <h1>Cart</h1>

                    <div className={style.breadcrumb}>
                        <NavLink to="/">Home</NavLink>
                        <span>›</span>
                        <span>Cart</span>
                    </div>

                </div>

            </section>

            {/* CART CONTENT */}

            <section className={style.cartContent}>

                <div className={style.container}>

                    {/* REMOVED PRODUCT MESSAGE */}

                    {showRemovedMessage && removedItem && (

                        <div className={style.removedMessage}>

                            <span>
                                ✓ &nbsp;
                                "{removedItem.product.name}" removed.
                            </span>

                            <button
                                type="button"
                                onClick={undoRemove}
                            >
                                UNDO?
                            </button>

                        </div>

                    )}

                    {/* EMPTY CART */}

                    {cartItems.length === 0 ? (

                        <>

                            <div className={style.emptyMessage}>

                                <span className={style.infoIcon}>
                                    i
                                </span>

                                <span>
                                    YOUR CART IS CURRENTLY EMPTY.
                                </span>

                            </div>

                            <NavLink
                                to="/shop"
                                className={style.returnButton}
                            >
                                ‹ &nbsp; RETURN TO SHOP
                            </NavLink>

                        </>

                    ) : (

                        <>

                            {/* CART TABLE */}

                            <div className={style.tableWrapper}>

                                <table className={style.cartTable}>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>PRODUCT</th>
                                            <th>PRICE</th>
                                            <th>QUANTITY</th>
                                            <th>SUBTOTAL</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {cartItems.map((item) => (

                                            <tr key={item.id}>

                                                <td className={style.removeCell}>

                                                    <button
                                                        type="button"
                                                        className={style.removeItem}
                                                        aria-label={`Remove ${item.name}`}
                                                        onClick={() =>
                                                            removeFromCart(item.id)
                                                        }
                                                    >
                                                        ×
                                                    </button>

                                                </td>

                                                <td className={style.productCell}>

                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                    />

                                                    <span>
                                                        {item.name}
                                                    </span>

                                                </td>

                                                <td className={style.priceCell}>
                                                    ${Number(item.price).toFixed(2)}
                                                </td>

                                                <td>

                                                    <div className={style.quantityControl}>

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                updateQuantity(
                                                                    item.id,
                                                                    item.quantity - 1
                                                                )
                                                            }
                                                        >
                                                            −
                                                        </button>

                                                        <span>
                                                            {item.quantity}
                                                        </span>

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                updateQuantity(
                                                                    item.id,
                                                                    item.quantity + 1
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>

                                                    </div>

                                                </td>

                                                <td className={style.priceCell}>
                                                    $
                                                    {(
                                                        Number(item.price) *
                                                        item.quantity
                                                    ).toFixed(2)}
                                                </td>

                                            </tr>

                                        ))}

                                    </tbody>

                                </table>

                                {/* COUPON AND UPDATE */}

                                <div className={style.cartActions}>

                                    <form
                                        className={style.couponForm}
                                        onSubmit={handleCoupon}
                                    >

                                        <input
                                            type="text"
                                            placeholder="Coupon code"
                                            value={coupon}
                                            onChange={(event) =>
                                                setCoupon(event.target.value)
                                            }
                                        />

                                        <button type="submit">
                                            APPLY COUPON
                                        </button>

                                    </form>

                                    <button
                                        type="button"
                                        className={style.updateButton}
                                        onClick={() =>
                                            setShowRemovedMessage(false)
                                        }
                                    >
                                        UPDATE CART
                                    </button>

                                </div>

                                {couponMessage && (
                                    <p className={style.couponMessage}>
                                        {couponMessage}
                                    </p>
                                )}

                            </div>

                            {/* CART TOTALS */}

                            <div className={style.totalsWrapper}>

                                <h2>CART TOTALS</h2>

                                <div className={style.totalRow}>
                                    <span>Subtotal</span>

                                    <strong>
                                        ${cartTotal.toFixed(2)}
                                    </strong>
                                </div>

                                <div className={style.totalRow}>
                                    <span>Total</span>

                                    <strong>
                                        ${cartTotal.toFixed(2)}
                                    </strong>
                                </div>

                                <NavLink
                                    to="/checkout"
                                    className={style.checkoutButton}
                                >
                                    PROCEED TO CHECKOUT
                                </NavLink>

                            </div>

                        </>

                    )}

                </div>

            </section>

        </main>
    );
};

export default Cart;