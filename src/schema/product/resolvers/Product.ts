import { getProductCategories } from "../../../services/product";
import type { ProductResolvers } from "./../../types.generated";
export const Product: ProductResolvers = {
	id: (parent) => parent.id,
	createdAt: (parent) => parent.createdAt,
	updatedAt: (parent) => parent.updatedAt,
	description: (parent) => parent.description,
	name: (parent) => parent.name,
	price: (parent) => parent.price,
	async categories({ id }) {
		const categories = await getProductCategories(id);

		return categories;
	},
};
