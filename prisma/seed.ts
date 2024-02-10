import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const PRODUCTS_COUNT = 5;

const createCategoryAndProducts = async (
	categoryName: string,
	productsCount: number,
) => {
	const productsArray = [];

	for (let i = 0; i < productsCount; i++) {
		const name = faker.commerce.productName();
		const description = faker.commerce.productDescription();
		const price = Number(faker.commerce.price()) * 100;
		// const price = new Prisma.Decimal(faker.commerce.price())

		const data = { name, description, price };

		productsArray.push(data);
	}

	await prisma.category.create({
		data: {
			name: categoryName,
			products: {
				create: productsArray,
			},
		},
	});
};

await createCategoryAndProducts("clothing", PRODUCTS_COUNT);
await createCategoryAndProducts("shoes", PRODUCTS_COUNT);
await createCategoryAndProducts("accessories", PRODUCTS_COUNT);
