import { renderUI } from "./index.js";
import { listOrder } from "./mock-data.js";

const setOrder = (type) => {
	console.log("[type]", type);
	// 1. Lấy order đang được active

	// find: lọc lấy ra một phần tử.
	// filter: lọc lấy ra nhiều phần tử => array.
	const orderActive = listOrder.find((order) => order.active);
	// TH1. Nếu nhưng type === loại đang được active thì mình sẽ đổi direction
	if (orderActive.type === type) {
		orderActive.direction =
			orderActive.direction === "asc" ? "desc" : "asc";
	} else {
		// TH2 Nếu không phải, thì mình sẽ đổi active qua cho thằng có
		// order.type = type
		listOrder.forEach((order) => {
			if (order.type === type) {
				order.active = true;
			} else {
				// Ẩn hết tất cả item khác type;
				order.active = false;
			}
		});
	}

	renderUI();
};

window.setOrder = setOrder;

export const renderListOrder = (listOrder) => {
	// 1. dom
	const boxOrder = document.getElementById("order-tab");
	// 2. lặp qua lấy content
	const content = listOrder.map((order) => {
		return `
		<li class="nav-item">
			<button onclick="setOrder('${order.type}')" class="nav-link ${
			order.active ? "active" : ""
		}" 		type="button">
				<span>
					${order.type}
				</span>
				<i class="fa-solid ${order.active ? "" : "d-none"}  fa-arrow-${
			order.direction === "asc" ? "down" : "up"
		}"></i>
			</button>
		</li>
		`;
	});
	// 3. dom.innerHTML = content.join('')
	boxOrder.innerHTML = content.join("");
};
