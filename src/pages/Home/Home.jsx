import ItemCard from "../../components/ItemCard/ItemCard";
import Section from "../../components/Section/Section.jsx";

// store dispatches
import { useSelector, useDispatch } from "react-redux";

function Home() {
    // fetching data for display
    const allItems = useSelector((state) => state.items);
    const { vegetables, fruits } = allItems;

    // list of all best selling fruits and vegetables
    const bestSellingVegetables = vegetables.filter(
        (vegetable) => vegetable.bestSelling
    );
    const bestSellingFruits = fruits.filter((fruit) => fruit.bestSelling);
    const bestSellingItems = bestSellingVegetables.concat(bestSellingFruits);

    const bestSellingList = bestSellingItems.map((item) => {
        return <ItemCard key={item.id} data={item} />;
    });

    // list of special priced vegetables and fruits
    const vegetablesWithSpecialPrice = vegetables.filter(
        (vegetable) => vegetable.specialPrice !== null
    );
    const fruitsWithSpecialPrice = fruits.filter(
        (fruit) => fruit.specialPrice !== null
    );
    const itemsWithSpecialPrices = vegetablesWithSpecialPrice.concat(
        fruitsWithSpecialPrice
    );

    const specialPriceList = itemsWithSpecialPrices.map((item) => {
        return <ItemCard key={item.id} data={item} />;
    });

    // list of all fruits
    const fruitsList = fruits.map((fruit) => {
        return <ItemCard key={fruit.id} data={fruit} />;
    });

    // list of all vegetables
    const vegetablesList = vegetables.map((vegetable) => {
        return <ItemCard key={vegetable.id} data={vegetable} />;
    });

    return (
        <div className="home ">
            {/*  hero section*/}
            <div className="home-hero padding">
                <h1>
                    <span className="highlight">Fruits</span> And{" "}
                    <span className="highlight">Vegetables</span> Shop
                </h1>
            </div>

            {/* most selling section */}
            <Section
                name={"mostSelling"}
                heading={"Most Selling Fruits and Vegetables"}
                list={bestSellingList}
            />

            {/*  specials offers */}

            <Section
                name={"specialOffers"}
                heading={"Special Offers"}
                list={specialPriceList}
            />

            {/* all vegetables */}
            <Section
                name={"vegetables"}
                heading={"Vegetables"}
                list={vegetablesList}
            />

            {/* all fruits */}
            <Section name={"fruits"} heading={"Fruits"} list={fruitsList} />
        </div>
    );
}

export default Home;
