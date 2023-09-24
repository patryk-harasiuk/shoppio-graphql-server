import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 5;

for (let i = 0; i < productsCount; i++) {
  const name = faker.commerce.productName();
  const slug = faker.helpers.slugify(name).toLowerCase();
  const description = faker.commerce.productDescription();
  const price = Number(faker.commerce.price()) * 100;

  const data = { name, slug, description, price };

  const createdProduct = await prisma.product.create({
    data,
  });

  console.log(`Created product with id: ${createdProduct.id}`);
}
