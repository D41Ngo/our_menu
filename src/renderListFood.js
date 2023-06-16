export const renderListFood = (listFood) => {
	const boxFood = document.getElementById("list-food");
	// for lặp qua, để render. lấy được tất cả các card item
	// for; forEach; reduce; map; for of; for in.
	// reduce: trả về một giá trị.
	// map sẽ trả về array, mảng các giá trị.
	const content = listFood.map((food) => {
		// destructuring
		const { img, title, price, desc } = food;
		// var img = food.img;
		// var title = food.title;
		return `
		<div class="col-4 mt-2">
			<!-- card -->
			<div class="card" style="width: 18rem;">
				<img src="${img}" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title d-flex justify-content-between">
						<span>
							${title}
						</span>
						<div class="badge bg-warning">$${price}</button>
					</h5>
					<p class="card-text">${desc}</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
		`;
	});

	// mong muốn là một string. Nhưng kq là array.
	// array => string; method join của array
	// string rỗng, không muốn các phần tử nối lại cách nhau một cái gì hết. nếu muốn các phần tử cách nhau bởi $ => join('$')
	boxFood.innerHTML = content.join("");
};
