import type { PrismaClient } from "@prisma/client";
import { db } from "../utils/db";

const Orders = (prismaOrders: PrismaClient["order"]) => {
	return Object.assign(prismaOrders, {
		async getById(id: string) {
			const order = await db.order.findFirst({
				where: { id },

				include: {
					orderItems: {
						include: { product: { include: { categories: true } } },
					},
				},
			});

			if (!order) throw new Error(`Order with id ${id} does not exist`);

			return order;
		},

		async add(productId: string, quantity: number, orderId?: string) {
			const product = await db.product.findFirst({ where: { id: productId } });

			if (!product) {
				throw new Error(`Product with ${productId} id does not exist`);
			}

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
