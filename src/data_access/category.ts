import type { PrismaClient, Category } from "@prisma/client";
import { db } from "../utils/db";

const Categories = (prismaCategories: PrismaClient["category"]) => {
	return Object.assign(prismaCategories, {
		async get() {
			const categories = await db.category.findMany();

			return categories;
		},
	});
};

export const categories = Categories(db.category);
