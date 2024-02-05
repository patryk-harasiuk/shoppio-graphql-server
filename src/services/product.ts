import { products } from "../data_access/product";
import { ApiError } from "../errors/apiError";
import { NotFoundError } from "../data_access/errors";
import { ProductNotFound } from "../errors/products";

export const getProductById = async (id: string) => {
	try {
		const result = await products.getById(id);

		const formattedResult = { ...result, price: result.price.toString() };

		return formattedResult;
	} catch (error) {
		if (error instanceof NotFoundError) {
			throw new ProductNotFound(`Product with ${id} id was not found`);
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

export const getProductCategories = async (id: string) => {
	const result = await products.findUnique({ where: { id } }).categories();

	return result || [];
};
