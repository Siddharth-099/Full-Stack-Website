import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

const CartContext = createContext();

const STORAGE_KEY = "backpack_cart";

const getInitialCart = () => {
    try {
        const savedCart = localStorage.getItem(STORAGE_KEY);

        return savedCart ? JSON.parse(savedCart) : [];
    } catch {
        return [];
    }
};

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(getInitialCart);

    const [removedItem, setRemovedItem] = useState(null);

    const [showRemovedMessage, setShowRemovedMessage] =
        useState(false);

    // Save cart after every change
    useEffect(() => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(cartItems)
        );
    }, [cartItems]);

    // Total quantity
    const cartCount = useMemo(() => {
        return cartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );
    }, [cartItems]);

    // Total price
    const cartTotal = useMemo(() => {
        return cartItems.reduce(
            (total, item) =>
                total + Number(item.price) * item.quantity,
            0
        );
    }, [cartItems]);

    // Add product
    const addToCart = (product) => {

        setCartItems((previousItems) => {

            const existingProduct = previousItems.find(
                (item) => String(item.id) === String(product.id)
            );

            if (existingProduct) {

                return previousItems.map((item) =>
                    String(item.id) === String(product.id)
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                );

            }

            return [
                ...previousItems,
                {
                    ...product,
                    id: product.id,
                    name: product.name ?? product.title ?? "Product",
                    price: Number(product.price),
                    quantity: 1,
                },
            ];

        });

        setRemovedItem(null);
        setShowRemovedMessage(false);
    };

    // Remove entire product and remember it for Undo
    const removeFromCart = (productId) => {

        const index = cartItems.findIndex(
            (item) => String(item.id) === String(productId)
        );

        if (index === -1) return;

        setRemovedItem({
            product: cartItems[index],
            index,
        });

        setCartItems((previousItems) =>
            previousItems.filter(
                (item) => String(item.id) !== String(productId)
            )
        );

        setShowRemovedMessage(true);
    };

    // Restore removed product
    const undoRemove = () => {

        if (!removedItem) return;

        const { product, index } = removedItem;

        setCartItems((previousItems) => {

            const existingProduct = previousItems.find(
                (item) => String(item.id) === String(product.id)
            );

            if (existingProduct) {
                return previousItems.map((item) =>
                    String(item.id) === String(product.id)
                        ? {
                            ...item,
                            quantity: item.quantity + product.quantity,
                        }
                        : item
                );
            }

            const updatedItems = [...previousItems];

            updatedItems.splice(
                Math.min(index, updatedItems.length),
                0,
                product
            );

            return updatedItems;
        });

        setRemovedItem(null);
        setShowRemovedMessage(false);
    };

    // Change quantity
    const updateQuantity = (productId, quantity) => {

        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCartItems((previousItems) =>
            previousItems.map((item) =>
                String(item.id) === String(productId)
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
        setRemovedItem(null);
        setShowRemovedMessage(false);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                cartCount,
                cartTotal,
                addToCart,
                removeFromCart,
                undoRemove,
                updateQuantity,
                clearCart,
                removedItem,
                showRemovedMessage,
                setShowRemovedMessage,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {

    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside CartProvider"
        );
    }

    return context;
};