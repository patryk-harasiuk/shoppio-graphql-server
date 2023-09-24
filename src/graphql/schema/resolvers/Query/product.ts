import type { QueryResolvers } from "./../../../types.generated";
import { faker } from "@faker-js/faker";

export const product: NonNullable<QueryResolvers["product"]> = async (
  _parent,
  arg,
  _ctx
) => {
  const name = faker.commerce.productName();
  const slug = faker.helpers.slugify(name);
  const price = faker.number.int({ min: 100, max: 10000 });
  const description = faker.commerce.productDescription();

  return {
    id: arg.id,
    name,
    slug,
    price,
    description,
  };
};
