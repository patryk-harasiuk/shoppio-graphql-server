import type { InvalidQuantityResolvers } from "./../../types.generated";
export const InvalidQuantity: InvalidQuantityResolvers = {
	message: (parent) => parent.message,
};
