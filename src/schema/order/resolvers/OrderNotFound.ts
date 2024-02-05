import type { OrderNotFoundResolvers } from "./../../types.generated";
export const OrderNotFound: OrderNotFoundResolvers = {
	message: (parent) => parent.message,
};
