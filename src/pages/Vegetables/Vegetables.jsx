import data from "../../data";

const { vegetables } = data;

import ItemCard from "../../components/ItemCard/ItemCard";

const vegetablesList = vegetables.map((vegetable) => {
    return <ItemCard key={vegetable.id} data={vegetable} />;
});

function Vegetables() {
    return (
        <div className="vegetables padding">
            <div className="vegetables-hero">
                <h1>
                    <span className="highlight">Vegetables</span>
                </h1>
            </div>
            <div className="vegetables-list">{vegetablesList}</div>
        </div>
    );
}

export default Vegetables;
