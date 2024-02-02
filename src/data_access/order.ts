import type { PrismaClient } from "@prisma/client";
import { db } from "../utils/db";
import { Nullable } from "../types";
import { NotFoundError } from "./errors";

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

			if (!order) throw new NotFoundError(`Order with id ${id} does not exist`);

			return order;
		},

		async add(productId: string, quantity: number, orderId?: Nullable<string>) {
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

		async remove(orderId: string, productId: string) {
			const removedItem = await db.orderItem.delete({
				where: {
					orderId_productId: {
						orderId,
						productId,
					},
				},
				include: { product: { include: { categories: true } } },
			});

			return removedItem;
		},
	});
};

export const orders = Orders(db.order);
