// imported images
// vegetables
import vegetable1 from "/vegetables/potato.jpg";
import vegetable2 from "/vegetables/carrot.jpg";
import vegetable3 from "/vegetables/spinach.jpg";
import vegetable4 from "/vegetables/brocoli.jpg";
import vegetable5 from "/vegetables/tomato.jpg";

// fruits
import fruit1 from "/fruits/banana.jpg";
import fruit2 from "/fruits/apple.jpg";
import fruit3 from "/fruits/orange.jpg";
import fruit4 from "/fruits/grapes.jpg";
import fruit5 from "/fruits/mango.jpg";

const data = {
    vegetables: [
        {
            id: 1,
            name: "Potato",
            img: vegetable1,
            price: 100,
            specialPrice: 70,
            amount: "1 Kg",
            validity: "12 Sep 2023",
            bestSelling: true,
            type: "vegetable",
            availability: 20,
        },
        {
            id: 2,
            name: "Carrot",
            img: vegetable2,
            price: 80,
            amount: "500 g",
            validity: "10 Sep 2023",
            specialPrice: 60,
            bestSelling: true,
            type: "vegetable",
            availability: 15,
        },
        {
            id: 3,
            name: "Spinach",
            img: vegetable3,
            price: 150,
            amount: "250 g",
            validity: "14 Sep 2023",
            specialPrice: 80,
            bestSelling: false,
            type: "vegetable",
            availability: 25,
        },
        {
            id: 4,
            name: "Broccoli",
            img: vegetable4,
            price: 120,
            amount: "1 Bunch",
            validity: "15 Sep 2023",
            specialPrice: null,
            bestSelling: false,
            type: "vegetable",
            availability: 10,
        },
        {
            id: 5,
            name: "Tomato",
            img: vegetable5,
            price: 60,
            amount: "500 g",
            validity: "13 Sep 2023",
            specialPrice: null,
            bestSelling: true,
            type: "vegetable",
            availability: 30,
        },
    ],

    fruits: [
        {
            id: 1,
            name: "Banana",
            img: fruit1,
            price: 200,
            specialPrice: 150,
            amount: "1 Dozen",
            validity: "11 Sep 2023",
            bestSelling: false,
            type: "fruit",
            availability: 50,
        },
        {
            id: 2,
            name: "Apple",
            img: fruit2,
            price: 180,
            specialPrice: 160,
            amount: "6 Pieces",
            validity: "10 Sep 2023",
            bestSelling: true,
            type: "fruit",
            availability: 40,
        },
        {
            id: 3,
            name: "Orange",
            img: fruit3,
            price: 150,
            amount: "6 Pieces",
            validity: "13 Sep 2023",
            specialPrice: 120,
            bestSelling: false,
            type: "fruit",
            availability: 35,
        },
        {
            id: 4,
            name: "Grapes",
            img: fruit4,
            price: 250,
            amount: "500 g",
            validity: "14 Sep 2023",
            specialPrice: null,
            bestSelling: false,
            type: "fruit",
            availability: 60,
        },
        {
            id: 5,
            name: "Mango",
            img: fruit5,
            price: 300,
            amount: "2 Pieces",
            validity: "12 Sep 2023",
            specialPrice: null,
            bestSelling: true,
            type: "fruit",
            availability: 25,
        },
    ],
};

export default data;
