import type { QueryResolvers } from "./../../../types.generated";
export const products: NonNullable<QueryResolvers["products"]> = async (
	_parent,
	args,
	ctx,
) => {
	args.first = args.first ?? 20;
	args.skip = args.skip ?? 0;

	const products = await ctx.prisma.product.findMany({
		take: args.first,
		skip: args.skip,
		include: {
			categories: true,
		},
	});

	return products.map((product) => ({
		...product,
		price: Number(product.price),
	}));
};
