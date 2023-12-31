import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

// cart reducers
import {
    itemIncrement,
    itemDecrement,
    itemRemoved,
    checkout,
} from "../../features/cart/cartSlice";

// items reduces
import {
    itemAddedToCart,
    itemRemovedFromCart,
} from "../../features/items/itemsSlice";

// react-icons
import { Drawer } from "antd";
import { TbTruckDelivery } from "react-icons/tb";
import { BiCartAlt } from "react-icons/bi";

function Navbar() {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const { cartItems, totalPrice, totalQuantity } = useSelector(
        (state) => state.cart
    );

    const data = useSelector((state) => state.items);

    // getting cart item details
    const getItemDetails = (cartItem) => {
        const { type, id, quantity } = cartItem;

        let itemDetails = null;

        if (type === "vegetable") {
            itemDetails = data.vegetables.find(
                (vegetable) => vegetable.id === id
            );
            itemDetails = { ...itemDetails, quantity: quantity };
        } else if (type === "fruit") {
            itemDetails = data.fruits.find((fruit) => fruit.id === id);
            itemDetails = { ...itemDetails, quantity: quantity };
        }

        return itemDetails;
    };

    const itemDetailsArray = cartItems.map((cartItem) =>
        getItemDetails(cartItem)
    );

    // action dispatchers for Cart
    const onItemIncrementClicked = (id, name, type) => {
        dispatch(
            itemIncrement({
                id: id,
                name: name,
                type: type,
            })
        );

        dispatch(
            itemAddedToCart({
                id: id,
                type: type,
                quantity: 1,
            })
        );
    };

    const onItemDecrementClicked = (id, name, type) => {
        dispatch(
            itemDecrement({
                id: id,
                name: name,
                type: type,
            })
        );

        dispatch(
            itemRemovedFromCart({
                id: id,
                type: type,
                quantity: 1,
            })
        );
    };

    const onItemDeletetClicked = (id, name, type, quantity) => {
        dispatch(
            itemRemoved({
                id: id,
                name: name,
                type: type,
            })
        );

        dispatch(
            itemRemovedFromCart({
                id: id,
                type: type,
                quantity: quantity,
            })
        );
    };

    const handleCheckout = () => {
        dispatch(checkout());
    };

    const cartItemsList = itemDetailsArray.map((item) => {
        return (
            <div key={item.id} className="cart-product">
                <img src={item.img} alt="" className="product-img" />
                <p className="product-name">{item.name}</p>
                <p className="product-quantity">{item.quantity}</p>
                <p className="product-price">
                    {item.specialPrice ? item.specialPrice : item.price}
                </p>
                <p
                    className="add-btn"
                    onClick={() => {
                        onItemIncrementClicked(item.id, item.name, item.type);
                    }}
                >
                    +
                </p>
                <p
                    className="remove-btn"
                    onClick={() => {
                        onItemDecrementClicked(item.id, item.name, item.type);
                    }}
                >
                    -
                </p>
                <p
                    className="delete-btn"
                    onClick={() => {
                        onItemDeletetClicked(
                            item.id,
                            item.name,
                            item.type,
                            item.quantity
                        );
                    }}
                >
                    DEL
                </p>
            </div>
        );
    });

    // cart
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className="navbar padding">
            <div className="navbar-brand">
                <Link className="navbrand" to="/">
                    Fruits/Vegetales Shop
                </Link>
            </div>

            <div className="navbar-links">
                <Link className="navbar-link" onClick={handleCheckout}>
                    <TbTruckDelivery className="nav-link-icon" />
                </Link>
                <Link to="/fruits" className="navbar-link">
                    Fruits{" "}
                </Link>
                <Link to="/vegetables" className="navbar-link">
                    Vegetables
                </Link>
                <p className="navbar-link" onClick={showDrawer}>
                    <BiCartAlt className="nav-link-icon" />
                </p>
            </div>
            <Drawer
                title="Product Cart"
                placement="right"
                size={"large"}
                onClose={onClose}
                open={open}
            >
                <div className="cart-products">
                    <div className="products-header">
                        <p className="header-title">Product</p>
                        <p className="header-title">Name</p>
                        <p className="header-title">Quantity</p>
                        <p className="header-title">Price</p>
                        <p className="header-title">Add</p>
                        <p className="header-title">Remove</p>
                        <p className="header-title">Delete</p>
                    </div>
                    <div className="products-list">{cartItemsList}</div>
                </div>
                <div className="cart-total">
                    <div className="cart-quantity">
                        Total Quanity : {totalQuantity}{" "}
                    </div>
                    <div className="cart-price">Total Price : {totalPrice}</div>
                    <button className="check-btn" onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;
