import type { QueryResolvers } from "./../../../types.generated";

export const product: NonNullable<QueryResolvers["product"]> = async (
	_parent,
	arg,
	ctx,
) => {
	const product = await ctx.prisma.product.findUnique({
		where: {
			id: arg.id,
		},
		include: {
			categories: true,
		},
	});

	if (!product) return null;

	const {
		createdAt,
		description,
		id,
		name,
		price,
		slug,
		updatedAt,
		categories,
	} = product;

	return {
		id,
		name,
		description,
		price,
		slug,
		createdAt,
		updatedAt,
		categories,
		// categories: [],
	};
};
