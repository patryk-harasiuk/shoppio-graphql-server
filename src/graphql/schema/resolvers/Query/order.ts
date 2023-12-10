import type { QueryResolvers } from "./../../../types.generated";

export const order: NonNullable<QueryResolvers["order"]> = async (
	_parent,
	arg,
	ctx,
) => {
	/* Implement Query.order resolver logic here */
	const orderId = arg.id;
	const order = await ctx.prisma.order.findUnique({
		where: {
			id: orderId,
		},
		include: {
			orderItems: {
				include: {
					product: true,
				},
			},
		},
	});
	if (!order) return null;
	return order as any;
};
