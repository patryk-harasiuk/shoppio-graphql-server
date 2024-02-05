import { getCategories } from "../../../../services/category";
import type { QueryResolvers } from "./../../../types.generated";
export const categories: NonNullable<
	QueryResolvers["categories"]
> = async () => {
	const result = await getCategories();

	return result;
};
