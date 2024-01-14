import { removeItemFromOrder } from "../../../../services/order";
import type { MutationResolvers } from "./../../../types.generated";
export const removeOrderItem: NonNullable<
	MutationResolvers["removeOrderItem"]
> = async (_parent, arg, _ctx) => {
	/* Implement Mutation.removeOrderItem resolver logic here */
	const { orderId, productId } = arg;

	try {
		const result = await removeItemFromOrder(orderId, productId);

		return {
			__typename: "RemoveOrderItemPayload",
			removedItem: result,
			orderErrors: [],
		};
	} catch (error) {
		return {
			__typename: "RemoveOrderItemPayload",
			removedItem: null,
			orderErrors: [{ __typename: "OrderNotFound", message: "Not found" }],
		};
	}
};
