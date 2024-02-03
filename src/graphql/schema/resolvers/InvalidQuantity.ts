import type { InvalidQuantityResolvers } from "./../../types.generated";
export const InvalidQuantity: InvalidQuantityResolvers = {
	__isTypeOf: (parent) => parent.__typename === "InvalidQuantity",
	message: (parent) => parent.message,
};
