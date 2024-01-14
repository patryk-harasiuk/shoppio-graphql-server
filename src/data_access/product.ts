import type { PrismaClient } from "@prisma/client";
import { Nullable } from "../types";
import { db } from "../utils/db";

const Products = (prismaProducts: PrismaClient["product"]) => {
	return Object.assign(prismaProducts, {
		async getById(id: string) {
			const product = await db.product.findFirst({
				where: {
					id,
				},
				include: { categories: true },
			});

			if (!product) throw new Error(`Product with id ${id} does not exist`);

			return product;
		},

		async get(first: number, skip?: Nullable<number>) {
			const products = await db.product.findMany({
				take: first ?? 20,
				skip: skip ?? 0,
				include: {
					categories: true,
				},
			});

			return products;
		},

		async getByCategory(category: string, first: number, skip: number) {
			const products = await db.product.findMany({
				take: first ?? 20,
				skip: skip ?? 0,
				include: {
					categories: true,
				},
				where: {
					categories: {
						some: {
							name: category,
						},
					},
				},
			});

			return products;
		},
	});
};

export const products = Products(db.product);
