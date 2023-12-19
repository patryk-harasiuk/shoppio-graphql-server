import { orders } from "../../../../data_access/order";
import type { QueryResolvers } from "./../../../types.generated";

export const order: NonNullable<QueryResolvers["order"]> = async (
	_parent,
	arg,
) => {
	const orderId = arg.id;
	const order = await orders.getById(orderId);
	return order;
};
