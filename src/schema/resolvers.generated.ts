/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { AddToOrderError } from "./order/resolvers/AddToOrderError";
import { Category } from "./category/resolvers/Category";
import { InvalidQuantity } from "./order/resolvers/InvalidQuantity";
import { removeAllItemsFromOrder as Mutation_removeAllItemsFromOrder } from "./order/resolvers/Mutation/removeAllItemsFromOrder";
import { updateOrder as Mutation_updateOrder } from "./order/resolvers/Mutation/updateOrder";
import { Order } from "./order/resolvers/Order";
import { OrderItem } from "./order/resolvers/OrderItem";
import { OrderNotFound } from "./order/resolvers/OrderNotFound";
import { OrderSuccess } from "./order/resolvers/OrderSuccess";
import { Product } from "./product/resolvers/Product";
import { ProductNotFound } from "./product/resolvers/ProductNotFound";
import { ProductSuccess } from "./product/resolvers/ProductSuccess";
import { categories as Query_categories } from "./category/resolvers/Query/categories";
import { order as Query_order } from "./order/resolvers/Query/order";
import { product as Query_product } from "./product/resolvers/Query/product";
import { products as Query_products } from "./product/resolvers/Query/products";
import { productsByCategory as Query_productsByCategory } from "./product/resolvers/Query/productsByCategory";
import { RemoveAllItemsFromOrderSuccess } from "./order/resolvers/RemoveAllItemsFromOrderSuccess";
import { UpdatedOrder } from "./order/resolvers/UpdatedOrder";
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
		removeAllItemsFromOrder: Mutation_removeAllItemsFromOrder,
		updateOrder: Mutation_updateOrder,
	},

	AddToOrderError: AddToOrderError,
	Category: Category,
	InvalidQuantity: InvalidQuantity,
	Order: Order,
	OrderItem: OrderItem,
	OrderNotFound: OrderNotFound,
	OrderSuccess: OrderSuccess,
	Product: Product,
	ProductNotFound: ProductNotFound,
	ProductSuccess: ProductSuccess,
	RemoveAllItemsFromOrderSuccess: RemoveAllItemsFromOrderSuccess,
	UpdatedOrder: UpdatedOrder,
	DateTime: DateTimeResolver,
};
