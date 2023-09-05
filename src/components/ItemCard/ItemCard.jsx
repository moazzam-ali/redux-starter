// dispatch actions
import { useDispatch } from "react-redux";

// cartslice reducers
import { itemAdded } from "../../features/cart/cartSlice";

// itemslice reducers
import { itemAddedToCart } from "../../features/items/itemsSlice";
import { message } from "antd";

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

        // Dispatch action to update availability
        dispatch(
            itemAddedToCart({
                id: props.data.id,
                type: props.data.type,
                quantity: 1,
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
                    Availablity:{" "}
                    {props.data.availability > 0
                        ? props.data.availability
                        : "Not Available"}
                </p>
                <p className="item-validity">
                    Valid Till: {props.data.validity}
                </p>
            </div>

            {props.data.availability > 0 ? (
                <button className="card-button" onClick={onAddItemClicked}>
                    ADD TO CART
                </button>
            ) : (
                <button
                    className="card-button disabled"
                    onClick={() => {
                        message.error("Item Not Available :(");
                    }}
                >
                    ADD TO CART
                </button>
            )}
        </div>
    );
}

export default ItemCard;
