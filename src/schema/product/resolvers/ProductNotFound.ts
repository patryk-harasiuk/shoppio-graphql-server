import type { ProductNotFoundResolvers } from "./../../types.generated";
export const ProductNotFound: ProductNotFoundResolvers = {
	message: (parent) => parent.message,
};
