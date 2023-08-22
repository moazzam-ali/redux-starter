import data from "../../data";

const { fruits } = data;
import ItemCard from "../../components/ItemCard/ItemCard";

const fruitsList = fruits.map((fruit) => {
    return <ItemCard key={fruit.id} data={fruit} />;
});

function Fruits() {
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
