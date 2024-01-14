import type { QueryResolvers } from "./../../../types.generated";
import { getCategories } from "../../../../services/category";

export const categories: NonNullable<QueryResolvers["categories"]> = async (
	_parent,
	_arg,
) => {
	try {
		const result = await getCategories();

		return result;
	} catch {
		return [];
	}
};
