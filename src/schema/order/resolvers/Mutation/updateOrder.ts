import { updateItemOrderQuantity } from "../../../../services/order";
import { AddToOrderError } from "../../../../errors/orders";
import type { MutationResolvers } from "./../../../types.generated";
import { calculateOrderTotalPrice } from "../../../../utils/calculateOrderTotalPrice";
export const updateOrder: NonNullable<
	MutationResolvers["updateOrder"]
> = async (_parent, { productId, quantity, orderId }, _ctx) => {
	if (quantity < 0)
		return {
			__typename: "InvalidQuantity",
			message: "Provided quantity is invalid",
		};

	try {
		const result = await updateItemOrderQuantity(productId, quantity, orderId);

		return {
			__typename: "UpdatedOrder",
			order: {
				...result,
				totalPrice: calculateOrderTotalPrice(result.orderItems).toString(),
			},
		};
	} catch (error) {
		if (error instanceof AddToOrderError) {
			return {
				__typename: "AddToOrderError",
				message: error.message,
			};
		}
	}
};
