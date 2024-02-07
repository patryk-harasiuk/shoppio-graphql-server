import { OrderNotFound } from "../../../../errors/orders";
import { getOrder } from "../../../../services/order";
import { calculateOrderTotalPrice } from "../../../../utils/calculateOrderTotalPrice";
import type { QueryResolvers } from "./../../../types.generated";

export const order: NonNullable<QueryResolvers["order"]> = async (
	_parent,
	{ id },
) => {
	try {
		const result = await getOrder(id);

		return {
			__typename: "OrderSuccess",
			order: {
				...result,
				totalPrice: calculateOrderTotalPrice(result.orderItems).toString(),
			},
		};
	} catch (error) {
		if (error instanceof OrderNotFound)
			return {
				__typename: "OrderNotFound",
				message: error.message,
			};
	}
};
