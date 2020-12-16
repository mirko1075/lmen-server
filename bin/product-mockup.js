const products = [
  {
    image: "BWC001",
    name: "Woman bag with crochet strips",
    description:
      "Woman bag made with strips of crochet fabric, hand embroidered with chain handle internal finishing in leather, canvas and zipper",
    dimensions: "35 x 30 x 10",
    category: "Woman bag",
    technic: "Crochet",
    material: "Strips of fabric",
    price: "93",
  },
  {
    image: "BWC002",
    name: "Woman bag strips of crochet",
    description:
      "Woman bag made with strips of crochet fabric, handle in snake leather animal print and chain with leather finishing in zipper and contains two internal pockets, one of them with zipper and internal canvas lining",
    dimensions: "35 x 30 x 10",
    category: "Woman bag",
    technic: "Crochet",
    material: "Strips of fabric",
    price: "80",
  },
  {
    image: "CUL002",
    name: "Unisex coin purse",
    description:
      "Unisex coin purse made of blue snake leather animal print. With compartments for credit card, money and coins",
    dimensions: "8 x 10 cm x 0,5 mm",
    category: "Unisex coin purse",
    technic: "",
    material: "Leather",
    price: "30",
  },
  {
    image: "CUL003",
    name: "Unisex coin purse red",
    description:
      "Unisex coin purse made of red snake leather animal print. With compartments for credit card, money and coins with pressure button closure",
    dimensions: "8 x 10 cm x 0,5 mm",
    category: "Unisex coin purse",
    technic: "",
    material: "Leather",
    price: "30",
  },
  {
    image: "CUL004",
    name: "Unisex coin purse jaguar",
    description:
      "Unisex coin purse made of jaguar leather animal print. With compartments for credit card, money and coins with pressure button closure",
    dimensions: "8 x 10 cm x 0,5 mm",
    category: "Unisex coin purse",
    technic: "",
    material: "Leather",
    price: "30",
  },
  {
    image: "CUL005",
    name: "Unisex coin purse yellow",
    description:
      "Unisex coin purse made of yellow alligator leather animal print. With compartments for credit card, money and coins with pressure button closure",
    dimensions: "8 x 10 cm x 0,5 mm",
    category: "Unisex coin purse",
    technic: "",
    material: "Leather",
    price: "30",
  },
  {
    image: "CUL006",
    name: "Unisex coin purse red",
    description:
      "Unisex coin purse made of red snake leather animal print. With compartments for credit card, money and coins with pressure button closure",
    dimensions: "8 x 10 cm x 0,5 mm",
    category: "Unisex coin purse",
    technic: "",
    material: "Leather",
    price: "30",
  },
  {
    image: "PHL002",
    name: "Passport holder jaguar",
    description:
      "Passport holder made of jaguar leather animal print. With compartments for credit card, money, documents and passport",
    dimensions: "10,5 x 15 cm x 0,6 mm",
    category: "Passport holder",
    technic: "",
    material: "Leather",
    price: "35",
  },
  {
    image: "PHL003",
    name: "Passport holder green",
    description:
      "Passport holder made of green alligator leather animal print. With compartments for credit card, money, documents and passport",
    dimensions: "10,5 x 15 cm x 0,6 mm",
    category: "Passport holder",
    technic: "",
    material: "Leather",
    price: "35",
  },
  {
    image: "PHL004",
    name: "Passport holder brown",
    description:
      "Passport holder made of brown snake leather animal print. With compartments for credit card, money, documents and passport",
    dimensions: "10,5 x 15 cm x 0,6 mm",
    category: "Passport holder",
    technic: "",
    material: "Leather",
    price: "35",
  },
  {
    image: "PHL005",
    name: "Passport holder yellow",
    description:
      "Passport holder made of yellow alligator leather animal print. With compartments for credit card, money, documents and passport",
    dimensions: "10,5 x 15 cm x 0,6 mm",
    category: "Passport holder",
    technic: "",
    material: "Leather",
    price: "35",
  },
  {
    image: "PHL006",
    name: "Passport holder alligator",
    description:
      "Passport holder made of alligator leather animal print. With compartments for credit card, money, documents and passport",
    dimensions: "10,5 x 15 cm x 0,6 mm",
    category: "Passport holder",
    technic: "",
    material: "Leather",
    price: "35",
  },
  {
    image: "PHL007",
    name: "Passport holder blue",
    description:
      "Passport holder made of blue snake leather animal print. With compartments for credit card, money, documents and passport",
    dimensions: "10,5 x 15 cm x 0,6 mm",
    category: "Passport holder",
    technic: "",
    material: "Leather",
    price: "35",
  },
  {
    image: "PHL008",
    name: "Passport holder yellow",
    description:
      "Passport holder made of yellow alligator leather animal print. With compartments for credit card, money, documents and passport",
    dimensions: "10,5 x 15 cm x 0,6 mm",
    category: "Passport holder",
    technic: "",
    material: "Leather",
    price: "35",
  },
  {
    image: "WUL002",
    name: "Unisex wallet jaguar",
    description:
      "Unisex wallet made of jaguar leather animal print. With compartments for credit card, money and documents",
    dimensions: "9 x 12,5 cm x 0, 6 mm",
    category: "Unisex wallet",
    technic: "",
    material: "Leather",
    price: "30",
  },
  {
    image: "WUL003",
    name: "Unisex wallet yellow",
    description:
      "Unisex wallet made of yellow alligator leather animal print. With compartiments for credit card, money and documents",
    dimensions: "9 x 12,5 cm x 0,6 mm",
    category: "Unisex wallet",
    technic: "",
    material: "Leather",
    price: "30",
  },
  {
    image: "WUL004",
    name: "Unisex wallet alligator",
    description:
      "Unisex wallet made of alligator leather animal print. With compartiments for credit card, money and documents",
    dimensions: "9 x 12,5 cm x 0, 6 mm",
    category: "Unisex wallet",
    technic: "",
    material: "Leather",
    price: "30",
  },
  {
    image: "WUL005",
    name: "Unisex wallet yellow",
    description:
      "Unisex wallet made of yellow alligator leather animal print. With compartiments for credit card, money and documents",
    dimensions: "9 x 12,5 cm x 0,6 mm",
    category: "Unisex wallet",
    technic: "",
    material: "Leather",
    price: "30",
  },
  {
    image: "WUL006",
    name: "Unisex wallet piton",
    description:
      "Unisex wallet made of piton leather animal print. With compartments for credit card, money and documents",
    dimensions: "9 x 12,5 cm x 0,6 mm",
    category: "Unisex wallet",
    technic: "",
    material: "Leather",
    price: "30",
  },
  {
    image: "WWL002",
    name: "Woman wallet black",
    description:
      "Woman wallet made of black leather and crochet flowers decoration. With compartments for credit card, mobile phone, keys, money and documents with pressure button closure.",
    dimensions: "11 x 21 x 1,5 cm",
    category: "Woman wallet",
    technic: "",
    material: "Leather",
    price: "45",
  },
  {
    image: "WWL003",
    name: "Woman wallet white",
    description:
      "Woman wallet made of white alligator animal print and crochet flowers decoration. With compartments for credit card, mobil phone, keys, money and documents with pressure button closure",
    dimensions: "11 x 21 x 1,5 cm",
    category: "Woman wallet",
    technic: "",
    material: "Leather",
    price: "45",
  },
  {
    image: "WWL004",
    name: "Woman wallet jaguar",
    description:
      "Woman wallet made of jaguar leather animal print and crochet flowers decoration. With compartments for credit card, mobile phone, keys, money and documents with pressure button closure",
    dimensions: "11 x 21 x 1,5 cm",
    category: "Woman wallet",
    technic: "",
    material: "Leather",
    price: "45",
  },
  {
    image: "WWL005",
    name: "Woman wallet piton",
    description:
      "Woman wallet made of piton leather animal print and crochet flowers decoration. With compartments for credit card, mobile phone, keys, money and documents with pressure button closure",
    dimensions: "11 x 21 x 1,5 cm",
    category: "Woman wallet",
    technic: "",
    material: "Leather",
    price: "45",
  },
  {
    image: "WWL006",
    name: "Woman wallet yellow",
    description:
      "Womam wallet made with yellow leather and crochet flowers decoration. With compartments for credit card, mobile phone, keys, money and documents with pressure button closure",
    dimensions: "11 x 21 x 1,5 cm",
    category: "Woman wallet",
    technic: "",
    material: "Leather",
    price: "45",
  },
  {
    image: "WWL007",
    name: "Woman wallet red",
    description:
      "Woman wallet made with red snake leather animal print and fabric flowers decoration. With compartments for credit card, mobile phone, keys, money and documents with pressure button closure",
    dimensions: "11 x 21 x 1,5 cm",
    category: "Woman wallet",
    technic: "",
    material: "Leather",
    price: "45",
  },
  {
    image: "WWL008",
    name: "Woman wallet yellow",
    description:
      "Woman wallet made with yellow alligator leather animal print and fabric flowers decoration. With compartments for credit card, mobile phone, keys, money and documents with pressure button closure",
    dimensions: "11 x 21 x 1,5 cm",
    category: "Woman wallet",
    technic: "",
    material: "Leather",
    price: "45",
  },
  {
    image: "WWL009",
    name: "Womam wallet blue",
    description:
      "Womam wallet made of blue snake leather animal print and fabric flowers decoration. With compartments for credit card, mobile phone, keys, money and documents with pressure button closure",
    dimensions: "11 x 21 x 1,5 cm",
    category: "Woman wallet",
    technic: "",
    material: "Leather",
    price: "45",
  },
  {
    image: "PHL001",
    name: "Passport holder jaguar",
    description:
      "Passport holder made of jaguar leather animal print. With compartments for credit card, money, documents and passport",
    dimensions: "10,5 x 15 cm x 0,6 mm",
    category: "Passport holder",
    technic: "",
    material: "Leather",
    price: "35",
  },
  {
    image: "CUL001",
    name: "Unisex coin purse",
    description:
      "Unisex coin purse made of alligator animal print. With compartments for credit card, money, and coins with pressure button closure",
    dimensions: "8 x 10 cm x 0,5 mm",
    category: "Unisex coin purse",
    technic: "",
    material: "Leather",
    price: "30",
  },
  {
    image: "DCL002",
    name: "Dog collar blue - Size S",
    description:
      "Dog collar made of blue snake leather animal print internal lining in black leather",
    dimensions: "20/30",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "21",
  },

  {
    image: "DCL004",
    name: "Dog collar blue - Size L",
    description:
      "Dog collar made of blue snake leather animal print internal lining in black leather",
    dimensions: "40/50",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "48",
  },
  {
    image: "DCL004",
    name: "Dog collar blue - Size XL",
    description:
      "Dog collar made of blue snake leather animal print internal lining in black leather",
    dimensions: "50/60",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "61",
  },
  {
    image: "BWC003",
    name: "Woman bag strips of crochet",
    description:
      "Woman bag made with strips of crochet fabric, handle blue snake leather animal print and decoration in beads blue and silver with leather finishing in zipper and contains two internal pockets, one of them with zipper and internal canvas lining",
    dimensions: "30 x 35 x10 cm",
    category: "Woman bag",
    technic: "Crochet",
    material: "Strips of fabric",
    price: "90",
  },
  {
    image: "BWC004",
    name: "Woman bag strips of crochet",
    description:
      "Woman bag made of strips of crochet fabric, handle in black leather with fabric flowers and buttons decoration, with leather finishing in zipper and contains two internal pockets, one of them with zipper and internal canvas lining",
    dimensions: "30 x 35 x 10 cm",
    category: "Woman bag",
    technic: "Crochet",
    material: "Strips of fabric",
    price: "90",
  },
  {
    image: "WUL005",
    name: "Unisex wallet yellow",
    description:
      "Unisex wallet made of yellow alligator leather animal print. With compartiments for credit card, money and documents",
    dimensions: "9 x 12,5 cm x 0,6 mm",
    category: "Unisex wallet",
    technic: "",
    material: "Leather",
    price: 30,
  },
  {
    image: "BWC006",
    name: "Woman bag in crochet",
    description:
      "Woman bag in handmade crochet with cotton thread and leather handle and leather finishing with zipper. Internal polyester lining with two pockets, one of them with zipper",
    dimensions: "30 x 35 x 8 cm",
    category: "Woman bag",
    technic: "Crochet",
    material: "Cotton thread",
    price: "90",
  },
  {
    image: "BWC005",
    name: "Woman round crochet bag",
    description:
      "Woman round bag made in crochet and leather details, gold and leather chain handle with decoration in crochet flowers and fabric.  Zipper finishing, contains one internal zipper pocket and internal canvas lining",
    dimensions: "26 x 26 x 10 cm",
    category: "Woman bag",
    technic: "Crochet",
    material: "Leather and thread",
    price: "97",
  },
  {
    image: "BWC007",
    name: "Woman bag in crochet",
    description:
      "Woman bag handmade in crochet with cotton thread and leather handle with green beads decoration, leather finishing with zipper, internal polyester lining with two pockets, one of them with zipper",
    dimensions: "30 x 35 x 8 cm",
    category: "Woman bag",
    technic: "Crochet",
    material: "Cotton thread",
    price: "90",
  },
  {
    image: "BWL001",
    name: "Woman alligator leather bag",
    description:
      "Woman bag made of alligator leather animal print with smooth leather handle and zipper finishing, contains two internal pockets, one of them with zipper",
    dimensions: "30 x 38 x 10 cm",
    category: "Woman bag",
    technic: "",
    material: "Leather",
    price: "107",
  },
  {
    image: "BWL002",
    name: "Woman leather bag",
    description:
      "Woman bag made of leather with handle and details in smooth leather and zipper finishing, internal polyester lining, contains two internal pockets, one of them with zipper",
    dimensions: "30 x 35 x 10 cm",
    category: "Woman bag",
    technic: "",
    material: "Leather",
    price: "120",
  },
  {
    image: "BWL003",
    name: "Woman leather bag",
    description:
      "Woman bag made of smooth leather with handle and zipper finishing, and internal polyester lining, contains two internal pockets one of them with zipper and other external pockets with zipper",
    dimensions: "30 x 35 x 10 cm",
    category: "Woman bag",
    technic: "",
    material: "Leather",
    price: "128",
  },
  {
    image: "BWL004",
    name: "Woman clutch bag",
    description:
      "Woman clutch bag made of smooth leather with hand handle and zipper finishing, contains one internal pocket and decorated with leather aplication",
    dimensions: "20 x 35 x 1,5 cm",
    category: "Woman bag",
    technic: "",
    material: "Leather",
    price: "68",
  },
  {
    image: "BWL005",
    name: "Woman clutch bag",
    description:
      "Woman clutch bag made of smooth leather with hand handle and zipper finishing, contains one internal pocket and decorated with leather aplication",
    dimensions: "20 x 35 x 1,5 cm",
    category: "Woman bag",
    technic: "",
    material: "Leather",
    price: "68",
  },
  {
    image: "BWL006",
    name: "Woman clutch bag",
    description:
      "Woman clutch bag made of smooth leather with hand handle and zipper finishing, contains one internal pocket and decorated with crochet flowers aplication",
    dimensions: "20 x 35 x 1,5 cm",
    category: "Woman bag",
    technic: "",
    material: "Leather",
    price: "68",
  },
  {
    image: "BWL007",
    name: "Woman clutch bag",
    description:
      "Woman clutch bag made of smooth leather with hand handle and zipper finishing, contains one internal pocket and decorated with crochet flowers aplication",
    dimensions: "20 x 35 x 1,5 cm",
    category: "Woman bag",
    technic: "",
    material: "Leather",
    price: "68",
  },
  {
    image: "BWL008",
    name: "Woman clutch bag",
    description:
      "Woman clutch bag made of smooth leather with hand handle and zipper finishing, contains one internal pocket and decorated with leather fringes and crochet flowers aplication",
    dimensions: "20 x 35 x 1,5 cm",
    category: "Woman bag",
    technic: "",
    material: "Leather",
    price: "68",
  },
  {
    image: "BWL009",
    name: "Woman clutch bag",
    description:
      "Woman clutch bag made of smooth leather with hand handle and zipper finishing, contains one internal pocket and decorated with leather and crochet flowers aplication",
    dimensions: "20 x 35 x 1,5 cm",
    category: "Woman bag",
    technic: "",
    material: "Leather",
    price: "68",
  },
  {
    image: "BWL010",
    name: "Woman clutch bag",
    description:
      "Woman clutch bag made of jaguar leather animal print with hand handle and zipper finishing, contains one internal pocket and decorated with fringes and crochet flowers aplication",
    dimensions: "20 x 35 x 1,5 cm",
    category: "Woman bag",
    technic: "",
    material: "Leather",
    price: "68",
  },
  {
    image: "DCL005-1",
    name: "Dog collar yellow - Size S",
    description:
      "Dog collar made of yellow alligator leather animal print internal lining in black leather",
    dimensions: "S-20/30",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "21",
  },
  {
    image: "DCL005-2",
    name: "Dog collar yellow - Size M",
    description:
      "Dog collar made of yellow alligator leather animal print internal lining in black leather",
    dimensions: "M-30/40",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "33",
  },
  {
    image: "DCL005-3",
    name: "Dog collar yellow - Size L",
    description:
      "Dog collar made of yellow alligator leather animal print internal lining in black leather",
    dimensions: "L-40/50",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "48",
  },
  {
    image: "DCL005-4",
    name: "Dog collar yellow - Size XL",
    description:
      "Dog collar made of yellow alligator leather animal print internal lining in black leather",
    dimensions: "XL-50/60",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "61",
  },
  {
    image: "DCL003-1",
    name: "Dog collar leopard - Size S",
    description:
      "Dog collar made of leopard leather animal print internal lining in natural leather",
    dimensions: "S-20/30",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "21",
  },
  {
    image: "DCL003-2",
    name: "Dog collar leopard - Size M",
    description:
      "Dog collar made of leopard leather animal print internal lining in natural leather",
    dimensions: "M-30/40",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "33",
  },
  {
    image: "DCL003-3",
    name: "Dog collar leopard - Size L",
    description:
      "Dog collar made of leopard leather animal print internal lining in natural leather",
    dimensions: "L-40/50",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "48",
  },
  {
    image: "DCL003-4",
    name: "Dog collar leopard - Size XL",
    description:
      "Dog collar made of leopard leather animal print internal lining in natural leather",
    dimensions: "XL-50/60",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "61",
  },
  {
    image: "DCL004-1",
    name: "Dog collar tiger - Size S",
    description:
      "Dog collar made of tiger leather animal print internal lining in natural leather",
    dimensions: "S-20/30",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "21",
  },
  {
    image: "DCL004-2",
    name: "Dog collar tiger - Size M",
    description:
      "Dog collar made of tiger leather animal print internal lining in natural leather",
    dimensions: "M-30/40",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "33",
  },
  {
    image: "DCL004-3",
    name: "Dog collar tiger - Size L",
    description:
      "Dog collar made of tiger leather animal print internal lining in natural leather",
    dimensions: "L-40/50",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "48",
  },
  {
    image: "DCL004-4",
    name: "Dog collar tiger - Size XL",
    description:
      "Dog collar made of tiger leather animal print internal lining in natural leather",
    dimensions: "XL-50/60",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "61",
  },
  {
    image: "DCL006-1",
    name: "Dog collar jaguar - Size S",
    description:
      "Dog collar made of jaguar leather animal print internal lining in natural leather",
    dimensions: "S-20",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "21",
  },
  {
    image: "DCL006-2",
    name: "Dog collar jaguar  - Size M",
    description:
      "Dog collar made of jaguar leather animal print internal lining in natural leather",
    dimensions: "M-30/40",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "33",
  },
  {
    image: "DCL006-3",
    name: "Dog collar jaguar- Size L",
    description:
      "Dog collar made of jaguar leather animal print internal lining in natural leather",
    dimensions: "L-40/50",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "48",
  },
  {
    image: "DCL006-4",
    name: "Dog collar jaguar - Size XL",
    description:
      "Dog collar made of jaguar leather animal print internal lining in natural leather",
    dimensions: "XL-50/60",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "61",
  },
  {
    image: "DCL007-1",
    name: "Dog collar red - Size S",
    description:
      "Dog collar made of red snake leather animal print internal lining in black leather",
    dimensions: "S-20/30",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "21",
  },
  {
    image: "DCL007-2",
    name: "Dog collar red - Size M",
    description:
      "Dog collar made of red snake leather animal print internal lining in black leather",
    dimensions: "M-30/40",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "33",
  },
  {
    image: "DCL007-3",
    name: "Dog collar red - Size L",
    description:
      "Dog collar made of red snake leather animal print internal lining in black leather",
    dimensions: "L-40/50",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "48",
  },
  {
    image: "DCL007-4",
    name: "Dog collar red - Size XL",
    description:
      "Dog collar made of red snake leather animal print internal lining in black leather",
    dimensions: "XL-50/60",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "61",
  },
  {
    image: "DCL008-1",
    name: "Dog collar purple - Size S",
    description:
      "Dog collar made of purple cow leather animal print internal lining in black leather",
    dimensions: "S-20/30",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "21",
  },
  {
    image: "DCL008-2",
    name: "Dog collar purple - Size M",
    description:
      "Dog collar made of purple cow leather animal print internal lining in black leather",
    dimensions: "M-30/40",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "33",
  },
  {
    image: "DCL008-3",
    name: "Dog collar purple - Size L",
    description:
      "Dog collar made of purple cow leather animal print internal lining in black leather",
    dimensions: "L-40/50",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "48",
  },
  {
    image: "DCL008-4",
    name: "Dog collar purple - Size XL",
    description:
      "Dog collar made of purple cow leather animal print internal lining in black leather",
    dimensions: "XL-50/60",
    category: "Dog collar",
    technic: "",
    material: "Leather",
    price: "61",
  },
];

module.exports = products;
