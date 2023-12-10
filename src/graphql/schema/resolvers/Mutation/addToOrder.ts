import type { MutationResolvers } from "./../../../types.generated";
export const addToOrder: NonNullable<MutationResolvers["addToOrder"]> = async (
	_parent,
	arg,
	ctx,
) => {
	/* Implement Mutation.addToOrder resolver logic here */

	const { productId, quantity, orderId } = arg;

	const product = await ctx.prisma.product.findFirst({
		where: {
			id: productId,
		},
	});

	if (!product) {
		throw new Error(`Product with ${productId} id does not exist`);
	}

	if (!orderId) {
		const newOrder = await ctx.prisma.order.create({
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

	const currentOrder = await ctx.prisma.order.update({
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
};
