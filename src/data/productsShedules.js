import moment from "moment";

const productList = [
    {
        title: 'Центрин, 1 шт.',
        package: 24,
        available: true,
        price: 230,
        img: '/images/product-1.png',
        date: moment().add(24, 'minute'),
        count: 1,
        total: 16
    },
    {
        title: 'Вайтсорб, 2 шт.',
        package: 30,
        available: true,
        price: 198,
        img: '/images/product-2.png',
        date: moment().add(32, 'minute'),
        count: 2,
        total: 4
    },
];

export default productList;