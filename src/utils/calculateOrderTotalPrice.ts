import { OrderItem } from "../schema/types.generated";

export const calculateOrderTotalPrice = (orderItems: OrderItem[]): number =>
	orderItems.reduce((totalPrice, orderItem) => {
		return totalPrice + Number(orderItem.product.price) * orderItem.quantity;
	}, 0);
