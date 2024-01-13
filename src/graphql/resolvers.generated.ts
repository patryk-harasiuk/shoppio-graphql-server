/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { AddToOrderPayload } from "./schema/resolvers/AddToOrderPayload";
import { Category } from "./schema/resolvers/Category";
import { GetOrderPayload } from "./schema/resolvers/GetOrderPayload";
import { GetProductPayload } from "./schema/resolvers/GetProductPayload";
import { addToOrder as Mutation_addToOrder } from "./schema/resolvers/Mutation/addToOrder";
import { removeOrderItem as Mutation_removeOrderItem } from "./schema/resolvers/Mutation/removeOrderItem";
import { Order } from "./schema/resolvers/Order";
import { OrderItem } from "./schema/resolvers/OrderItem";
import { OrderNotFound } from "./schema/resolvers/OrderNotFound";
import { Product } from "./schema/resolvers/Product";
import { ProductNotFound } from "./schema/resolvers/ProductNotFound";
import { categories as Query_categories } from "./schema/resolvers/Query/categories";
import { order as Query_order } from "./schema/resolvers/Query/order";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { products as Query_products } from "./schema/resolvers/Query/products";
import { productsByCategory as Query_productsByCategory } from "./schema/resolvers/Query/productsByCategory";
import { RemoveOrderItemPayload } from "./schema/resolvers/RemoveOrderItemPayload";
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
	},

	AddToOrderPayload: AddToOrderPayload,
	Category: Category,
	GetOrderPayload: GetOrderPayload,
	GetProductPayload: GetProductPayload,
	Order: Order,
	OrderItem: OrderItem,
	OrderNotFound: OrderNotFound,
	Product: Product,
	ProductNotFound: ProductNotFound,
	RemoveOrderItemPayload: RemoveOrderItemPayload,
	DateTime: DateTimeResolver,
};
