// import type { QueryResolvers } from "./../../../types.generated";

// export const order: NonNullable<QueryResolvers["order"]> = async (
// 	_parent,
// 	arg,
// 	ctx,
// ) => {
// 	/* Implement Query.order resolver logic here */
// 	const orderId = arg.id;
// 	const order = await ctx.prisma.order.findUnique({
// 		where: {
// 			id: orderId,
// 		},
// 		include: {
// 			orderItems: {
// 				include: {
// 					product: true,
// 				},
// 			},
// 		},
// 	});
// 	if (!order) return null;
// 	return order as any;
// };

import type { PrismaClient, Order } from "@prisma/client";
import { db } from "../utils/db";

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
	});
};

export const orders = Orders(db.order);
