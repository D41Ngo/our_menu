// lấy sử dụng những tài nguyên được chia sẻ trong ứng dụng của chúng ta.
import { menu, listOrder } from "./mock-data.js";
import { renderListFood } from "./renderListFood.js";
import {
	getListCategory,
	renderListCategory,
	activeCategory,
} from "./renderListCategory.js";
import { renderListOrder } from "./renderListOrder.js";
// main
// chạy dự áp ở file này
// 1->2->3->4->5: đồng bộ.
// 1->3->2:
const getListFoodByCategory = (category, listFood) => {
	if (category.toLowerCase() === "all") return listFood;

	// Lọc lấy ra những item thỏa mãn điều kiện, return về true.
	const newListFood = listFood.filter((food) => {
		// Bắt buộc có return;
		return food.category === category; // Điều kiện
	});
	return newListFood;
};

const getListFoodBySearch = (listFood) => {
	const newListFood = listFood.filter((food) => {
		// trim: loại bỏ khoảng trống của chuỗi, đầu và cuối.
		// '              '.trim() => ''
		return food.title
			.toLowerCase()
			.includes(searchKeyword.toLowerCase().trim());
	});

	return newListFood;
};

const getListFoodByOrder = (listFood) => {
	const orderActive = listOrder.find((order) => order.active);
	let newListFood = [];
	if (orderActive.type === "title") {
		// sắp xếp theo chữ.
		if (orderActive.direction === "asc") {
			// sort: sẽ thay đổi array gốc.
			// toSorted: method mới của array: không thay đổi mảng gốc.
			newListFood = [...listFood].sort((food2, food1) => {
				return food2.title
					.toLowerCase()
					.localeCompare(food1.title.toLowerCase());
			});
		}

		if (orderActive.direction === "desc") {
			newListFood = [...listFood].sort((food2, food1) => {
				return food1.title
					.toLowerCase()
					.localeCompare(food2.title.toLowerCase());
			});
		}
	}

	if (orderActive.type === "price") {
		// sắp xếp theo số.
		// method sort.
		/**
		 * [1,3,2,9,5,6]
		 * asc: expect => [1,2,3,5,6,9]
		 * desc: expect => [9,6,5,3,2,1]
		 *
		 * sothu2 > sothu1: asc
		 * sothu2 - sothu1
		 *
		 * sothu1 > sothu2: desc
		 * sothu1 - sothu2
		 *
		 * return:
		 *  1  => không hoán đổi.
		 *  -1 => hoán đổi vị trí cho nhau.
		 * 	0 => giữ nguyên không hoán đổi.
		 */
		if (orderActive.direction === "asc") {
			// sort: sẽ thay đổi array gốc.
			// toSorted: method mới của array: không thay đổi mảng gốc.
			newListFood = [...listFood].sort((food2, food1) => {
				return food2.price - food1.price;
			});
		}

		if (orderActive.direction === "desc") {
			newListFood = [...listFood].sort((food2, food1) => {
				return food1.price - food2.price;
			});
		}
	}

	return newListFood;
};

// f2: Đổi tên đồng loạt.
export const renderUI = () => {
	const listFoodByCategory = getListFoodByCategory(activeCategory, menu);

	const listsFoodBySearch = getListFoodBySearch(listFoodByCategory);

	const listFoodByOrder = getListFoodByOrder(listsFoodBySearch);

	renderListFood(listFoodByOrder);

	// --------------
	const listCategory = getListCategory(menu);
	renderListCategory(listCategory);
	// --------------

	renderListOrder(listOrder);
};

let searchKeyword = "";

document.getElementById("btn-search").addEventListener("click", () => {
	const txt = document.getElementById("text-search").value;

	searchKeyword = txt;
	// render lại UI.
	renderUI();
});

renderUI();
