// lấy sử dụng những tài nguyên được chia sẻ trong ứng dụng của chúng ta.
import { menu, listOrder } from "./mock-data.js";
import { renderListFood } from "./renderListFood.js";
import { renderListCategory } from "./renderListCategory.js";
import { renderListOrder } from "./renderListOrder.js";
// main
// chạy dự áp ở file này
renderListFood(menu);
// nó phải được gắn trước khi thằng khác gọi đến.
window.renderListFood = renderListFood;

renderListCategory(menu);

renderListOrder(listOrder);
