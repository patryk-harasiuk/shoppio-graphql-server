import { getProductsByCategory } from "../../../../services/product";
import type { QueryResolvers } from "./../../../types.generated";
export const productsByCategory: NonNullable<
	QueryResolvers["productsByCategory"]
> = async (_parent, { category, first, skip }, _ctx) => {
	const result = await getProductsByCategory(category, first, skip ?? 0);

	return result;
};
