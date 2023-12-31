// extend type Query {
// 	order(id: ID!): Order
// }

// type Mutation {
// 	addToOrder(orderId: ID, productId: ID!, quantity: Int!): Order
// 	removeOrderItem(orderId: ID!, orderItemId: ID!): Order
// 	removeOrderItems(orderId: ID!): Order
// 	updateOrderItemQuantity(orderId: ID!, orderItemId: ID!): Order
// }

import type { PrismaClient, Order } from "@prisma/client";
import { db } from "../utils/db";
import { products } from "./product";

const Orders = (prismaOrders: PrismaClient["order"]) => {
	return Object.assign(prismaOrders, {
		async getById(id: string) {
			const order = await db.order.findFirst({
				where: { id },
				include: {
					orderItems: {
						include: {
							product: true,
						},
					},
				},
			});

			if (!order) throw new Error(`Order with id ${id} does not exist`);

			return order;
		},

		async add(productId: string, quantity: number, orderId?: string) {
			const product = await products.getById(productId);

			if (!product)
				throw new Error(`Product with ${productId} id does not exist`);

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
	});
};

export const orders = Orders(db.order);
