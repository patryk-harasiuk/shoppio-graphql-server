import { getProductById } from "../../../../services/product";
import type { QueryResolvers } from "./../../../types.generated";

export const product: NonNullable<QueryResolvers["product"]> = async (
	_parent,
	arg,
) => {
	const { id } = arg;

	try {
		const result = await getProductById(id);

		return {
			__typename: "GetProductPayload",
			product: result,
			productErrors: [],
		};
	} catch (error) {
		return {
			__typename: "GetProductPayload",
			product: null,
			productErrors: [{ __typename: "ProductNotFound", message: "Not found" }],
		};
	}
};
