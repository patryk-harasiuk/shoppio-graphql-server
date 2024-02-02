import { orders } from "../data_access/order";
import { ApiError } from "../errors/apiError";
import { NotFoundError, isNotFoundError } from "../data_access/errors";
import { Nullable } from "../types";
import {
	AddToOrderError,
	InvalidOrder,
	OrderNotFound,
	ProductNotFound,
} from "../graphql/types.generated";
import { OrderNotFound as OrderNotFoundError } from "../errors/orders";
import { products } from "../data_access/product";

export const validateAddItemToOrder = async (
	errors: Array<AddToOrderError>,
	productId: string,
	orderId?: Nullable<string>,
) => {
	try {
		await products.getById(productId);
	} catch (error) {
		if (error instanceof NotFoundError)
			errors.push({
				__typename: "ProductNotFound",
				message: error.message,
			} as ProductNotFound);
	}

	try {
		if (orderId) {
			const order = await orders.getById(orderId);

			order.status === "completed" &&
				errors.push({
					__typename: "InvalidOrder",
					message: "Cannot add to completed order",
				} as InvalidOrder);
		}
	} catch (error) {
		if (error instanceof NotFoundError)
			errors.push({
				__typename: "OrderNotFound",
				message: error.message,
			} as OrderNotFound);
	}
};

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
			throw new OrderNotFoundError(`Order with ${id} id was not found`);
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
		throw new ApiError("Could not add to the cart");
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
