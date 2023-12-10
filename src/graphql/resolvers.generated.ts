/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Category } from "./schema/resolvers/Category";
import { Decimal } from "./schema/resolvers/Decimal";
import { addToOrder as Mutation_addToOrder } from "./schema/resolvers/Mutation/addToOrder";
import { removeOrderItem as Mutation_removeOrderItem } from "./schema/resolvers/Mutation/removeOrderItem";
import { removeOrderItems as Mutation_removeOrderItems } from "./schema/resolvers/Mutation/removeOrderItems";
import { updateOrderItemQuantity as Mutation_updateOrderItemQuantity } from "./schema/resolvers/Mutation/updateOrderItemQuantity";
import { Order } from "./schema/resolvers/Order";
import { OrderItem } from "./schema/resolvers/OrderItem";
import { Product } from "./schema/resolvers/Product";
import { categories as Query_categories } from "./schema/resolvers/Query/categories";
import { order as Query_order } from "./schema/resolvers/Query/order";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { products as Query_products } from "./schema/resolvers/Query/products";
import { productsByCategory as Query_productsByCategory } from "./schema/resolvers/Query/productsByCategory";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
	Query: {
		categories: Query_categories,
		order: Query_order,
		product: Query_product,
		products: Query_products,
		productsByCategory: Query_productsByCategory,
	},
	Mutation: {
		addToOrder: Mutation_addToOrder,
		removeOrderItem: Mutation_removeOrderItem,
		removeOrderItems: Mutation_removeOrderItems,
		updateOrderItemQuantity: Mutation_updateOrderItemQuantity,
	},

	Category: Category,
	Decimal: Decimal,
	Order: Order,
	OrderItem: OrderItem,
	Product: Product,
	DateTime: DateTimeResolver,
};
