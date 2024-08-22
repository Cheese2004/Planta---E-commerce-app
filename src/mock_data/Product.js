const plants = [
  {
    id: 'p1',
    name: 'Spider Plant',
    type: 'Ưa bóng',
    origin: 'Châu Phi',
    size: 'Nhỏ',
    price: 250000,
    images: [
      require('../../assets/img/p1.png'),
      require('../../assets/img/p4.png'),
    ],
  },
  {
    id: 'p2',
    name: 'Spider Plant',
    type: 'Ưa bóng',
    origin: 'Châu Phi',
    size: 'Nhỏ',
    price: 250000,
    images: [
      require('../../assets/img/p2.png'),
      require('../../assets/img/p1.png'),
    ],
  },
  {
    id: 'p3',
    name: 'Spider Plant',
    type: 'Ưa bóng',
    origin: 'Châu Phi',
    size: 'Nhỏ',
    price: 250000,
    images: [
      require('../../assets/img/p4.png'),
      require('../../assets/img/p1.png'),
    ],
  },
  {
    id: 'p4',
    name: 'Spider Plant',
    type: 'Ưa bóng',
    origin: 'Châu Phi',
    size: 'Nhỏ',
    price: 250000,
    images: [
      require('../../assets/img/p2.png'),
      require('../../assets/img/p4.png'),
    ],
  },
  {
    id: 'p5',
    name: 'Spider Plant',
    type: 'Ưa bóng',
    origin: 'Châu Phi',
    size: 'Nhỏ',
    price: 250000,
    images: [
      require('../../assets/img/p4.png'),
      require('../../assets/img/p1.png'),
    ],
  },
  {
    id: 'p5',
    name: 'SunFlower',
    type: 'Ưa nắng',
    origin: 'Châu Phi',
    size: 'Nhỏ',
    price: 250000,
    images: [
      require('../../assets/img/p4.png'),
      require('../../assets/img/p1.png'),
    ],
  },
];

const accessories = [
  {
    id: 1,
    name: 'Planta trắng',
    price: 250000,
    image: require('../../assets/img/pr1.png'),
  },
  {
    id: 2,
    name: 'Planta Lemon Balm',
    price: 250000,
    image: require('../../assets/img/pr2.png'),
  },
  {
    id: 3,
    name: 'Planta Rosewood',
    price: 250000,
    image: require('../../assets/img/pr3.png'),
  },
  {
    id: 4,
    name: 'Planta Dove grey ',
    price: 250000,
    image: require('../../assets/img/pr4.png'),
  },
  {
    id: 5,
    name: 'Bình tưới',
    price: 250000,
    image: require('../../assets/img/pr5.png'),
  },
  {
    id: 6,
    name: 'Bình xịt',
    price: 250000,
    image: require('../../assets/img/pr6.png'),
  },
  {
    id: 7,
    name: 'Bộ cuốc xẻng mini',
    price: 250000,
    image: require('../../assets/img/pr7.png'),
  },
];
const services = [
  {
    id: 1,
    name: 'Lemon Balm Grow Kit',
    desc: 'Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh dấu...',
    image: require('../../assets/img/img3.png'),
  },
];

const cartProducts = [
  {
    id: 'p1',
    name: 'Spider Plant',
    type: 'Ưa bóng',
    origin: 'Châu Phi',
    size: 'Nhỏ',
    price: 250000,
    images: [
      require('../../assets/img/p1.png'),
      require('../../assets/img/p4.png'),
    ],
  },
  {
    id: 'p2',
    name: 'Spider Plant',
    type: 'Ưa bóng',
    origin: 'Châu Phi',
    size: 'Nhỏ',
    price: 250000,
    images: [
      require('../../assets/img/p2.png'),
      require('../../assets/img/p1.png'),
    ],
  },
];

const newProducts = [
  {
    id: 'p3',
    name: 'Spider Plant',
    type: 'Ưa bóng',
    origin: 'Châu Phi',
    size: 'Nhỏ',
    price: 250000,
    images: [
      require('../../assets/img/p4.png'),
      require('../../assets/img/p1.png'),
    ],
  },
  {
    id: 'p4',
    name: 'Spider Plant',
    type: 'Ưa bóng',
    origin: 'Châu Phi',
    size: 'Nhỏ',
    price: 250000,
    images: [
      require('../../assets/img/p2.png'),
      require('../../assets/img/p4.png'),
    ],
  },
  {
    id: 'p5',
    name: 'Spider Plant',
    type: 'Ưa bóng',
    origin: 'Châu Phi',
    size: 'Nhỏ',
    price: 250000,
    images: [
      require('../../assets/img/p4.png'),
      require('../../assets/img/p1.png'),
    ],
  },
];
const searchHistory = ['Spider Plant', 'Song of India'];

const historyTransaction = [
  {
    od_id: 'od1',
    time: 'Thứ tư, 03/09/2021',
    name: 'Spider Plant',
    type: 'Ưa bóng',
    qty: '2',
    image: require('../../assets/img/p1.png'),
    status: 'successful',
  },
  {
    od_id: '0d2',
    time: 'Thứ hai, 01/09/2021',
    name: 'Spider Plant',
    type: 'Ưa bóng',
    qty: '3',
    image: require('../../assets/img/p2.png'),
    status: 'cancelled',
  },
  {
    id: 'od3',
    time: 'Thứ tư, 03/09/2021',
    name: 'Spider Plant',
    type: 'Ưa bóng',
    qty: '5',
    image: require('../../assets/img/p4.png'),
    status: 'successful',
  },
];
export {
  plants,
  accessories,
  services,
  cartProducts,
  newProducts,
  searchHistory,
  historyTransaction,
};
