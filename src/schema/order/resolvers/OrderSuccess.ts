import type { OrderSuccessResolvers } from "./../../types.generated";
export const OrderSuccess: OrderSuccessResolvers = {
	order: (parent) => parent.order,
};
