import { removeItemFromOrder } from "../../../../services/order";
import type { MutationResolvers } from "./../../../types.generated";
export const removeOrderItem: NonNullable<
	MutationResolvers["removeOrderItem"]
> = async (_parent, { orderId, productId }) => {
	try {
		const result = await removeItemFromOrder(orderId, productId);

		return {
			__typename: "RemovedOrderItem",
			removedItem: result,
		};
	} catch (error) {
		console.log(error, "error in resolver");
	}
};
