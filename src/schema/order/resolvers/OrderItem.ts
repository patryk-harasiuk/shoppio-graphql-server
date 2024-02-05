import type { OrderItemResolvers } from "./../../types.generated";
export const OrderItem: OrderItemResolvers = {
	product: (parent) => parent.product,
	quantity: (parent) => parent.quantity,
};
