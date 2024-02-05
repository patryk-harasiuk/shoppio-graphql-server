import { addItemToOrder } from "../../../../services/order";
import type { MutationResolvers } from "./../../../types.generated";
export const addToOrder: NonNullable<MutationResolvers["addToOrder"]> = async (
	_parent,
	{ productId, quantity, orderId },
	_ctx,
) => {
	if (!quantity)
		return {
			__typename: "InvalidQuantity",
			message: "Provided quantity is invalid",
		};

	try {
		const result = await addItemToOrder(productId, quantity, orderId);

		return {
			__typename: "UpdatedOrder",
			order: result,
		};
	} catch (error) {
		console.log(error, "Error logged in resolver");
	}
};
