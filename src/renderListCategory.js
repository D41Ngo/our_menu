let typeCategory = "all";

const setCategory = (category) => {
	// 1. set lại giá trị loại sản phẩm
	typeCategory = category;

	console.log("[typeCategory]", typeCategory);
	// 2. render lại giao diện.
};
//

window.setCategory = setCategory; // gắn function này cho toàn bộ dự án ở đâu cũng gọi được. đối với type='module' làm như vậy để có thể hoạt động được.

export const renderListCategory = (listFood) => {
	// 1. lấy tất cả những category có trong listFood.
	const listCategory = [];
	for (const food of listFood) {
		// 1. Kiểm tra coi thử listCategory có loại food.category?
		// includes: method của array để kiểm tra xem thử phần tử đó tồn tại trong mảng hay chưa.
		/**
		 * tồn tại: true
		 * chưa: false
		 */
		const isExist = listCategory.includes(food.category);
		// nếu chưa có thì mình push.
		// if (!isExist) {
		if (isExist === false) {
			listCategory.push(food.category);
		}
		// - nếu có rồi thì không làm gì hết
	}

	// dom
	const boxCategory = document.getElementById("category-tab");

	// listCategory.unshift("all");
	// 2. lặp qua từng phần tử
	// tạo một array mới, thêm chữ 'All' và copy các phần tử của listCategory
	const contentCategory = ["all", ...listCategory].map((category) => {
		return `
		<li class="nav-item">
			<button onclick="setCategory('${category}')" style="text-transform: capitalize;" class="nav-link" id="category-${category}-tab" data-bs-toggle="pill"
				data-bs-target="#category-${category}" type="button">${category}</button>
		</li>
		`;
	});
	// 3. dom.innerHTML = contentCategory.
	boxCategory.innerHTML = contentCategory.join("");
};
