import type { QueryResolvers } from "./../../../types.generated";
export const productsByCategory: NonNullable<
	QueryResolvers["productsByCategory"]
> = async (_parent, args, ctx) => {
	args.first = args.first ?? 20;
	args.skip = args.skip ?? 0;

	const products = await ctx.prisma.product.findMany({
		take: args.first,
		skip: args.skip,
		include: {
			categories: true,
		},
		where: {
			categories: {
				some: {
					name: args.category,
				},
			},
		},
	});

	return products;
};
