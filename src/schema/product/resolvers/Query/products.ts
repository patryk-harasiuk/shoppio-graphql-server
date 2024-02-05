import { getProducts } from "../../../../services/product";
import type { QueryResolvers } from "./../../../types.generated";
export const products: NonNullable<QueryResolvers["products"]> = async (
	_parent,
	{ first, skip },
	_ctx,
) => {
	const result = await getProducts(first, skip ?? 0);

	return result;
};
