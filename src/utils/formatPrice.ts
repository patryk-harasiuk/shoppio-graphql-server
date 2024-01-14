import { Order } from "../graphql/types.generated";

export const formatPriceInOrder = (order: Omit<Order, "__typename">) => {
	return order.orderItems.map((item) => ({
		...item,
		product: { ...item?.product, price: item?.product.price.toString() },
	}));
};
