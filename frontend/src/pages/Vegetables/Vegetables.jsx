import { useSelector } from "react-redux";

import ItemCard from "../../components/ItemCard/ItemCard";

function Vegetables() {
    // fetching fruits data from the state
    const { vegetables } = useSelector((state) => {
        return state.items;
    });

    // geneation of vegetables list
    const vegetablesList = vegetables.map((vegetable) => {
        return <ItemCard key={vegetable.id} data={vegetable} />;
    });
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
