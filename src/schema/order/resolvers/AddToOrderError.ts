import type { AddToOrderErrorResolvers } from "./../../types.generated";
export const AddToOrderError: AddToOrderErrorResolvers = {
	message: (parent) => parent.message,
};
