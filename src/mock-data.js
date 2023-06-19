// export: chia sẻ cho nó có thể dùng ở nhiều nơi khác trong ứng dụng của chúng ta.
// thực thi bên này 1.
export const menu = [
	{
		id: 1,
		title: "buttermilk pancakes",
		category: "breakfast",
		price: 15.99,
		img: "public/images/item-1.jpeg",
		desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
	},
	{
		id: 2,
		title: "diner double",
		category: "lunch",
		price: 13.99,
		img: "public/images/item-2.jpeg",
		desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
	},
	{
		id: 3,
		title: "godzilla milkshake",
		category: "shakes",
		price: 6.99,
		img: "public/images/item-3.jpeg",
		desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
	},
	{
		id: 4,
		title: "country delight",
		category: "breakfast",
		price: 20.99,
		img: "public/images/item-4.jpeg",
		desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, ",
	},
	{
		id: 5,
		title: "egg attack",
		category: "lunch",
		price: 22.99,
		img: "public/images/item-5.jpeg",
		desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up ",
	},
	{
		id: 6,
		title: "oreo dream",
		category: "shakes",
		price: 18.99,
		img: "public/images/item-6.jpeg",
		desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
	},
	{
		id: 7,
		title: "bacon overflow",
		category: "breakfast",
		price: 8.99,
		img: "public/images/item-7.jpeg",
		desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird ",
	},
	{
		id: 8,
		title: "american classic",
		category: "lunch",
		price: 12.99,
		img: "public/images/item-8.jpeg",
		desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  ",
	},
	{
		id: 9,
		title: "quarantine buddy",
		category: "shakes",
		price: 16.99,
		img: "public/images/item-9.jpeg",
		desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
	},
];

class Es6Order {
	// constructor: Hàm khởi tạo.
	constructor(type, active, direction) {
		this.type = type;
		this.active = active;
		this.direction = direction;
	}
}

// code trên file html: static => tĩnh.
export const listOrder = [
	new Es6Order("price", true, "asc"),
	new Es6Order("title", false, "desc"),
];

// es5: function constructor
function Es5Order(type, active, direction) {
	this.type = type;
	this.active = active;
	this.direction = direction;
}

const listOrderEs5 = [
	new Es5Order("price", true, "asc"),
	new Es5Order("title", false, "desc"),
];

const listOrderEs6 = [
	new Es6Order("price", true, "asc"),
	new Es6Order("title", false, "desc"),
];
