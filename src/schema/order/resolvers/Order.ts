import type { OrderResolvers } from "./../../types.generated";
export const Order: OrderResolvers = {
	id: (parent) => parent.id,
	orderItems: (parent) => parent.orderItems,
	status: (parent) => parent.status,
};
