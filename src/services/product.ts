import { products } from "../data_access/product";
import { ApiError } from "../errors/apiError";
import { NotFoundError, isNotFoundError } from "../errors/notFound";

export const getProductById = async (id: string) => {
	try {
		const result = await products.getById(id);

		const formattedResult = { ...result, price: result.price.toString() };

		return formattedResult;
	} catch (error) {
		if (isNotFoundError(error)) {
			throw new NotFoundError(`Product with ${id} id was not found`);
		}

		throw new ApiError("Could not retrieve the product");
	}
};

export const getProducts = async (first: number, skip: number) => {
	try {
		const result = await products.get(first, skip);

		const formattedResult = result.map((item) => ({
			...item,
			price: item.price.toString(),
		}));

		return formattedResult;
	} catch {
		throw new ApiError("Could not retrieve products");
	}
};

export const getProductsByCategory = async (
	category: string,
	first: number,
	skip: number,
) => {
	try {
		const result = await products.getByCategory(category, first, skip);

		const formattedResult = result.map((item) => ({
			...item,
			price: item.price.toString(),
		}));

		return formattedResult;
	} catch {
		throw new ApiError("Could not retrieve products");
	}
};
