import { useSelector } from "react-redux";

// const { fruits } = data;
import ItemCard from "../../components/ItemCard/ItemCard";

function Fruits() {
    // fetching fruits data from the state
    const { fruits } = useSelector((state) => {
        return state.items;
    });

    // list of fruits generation
    const fruitsList = fruits.map((fruit) => {
        return <ItemCard key={fruit.id} data={fruit} />;
    });
    return (
        <div className="fruits padding">
            <div className="fruits-hero">
                <h1>
                    <span className="highlight">Fruits</span>
                </h1>
            </div>

            <section className="fruits-list">{fruitsList}</section>
        </div>
    );
}

export default Fruits;
