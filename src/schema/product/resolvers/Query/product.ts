import { ProductNotFound } from "../../../../errors/products";
import { getProductById } from "../../../../services/product";
import type { QueryResolvers } from "./../../../types.generated";
export const product: NonNullable<QueryResolvers["product"]> = async (
	_parent,
	{ id },
) => {
	try {
		const result = await getProductById(id);
		return {
			__typename: "ProductSuccess",
			product: { ...result, categories: [] },
		};
	} catch (error) {
		if (error instanceof ProductNotFound)
			return {
				__typename: "ProductNotFound",
				message: error.message,
			};
	}
};
