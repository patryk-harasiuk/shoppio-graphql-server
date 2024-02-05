import { orders } from "../data_access/order";
import { ApiError } from "../errors/apiError";
import { NotFoundError } from "../data_access/errors";
import { Nullable } from "../types";

import { OrderNotFound } from "../errors/orders";

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
		if (error instanceof NotFoundError) {
			throw new OrderNotFound(`Order with ${id} id was not found`);
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
		console.log(error, "error logged in service");

		throw new ApiError("Could not add to the order");
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
		console.log(error, "error logged");

		throw new ApiError("Could not remove from order");
	}
};
