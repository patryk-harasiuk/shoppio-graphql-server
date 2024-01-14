import { getOrder } from "../../../../services/order";
import type { QueryResolvers } from "./../../../types.generated";

export const order: NonNullable<QueryResolvers["order"]> = async (
	_parent,
	arg,
) => {
	const { id } = arg;

	try {
		const result = await getOrder(id);

		return {
			__typename: "GetOrderPayload",
			order: result,
			orderErrors: [],
		};
	} catch {
		return {
			__typename: "GetOrderPayload",
			orderErrors: [{ __typename: "OrderNotFound", message: "Not found" }],
			order: null,
		};
	}
};
