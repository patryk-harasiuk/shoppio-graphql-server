import type { QueryResolvers } from "./../../../types.generated";
export const categories: NonNullable<QueryResolvers["categories"]> = async (
	_parent,
	_arg,
	ctx,
) => {
	const categories = await ctx.prisma.category.findMany();

	return categories;
};
