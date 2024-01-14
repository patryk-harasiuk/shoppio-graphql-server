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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
};

export type AddToOrderError = OrderNotFound | ProductNotFound;

export type AddToOrderPayload = {
	__typename?: "AddToOrderPayload";
	order?: Maybe<Order>;
	orderErrors: Array<AddToOrderError>;
};

export type Category = {
	__typename?: "Category";
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
};

export type GetOrderError = OrderNotFound;

export type GetOrderPayload = {
	__typename?: "GetOrderPayload";
	order?: Maybe<Order>;
	orderErrors: Array<GetOrderError>;
};

export type GetProductError = ProductNotFound;

export type GetProductPayload = {
	__typename?: "GetProductPayload";
	product?: Maybe<Product>;
	productErrors: Array<GetProductError>;
};

export type Mutation = {
	__typename?: "Mutation";
	addToOrder: AddToOrderPayload;
	removeOrderItem: RemoveOrderItemPayload;
};

export type MutationaddToOrderArgs = {
	orderId?: InputMaybe<Scalars["ID"]["input"]>;
	productId: Scalars["ID"]["input"];
	quantity: Scalars["Int"]["input"];
};

export type MutationremoveOrderItemArgs = {
	orderId: Scalars["ID"]["input"];
	productId: Scalars["ID"]["input"];
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

export type OrderNotFound = {
	__typename?: "OrderNotFound";
	message: Scalars["String"]["output"];
};

export type Product = {
	__typename?: "Product";
	categories: Array<Maybe<Category>>;
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	price: Scalars["String"]["output"];
	slug: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type ProductNotFound = {
	__typename?: "ProductNotFound";
	message: Scalars["String"]["output"];
};

export type Query = {
	__typename?: "Query";
	categories: Array<Category>;
	order: GetOrderPayload;
	product: GetProductPayload;
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

export type RemoveOrderItemError = OrderNotFound | ProductNotFound;

export type RemoveOrderItemPayload = {
	__typename?: "RemoveOrderItemPayload";
	orderErrors: Array<RemoveOrderItemError>;
	removedItem?: Maybe<OrderItem>;
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

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
	AddToOrderError:
		| (Mapper<OrderNotFound> & { __typename: "OrderNotFound" })
		| (Mapper<ProductNotFound> & { __typename: "ProductNotFound" });
	GetOrderError: Mapper<OrderNotFound> & { __typename: "OrderNotFound" };
	GetProductError: Mapper<ProductNotFound> & { __typename: "ProductNotFound" };
	RemoveOrderItemError:
		| (Mapper<OrderNotFound> & { __typename: "OrderNotFound" })
		| (Mapper<ProductNotFound> & { __typename: "ProductNotFound" });
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	AddToOrderError: Mapper<
		ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>["AddToOrderError"]>
	>;
	AddToOrderPayload: ResolverTypeWrapper<
		Mapper<
			Omit<AddToOrderPayload, "orderErrors"> & {
				orderErrors: Array<ResolversTypes["AddToOrderError"]>;
			}
		>
	>;
	Category: ResolverTypeWrapper<Mapper<Category>>;
	ID: ResolverTypeWrapper<Mapper<Scalars["ID"]["output"]>>;
	String: ResolverTypeWrapper<Mapper<Scalars["String"]["output"]>>;
	DateTime: ResolverTypeWrapper<Mapper<Scalars["DateTime"]["output"]>>;
	GetOrderError: Mapper<
		ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>["GetOrderError"]>
	>;
	GetOrderPayload: ResolverTypeWrapper<
		Mapper<
			Omit<GetOrderPayload, "orderErrors"> & {
				orderErrors: Array<ResolversTypes["GetOrderError"]>;
			}
		>
	>;
	GetProductError: Mapper<
		ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>["GetProductError"]>
	>;
	GetProductPayload: ResolverTypeWrapper<
		Mapper<
			Omit<GetProductPayload, "productErrors"> & {
				productErrors: Array<ResolversTypes["GetProductError"]>;
			}
		>
	>;
	Mutation: ResolverTypeWrapper<{}>;
	Int: ResolverTypeWrapper<Mapper<Scalars["Int"]["output"]>>;
	Order: ResolverTypeWrapper<Mapper<Order>>;
	OrderItem: ResolverTypeWrapper<Mapper<OrderItem>>;
	OrderNotFound: ResolverTypeWrapper<Mapper<OrderNotFound>>;
	Product: ResolverTypeWrapper<Mapper<Product>>;
	ProductNotFound: ResolverTypeWrapper<Mapper<ProductNotFound>>;
	Query: ResolverTypeWrapper<{}>;
	RemoveOrderItemError: Mapper<
		ResolverTypeWrapper<
			ResolversUnionTypes<ResolversTypes>["RemoveOrderItemError"]
		>
	>;
	RemoveOrderItemPayload: ResolverTypeWrapper<
		Mapper<
			Omit<RemoveOrderItemPayload, "orderErrors"> & {
				orderErrors: Array<ResolversTypes["RemoveOrderItemError"]>;
			}
		>
	>;
	Boolean: ResolverTypeWrapper<Mapper<Scalars["Boolean"]["output"]>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	AddToOrderError: Mapper<
		ResolversUnionTypes<ResolversParentTypes>["AddToOrderError"]
	>;
	AddToOrderPayload: Mapper<
		Omit<AddToOrderPayload, "orderErrors"> & {
			orderErrors: Array<ResolversParentTypes["AddToOrderError"]>;
		}
	>;
	Category: Mapper<Category>;
	ID: Mapper<Scalars["ID"]["output"]>;
	String: Mapper<Scalars["String"]["output"]>;
	DateTime: Mapper<Scalars["DateTime"]["output"]>;
	GetOrderError: Mapper<
		ResolversUnionTypes<ResolversParentTypes>["GetOrderError"]
	>;
	GetOrderPayload: Mapper<
		Omit<GetOrderPayload, "orderErrors"> & {
			orderErrors: Array<ResolversParentTypes["GetOrderError"]>;
		}
	>;
	GetProductError: Mapper<
		ResolversUnionTypes<ResolversParentTypes>["GetProductError"]
	>;
	GetProductPayload: Mapper<
		Omit<GetProductPayload, "productErrors"> & {
			productErrors: Array<ResolversParentTypes["GetProductError"]>;
		}
	>;
	Mutation: {};
	Int: Mapper<Scalars["Int"]["output"]>;
	Order: Mapper<Order>;
	OrderItem: Mapper<OrderItem>;
	OrderNotFound: Mapper<OrderNotFound>;
	Product: Mapper<Product>;
	ProductNotFound: Mapper<ProductNotFound>;
	Query: {};
	RemoveOrderItemError: Mapper<
		ResolversUnionTypes<ResolversParentTypes>["RemoveOrderItemError"]
	>;
	RemoveOrderItemPayload: Mapper<
		Omit<RemoveOrderItemPayload, "orderErrors"> & {
			orderErrors: Array<ResolversParentTypes["RemoveOrderItemError"]>;
		}
	>;
	Boolean: Mapper<Scalars["Boolean"]["output"]>;
};

export type AddToOrderErrorResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["AddToOrderError"] = ResolversParentTypes["AddToOrderError"],
> = {
	__resolveType?: TypeResolveFn<
		"OrderNotFound" | "ProductNotFound",
		ParentType,
		ContextType
	>;
};

export type AddToOrderPayloadResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["AddToOrderPayload"] = ResolversParentTypes["AddToOrderPayload"],
> = {
	order?: Resolver<Maybe<ResolversTypes["Order"]>, ParentType, ContextType>;
	orderErrors?: Resolver<
		Array<ResolversTypes["AddToOrderError"]>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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

export type GetOrderErrorResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["GetOrderError"] = ResolversParentTypes["GetOrderError"],
> = {
	__resolveType?: TypeResolveFn<"OrderNotFound", ParentType, ContextType>;
};

export type GetOrderPayloadResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["GetOrderPayload"] = ResolversParentTypes["GetOrderPayload"],
> = {
	order?: Resolver<Maybe<ResolversTypes["Order"]>, ParentType, ContextType>;
	orderErrors?: Resolver<
		Array<ResolversTypes["GetOrderError"]>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetProductErrorResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["GetProductError"] = ResolversParentTypes["GetProductError"],
> = {
	__resolveType?: TypeResolveFn<"ProductNotFound", ParentType, ContextType>;
};

export type GetProductPayloadResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["GetProductPayload"] = ResolversParentTypes["GetProductPayload"],
> = {
	product?: Resolver<Maybe<ResolversTypes["Product"]>, ParentType, ContextType>;
	productErrors?: Resolver<
		Array<ResolversTypes["GetProductError"]>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
	addToOrder?: Resolver<
		ResolversTypes["AddToOrderPayload"],
		ParentType,
		ContextType,
		RequireFields<MutationaddToOrderArgs, "productId" | "quantity">
	>;
	removeOrderItem?: Resolver<
		ResolversTypes["RemoveOrderItemPayload"],
		ParentType,
		ContextType,
		RequireFields<MutationremoveOrderItemArgs, "orderId" | "productId">
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

export type OrderNotFoundResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["OrderNotFound"] = ResolversParentTypes["OrderNotFound"],
> = {
	message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
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
	price?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductNotFoundResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["ProductNotFound"] = ResolversParentTypes["ProductNotFound"],
> = {
	message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
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
		ResolversTypes["GetOrderPayload"],
		ParentType,
		ContextType,
		RequireFields<QueryorderArgs, "id">
	>;
	product?: Resolver<
		ResolversTypes["GetProductPayload"],
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

export type RemoveOrderItemErrorResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["RemoveOrderItemError"] = ResolversParentTypes["RemoveOrderItemError"],
> = {
	__resolveType?: TypeResolveFn<
		"OrderNotFound" | "ProductNotFound",
		ParentType,
		ContextType
	>;
};

export type RemoveOrderItemPayloadResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["RemoveOrderItemPayload"] = ResolversParentTypes["RemoveOrderItemPayload"],
> = {
	orderErrors?: Resolver<
		Array<ResolversTypes["RemoveOrderItemError"]>,
		ParentType,
		ContextType
	>;
	removedItem?: Resolver<
		Maybe<ResolversTypes["OrderItem"]>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
	AddToOrderError?: AddToOrderErrorResolvers<ContextType>;
	AddToOrderPayload?: AddToOrderPayloadResolvers<ContextType>;
	Category?: CategoryResolvers<ContextType>;
	DateTime?: GraphQLScalarType;
	GetOrderError?: GetOrderErrorResolvers<ContextType>;
	GetOrderPayload?: GetOrderPayloadResolvers<ContextType>;
	GetProductError?: GetProductErrorResolvers<ContextType>;
	GetProductPayload?: GetProductPayloadResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
	Order?: OrderResolvers<ContextType>;
	OrderItem?: OrderItemResolvers<ContextType>;
	OrderNotFound?: OrderNotFoundResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	ProductNotFound?: ProductNotFoundResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	RemoveOrderItemError?: RemoveOrderItemErrorResolvers<ContextType>;
	RemoveOrderItemPayload?: RemoveOrderItemPayloadResolvers<ContextType>;
};
