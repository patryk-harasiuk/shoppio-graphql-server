import { OrderNotFound } from "../../../../errors/orders";
import { removeAllOrderItems } from "../../../../services/order";
import type { MutationResolvers } from "./../../../types.generated";
export const removeAllItemsFromOrder: NonNullable<
	MutationResolvers["removeAllItemsFromOrder"]
> = async (_parent, { orderId }, _ctx) => {
	try {
		await removeAllOrderItems(orderId);

		return {
			__typename: "RemoveAllItemsFromOrderSuccess",
			message: "success",
		};
	} catch (error) {
		if (error instanceof OrderNotFound) {
			return {
				__typename: "OrderNotFound",
				message: error.message,
			};
		}
	}
};
