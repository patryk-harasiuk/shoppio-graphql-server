import { getProductsByCategory } from "../../../../services/product";
import type { QueryResolvers } from "./../../../types.generated";

export const productsByCategory: NonNullable<
	QueryResolvers["productsByCategory"]
> = async (_parent, args, ctx) => {
	const { category, first, skip } = args;

	try {
		const result = await getProductsByCategory(category, first, skip ?? 0);

		return result;
	} catch (error) {
		return [];
	}
};
