// dispatch actions
import { useDispatch } from "react-redux";

import { itemAdded } from "../../features/cart/cartSlice";

function ItemCard(props) {
    const dispatch = useDispatch();

    const onAddItemClicked = () => {
        dispatch(
            itemAdded({
                id: props.data.id,
                name: props.data.name,
                type: props.data.type,
                quantity: 1,
                price: props.data.specialPrice
                    ? props.data.specialPrice
                    : props.data.price,
            })
        );
    };
    return (
        <div className="item-card">
            <div className="card-image-cont">
                <img src={props.data.img} alt="" className="card-img" />
            </div>
            <div className="item-card-body">
                <h3 className="item-name">Name: {props.data.name}</h3>
                {props.data.specialPrice && (
                    <p className="item-price">
                        Special Price: {props.data.specialPrice}
                    </p>
                )}
                <p
                    className="item-price"
                    style={
                        props.data.specialPrice && {
                            textDecorationLine: "line-through",
                        }
                    }
                >
                    Price:
                    {props.data.price}
                </p>
                <p className="item-amount">Amount: {props.data.amount}</p>
                <p className="item-availability">
                    Availablity: {props.data.availability}
                </p>
                <p className="item-validity">
                    Valid Till: {props.data.validity}
                </p>
            </div>
            <button className="card-button" onClick={onAddItemClicked}>
                ADD TO CART
            </button>
        </div>
    );
}

export default ItemCard;
