import type {
	AddToOrderError,
	MutationResolvers,
} from "./../../../types.generated";
import {
	addItemToOrder,
	validateAddItemToOrder,
} from "../../../../services/order";

export const addToOrder: NonNullable<MutationResolvers["addToOrder"]> = async (
	_parent,
	arg,
) => {
	const { productId, quantity, orderId } = arg;

	if (!quantity)
		return {
			__typename: "AddToOrderPayload",
			orderErrors: [
				{
					__typename: "InvalidQuantity",
					message: "Provided quantity is invalid",
				},
			],
			order: null,
		};

	const errors: AddToOrderError[] = [];

	await validateAddItemToOrder(errors, productId, orderId);

	if (errors.length)
		return {
			__typename: "AddToOrderPayload",
			order: null,
			orderErrors: errors as any,
			// #TODO: resolve type issue here
		};

	const result = await addItemToOrder(productId, quantity, orderId);

	return {
		__typename: "AddToOrderPayload",
		order: result,
		orderErrors: [],
	};
};

// cloa2onur0001snx94149h9q5

// cloa2onur0002snx9pjrihv2n

// 74bc45ba-5e88-41e4-b647-2d081455bb01
