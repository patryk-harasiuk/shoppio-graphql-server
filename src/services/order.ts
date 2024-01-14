import { orders } from "../data_access/order";
import { ApiError } from "../errors/apiError";
import { NotFoundError, isNotFoundError } from "../errors/notFound";
import { Nullable } from "../types";
import { formatPriceInOrder } from "../utils/formatPrice";

export const getOrder = async (id: string) => {
	try {
		const result = await orders.getById(id);

		const formattedResult = {
			status: result.status,
			id: result.id,
			orderItems: result.orderItems.map((item) => ({
				...item,
				product: { ...item.product, price: item.product.price.toString() },
			})),
		};

		return formattedResult;
	} catch (error) {
		if (isNotFoundError(error)) {
			throw new NotFoundError(`Order with ${id} id was not found`);
		}

		throw new ApiError("Could not retrieve the order");
	}
};

export const addItemToOrder = async (
	productId: string,
	quantity: number,
	orderId?: Nullable<string>,
) => {
	try {
		const result = await orders.add(productId, quantity, orderId);

		const formattedResult = {
			status: result.status,
			id: result.id,
			orderItems: result.orderItems.map((item) => ({
				...item,
				product: { ...item.product, price: item.product.price.toString() },
			})),
		};

		return formattedResult;
	} catch (error) {
		console.log(error, "errrrrOR");

		throw new Error("sdas");
	}
};

export const removeItemFromOrder = async (
	orderId: string,
	productId: string,
) => {
	try {
		const result = await orders.remove(orderId, productId);

		const formattedResult = {
			...result,
			product: { ...result.product, price: result.product.price.toString() },
		};

		return formattedResult;
	} catch (error) {
		console.log(error, "errrrrOR");

		throw new Error("sdas");
	}
};

// addToOrder(orderId: ID, productId: ID!, quantity: Int!): AddToOrderPayload!
// removeOrderItem(orderId: ID!, orderItemId: ID!): RemoveOrderItemPayload!
// }
