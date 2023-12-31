import {
	GraphQLResolveInfo,
	GraphQLScalarType,
	GraphQLScalarTypeConfig,
} from "graphql";
import { Context, Mapper } from "../types.js";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
	  };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
	[P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: Date; output: Date };
	Decimal: { input: any; output: any };
};

export type Category = {
	__typename?: "Category";
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
};

export type Mutation = {
	__typename?: "Mutation";
	addToOrder?: Maybe<Order>;
	removeOrderItem?: Maybe<Order>;
	removeOrderItems?: Maybe<Order>;
	updateOrderItemQuantity?: Maybe<Order>;
};

export type MutationaddToOrderArgs = {
	orderId?: InputMaybe<Scalars["ID"]["input"]>;
	productId: Scalars["ID"]["input"];
	quantity: Scalars["Int"]["input"];
};

export type MutationremoveOrderItemArgs = {
	orderId: Scalars["ID"]["input"];
	orderItemId: Scalars["ID"]["input"];
};

export type MutationremoveOrderItemsArgs = {
	orderId: Scalars["ID"]["input"];
};

export type MutationupdateOrderItemQuantityArgs = {
	orderId: Scalars["ID"]["input"];
	orderItemId: Scalars["ID"]["input"];
};

export type Order = {
	__typename?: "Order";
	id: Scalars["ID"]["output"];
	orderItems: Array<Maybe<OrderItem>>;
	status: Scalars["String"]["output"];
};

export type OrderItem = {
	__typename?: "OrderItem";
	product: Product;
	quantity: Scalars["Int"]["output"];
};

export type Product = {
	__typename?: "Product";
	categories: Array<Maybe<Category>>;
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	price: Scalars["Decimal"]["output"];
	slug: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type Query = {
	__typename?: "Query";
	categories: Array<Category>;
	order?: Maybe<Order>;
	product?: Maybe<Product>;
	products: Array<Product>;
	productsByCategory: Array<Product>;
};

export type QueryorderArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryproductArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryproductsArgs = {
	first: Scalars["Int"]["input"];
	skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryproductsByCategoryArgs = {
	category: Scalars["String"]["input"];
	first: Scalars["Int"]["input"];
	skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info?: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {},
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Category: ResolverTypeWrapper<Mapper<Category>>;
	ID: ResolverTypeWrapper<Mapper<Scalars["ID"]["output"]>>;
	String: ResolverTypeWrapper<Mapper<Scalars["String"]["output"]>>;
	DateTime: ResolverTypeWrapper<Mapper<Scalars["DateTime"]["output"]>>;
	Decimal: ResolverTypeWrapper<Mapper<Scalars["Decimal"]["output"]>>;
	Mutation: ResolverTypeWrapper<{}>;
	Int: ResolverTypeWrapper<Mapper<Scalars["Int"]["output"]>>;
	Order: ResolverTypeWrapper<Mapper<Order>>;
	OrderItem: ResolverTypeWrapper<Mapper<OrderItem>>;
	Product: ResolverTypeWrapper<Mapper<Product>>;
	Query: ResolverTypeWrapper<{}>;
	Boolean: ResolverTypeWrapper<Mapper<Scalars["Boolean"]["output"]>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Category: Mapper<Category>;
	ID: Mapper<Scalars["ID"]["output"]>;
	String: Mapper<Scalars["String"]["output"]>;
	DateTime: Mapper<Scalars["DateTime"]["output"]>;
	Decimal: Mapper<Scalars["Decimal"]["output"]>;
	Mutation: {};
	Int: Mapper<Scalars["Int"]["output"]>;
	Order: Mapper<Order>;
	OrderItem: Mapper<OrderItem>;
	Product: Mapper<Product>;
	Query: {};
	Boolean: Mapper<Scalars["Boolean"]["output"]>;
};

export type CategoryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Category"] = ResolversParentTypes["Category"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
	name: "DateTime";
}

export interface DecimalScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes["Decimal"], any> {
	name: "Decimal";
}

export type MutationResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
	addToOrder?: Resolver<
		Maybe<ResolversTypes["Order"]>,
		ParentType,
		ContextType,
		RequireFields<MutationaddToOrderArgs, "productId" | "quantity">
	>;
	removeOrderItem?: Resolver<
		Maybe<ResolversTypes["Order"]>,
		ParentType,
		ContextType,
		RequireFields<MutationremoveOrderItemArgs, "orderId" | "orderItemId">
	>;
	removeOrderItems?: Resolver<
		Maybe<ResolversTypes["Order"]>,
		ParentType,
		ContextType,
		RequireFields<MutationremoveOrderItemsArgs, "orderId">
	>;
	updateOrderItemQuantity?: Resolver<
		Maybe<ResolversTypes["Order"]>,
		ParentType,
		ContextType,
		RequireFields<
			MutationupdateOrderItemQuantityArgs,
			"orderId" | "orderItemId"
		>
	>;
};

export type OrderResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Order"] = ResolversParentTypes["Order"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	orderItems?: Resolver<
		Array<Maybe<ResolversTypes["OrderItem"]>>,
		ParentType,
		ContextType
	>;
	status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["OrderItem"] = ResolversParentTypes["OrderItem"],
> = {
	product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
	quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
	categories?: Resolver<
		Array<Maybe<ResolversTypes["Category"]>>,
		ParentType,
		ContextType
	>;
	createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	price?: Resolver<ResolversTypes["Decimal"], ParentType, ContextType>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
	categories?: Resolver<
		Array<ResolversTypes["Category"]>,
		ParentType,
		ContextType
	>;
	order?: Resolver<
		Maybe<ResolversTypes["Order"]>,
		ParentType,
		ContextType,
		RequireFields<QueryorderArgs, "id">
	>;
	product?: Resolver<
		Maybe<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		RequireFields<QueryproductArgs, "id">
	>;
	products?: Resolver<
		Array<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		RequireFields<QueryproductsArgs, "first">
	>;
	productsByCategory?: Resolver<
		Array<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		RequireFields<QueryproductsByCategoryArgs, "category" | "first">
	>;
};

export type Resolvers<ContextType = Context> = {
	Category?: CategoryResolvers<ContextType>;
	DateTime?: GraphQLScalarType;
	Decimal?: GraphQLScalarType;
	Mutation?: MutationResolvers<ContextType>;
	Order?: OrderResolvers<ContextType>;
	OrderItem?: OrderItemResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
};
