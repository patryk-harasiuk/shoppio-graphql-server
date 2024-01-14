import { categories } from "../data_access/category";
import { ApiError } from "../errors/apiError";

export const getCategories = async () => {
	try {
		const result = await categories.get();

		return result;
	} catch (error) {
		throw new ApiError("Error occurred when retrieving categories");
	}
};
