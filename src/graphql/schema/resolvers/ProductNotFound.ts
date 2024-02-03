import type { ProductNotFoundResolvers } from "./../../types.generated";
export const ProductNotFound: ProductNotFoundResolvers = {
	__isTypeOf: (parent) => parent.__typename === "ProductNotFound",
	message: (parent) => parent.message,
};
