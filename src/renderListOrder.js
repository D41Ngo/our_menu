export const renderListOrder = (listOrder) => {
	// 1. dom
	const boxOrder = document.getElementById("order-tab");
	// 2. lặp qua lấy content
	const content = listOrder.map((order) => {
		return `
		<li class="nav-item">
			<button class="nav-link" id="order-${order}-tab" data-bs-toggle="pill"
				data-bs-target="#order-${order}" type="button">
				<span>
					${order}
				</span>
				<i class="fa-solid fa-arrow-down"></i>
			</button>
		</li>
		`;
	});
	// 3. dom.innerHTML = content.join('')
	boxOrder.innerHTML = content.join("");
};
