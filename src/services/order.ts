import { orders } from "../data_access/order";
import { ApiError } from "../errors/apiError";
import { DataAccessError, NotFoundError } from "../data_access/errors";
import { Nullable } from "../types";

import { OrderNotFound } from "../errors/orders";
import { AddToOrderError } from "../errors/orders";
import { isPrismaNotFoundError } from "../utils/isPrismaNotFoundError";

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

export const updateItemOrderQuantity = async (
	productId: string,
	quantity: number,
	orderId?: Nullable<string>,
) => {
	try {
		const result = await orders.updateQuantity(productId, quantity, orderId);

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
		if (error instanceof NotFoundError || error instanceof DataAccessError)
			throw new AddToOrderError(error.message);

		throw new ApiError("Could not add to the order");
	}
};

export const removeAllOrderItems = async (orderId: string) => {
	try {
		await orders.removeAll(orderId);
	} catch (error) {
		if (isPrismaNotFoundError(error)) {
			throw new OrderNotFound(`Order with ${orderId} id was not found`);
		}

		throw new ApiError("Could not remove items from order");
	}
};
