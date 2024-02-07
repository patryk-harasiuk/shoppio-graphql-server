import type { PrismaClient } from "@prisma/client";
import { db } from "../utils/db";
import { Nullable } from "../types";
import { DataAccessError, NotFoundError } from "./errors";

const Orders = (prismaOrders: PrismaClient["order"]) => {
	return Object.assign(prismaOrders, {
		async getById(id: string) {
			const order = await db.order.findUnique({
				where: { id },

				include: {
					orderItems: {
						include: { product: { include: { categories: true } } },
					},
				},
			});

			if (!order) throw new NotFoundError(`Order with id ${id} does not exist`);

			return order;
		},

		async updateQuantity(
			productId: string,
			quantity: number,
			orderId?: Nullable<string>,
		) {
			if (!orderId) {
				const newOrder = await db.order.create({
					data: {
						status: "pending",

						orderItems: {
							create: {
								quantity,
								product: {
									connect: {
										id: productId,
									},
								},
							},
						},
					},
					include: {
						orderItems: {
							include: { product: { include: { categories: true } } },
						},
					},
				});

				return newOrder;
			}

			const order = await db.order.findUnique({ where: { id: orderId } });

			if (!order)
				throw new NotFoundError(`Order with ${orderId} was not found`);

			if (order.status !== "pending")
				throw new DataAccessError(`Order with ${orderId} has invalid status`);

			const product = await db.product.findUnique({ where: { id: productId } });

			if (!product)
				throw new NotFoundError(`Product with ${productId} was not found`);

			const currentOrder = await db.order.update({
				where: {
					id: orderId,
				},
				data: {
					orderItems: {
						upsert: {
							where: {
								orderId_productId: {
									orderId,
									productId,
								},
							},
							create: {
								quantity,
								productId,
							},
							update: {
								quantity: { increment: quantity },
							},
						},
					},
				},
				include: {
					orderItems: {
						include: { product: { include: { categories: true } } },
					},
				},
			});

			return currentOrder;
		},

		async removeAll(orderId: string) {
			try {
				await db.order.update({
					where: { id: orderId },
					data: {
						orderItems: {},
					},
				});
			} catch (error) {
				console.log(error, "error logged in data access");
			}
		},
	});
};

export const orders = Orders(db.order);
