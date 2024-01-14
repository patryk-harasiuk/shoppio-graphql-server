import type { MutationResolvers } from "./../../../types.generated";
import { addItemToOrder } from "../../../../services/order";

export const addToOrder: NonNullable<MutationResolvers["addToOrder"]> = async (
	_parent,
	arg,
) => {
	const { productId, quantity, orderId } = arg;

	try {
		const result = await addItemToOrder(productId, quantity, orderId);

		return {
			__typename: "AddToOrderPayload",
			order: result,
			orderErrors: [],
		};
	} catch (error) {
		return {
			__typename: "AddToOrderPayload",
			order: null,
			orderErrors: [{ __typename: "OrderNotFound", message: "Not found" }],
		};
	}
};

// cloa2onur0001snx94149h9q5

// cloa2onur0002snx9pjrihv2n
