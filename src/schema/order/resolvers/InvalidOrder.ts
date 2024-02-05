import type { InvalidOrderResolvers } from "./../../types.generated";
export const InvalidOrder: InvalidOrderResolvers = {
	message: (parent) => parent.message,
};
