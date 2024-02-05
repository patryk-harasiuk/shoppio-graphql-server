import { OrderNotFound } from "../../../../errors/orders";
import { getOrder } from "../../../../services/order";
import type { QueryResolvers } from "./../../../types.generated";

export const order: NonNullable<QueryResolvers["order"]> = async (
	_parent,
	{ id },
) => {
	try {
		const result = await getOrder(id);

		return {
			__typename: "OrderSuccess",
			order: result,
		};
	} catch (error) {
		if (error instanceof OrderNotFound)
			return {
				__typename: "OrderNotFound",
				message: error.message,
			};
	}
};
