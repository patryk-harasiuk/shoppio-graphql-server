import {
	GraphQLResolveInfo,
	GraphQLScalarType,
	GraphQLScalarTypeConfig,
} from "graphql";
import { Context } from "../types.js";
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
};

export type AddToOrderError = {
	__typename?: "AddToOrderError";
	message: Scalars["String"]["output"];
};

export type Category = {
	__typename?: "Category";
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
};

export type InvalidQuantity = {
	__typename?: "InvalidQuantity";
	message: Scalars["String"]["output"];
};

export type Mutation = {
	__typename?: "Mutation";
	removeAllItemsFromOrder?: Maybe<RemoveAllItemsFromOrderResult>;
	updateOrder?: Maybe<UpdateOrderResult>;
};

export type MutationremoveAllItemsFromOrderArgs = {
	orderId: Scalars["ID"]["input"];
};

export type MutationupdateOrderArgs = {
	orderId?: InputMaybe<Scalars["ID"]["input"]>;
	productId: Scalars["ID"]["input"];
	quantity: Scalars["Int"]["input"];
};

export type Order = {
	__typename?: "Order";
	id: Scalars["ID"]["output"];
	orderItems: Array<OrderItem>;
	status: Scalars["String"]["output"];
	totalPrice: Scalars["String"]["output"];
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

export type OrderResult = OrderNotFound | OrderSuccess;

export type OrderSuccess = {
	__typename?: "OrderSuccess";
	order: Order;
};

export type Product = {
	__typename?: "Product";
	categories: Array<Maybe<Category>>;
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	price: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type ProductNotFound = {
	__typename?: "ProductNotFound";
	message: Scalars["String"]["output"];
};

export type ProductResult = ProductNotFound | ProductSuccess;

export type ProductSuccess = {
	__typename?: "ProductSuccess";
	product: Product;
};

export type Query = {
	__typename?: "Query";
	categories: Array<Category>;
	order?: Maybe<OrderResult>;
	product?: Maybe<ProductResult>;
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

export type RemoveAllItemsFromOrderResult =
	| OrderNotFound
	| RemoveAllItemsFromOrderSuccess;

export type RemoveAllItemsFromOrderSuccess = {
	__typename?: "RemoveAllItemsFromOrderSuccess";
	message: Scalars["String"]["output"];
};

export type UpdateOrderResult =
	| AddToOrderError
	| InvalidQuantity
	| UpdatedOrder;

export type UpdatedOrder = {
	__typename?: "UpdatedOrder";
	order: Order;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

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
export type ResolversUnionTypes<RefType extends Record<string, unknown>> =
	ResolversObject<{
		OrderResult:
			| (OrderNotFound & { __typename: "OrderNotFound" })
			| (OrderSuccess & { __typename: "OrderSuccess" });
		ProductResult:
			| (ProductNotFound & { __typename: "ProductNotFound" })
			| (ProductSuccess & { __typename: "ProductSuccess" });
		RemoveAllItemsFromOrderResult:
			| (OrderNotFound & { __typename: "OrderNotFound" })
			| (RemoveAllItemsFromOrderSuccess & {
					__typename: "RemoveAllItemsFromOrderSuccess";
			  });
		UpdateOrderResult:
			| (AddToOrderError & { __typename: "AddToOrderError" })
			| (InvalidQuantity & { __typename: "InvalidQuantity" })
			| (UpdatedOrder & { __typename: "UpdatedOrder" });
	}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
	AddToOrderError: ResolverTypeWrapper<AddToOrderError>;
	String: ResolverTypeWrapper<Scalars["String"]["output"]>;
	Category: ResolverTypeWrapper<Category>;
	ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
	DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
	InvalidQuantity: ResolverTypeWrapper<InvalidQuantity>;
	Mutation: ResolverTypeWrapper<{}>;
	Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
	Order: ResolverTypeWrapper<Order>;
	OrderItem: ResolverTypeWrapper<OrderItem>;
	OrderNotFound: ResolverTypeWrapper<OrderNotFound>;
	OrderResult: ResolverTypeWrapper<
		ResolversUnionTypes<ResolversTypes>["OrderResult"]
	>;
	OrderSuccess: ResolverTypeWrapper<OrderSuccess>;
	Product: ResolverTypeWrapper<Product>;
	ProductNotFound: ResolverTypeWrapper<ProductNotFound>;
	ProductResult: ResolverTypeWrapper<
		ResolversUnionTypes<ResolversTypes>["ProductResult"]
	>;
	ProductSuccess: ResolverTypeWrapper<ProductSuccess>;
	Query: ResolverTypeWrapper<{}>;
	RemoveAllItemsFromOrderResult: ResolverTypeWrapper<
		ResolversUnionTypes<ResolversTypes>["RemoveAllItemsFromOrderResult"]
	>;
	RemoveAllItemsFromOrderSuccess: ResolverTypeWrapper<RemoveAllItemsFromOrderSuccess>;
	UpdateOrderResult: ResolverTypeWrapper<
		ResolversUnionTypes<ResolversTypes>["UpdateOrderResult"]
	>;
	UpdatedOrder: ResolverTypeWrapper<UpdatedOrder>;
	Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
	AddToOrderError: AddToOrderError;
	String: Scalars["String"]["output"];
	Category: Category;
	ID: Scalars["ID"]["output"];
	DateTime: Scalars["DateTime"]["output"];
	InvalidQuantity: InvalidQuantity;
	Mutation: {};
	Int: Scalars["Int"]["output"];
	Order: Order;
	OrderItem: OrderItem;
	OrderNotFound: OrderNotFound;
	OrderResult: ResolversUnionTypes<ResolversParentTypes>["OrderResult"];
	OrderSuccess: OrderSuccess;
	Product: Product;
	ProductNotFound: ProductNotFound;
	ProductResult: ResolversUnionTypes<ResolversParentTypes>["ProductResult"];
	ProductSuccess: ProductSuccess;
	Query: {};
	RemoveAllItemsFromOrderResult: ResolversUnionTypes<ResolversParentTypes>["RemoveAllItemsFromOrderResult"];
	RemoveAllItemsFromOrderSuccess: RemoveAllItemsFromOrderSuccess;
	UpdateOrderResult: ResolversUnionTypes<ResolversParentTypes>["UpdateOrderResult"];
	UpdatedOrder: UpdatedOrder;
	Boolean: Scalars["Boolean"]["output"];
}>;

export type AddToOrderErrorResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["AddToOrderError"] = ResolversParentTypes["AddToOrderError"],
> = ResolversObject<{
	message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Category"] = ResolversParentTypes["Category"],
> = ResolversObject<{
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
	name: "DateTime";
}

export type InvalidQuantityResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["InvalidQuantity"] = ResolversParentTypes["InvalidQuantity"],
> = ResolversObject<{
	message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = ResolversObject<{
	removeAllItemsFromOrder?: Resolver<
		Maybe<ResolversTypes["RemoveAllItemsFromOrderResult"]>,
		ParentType,
		ContextType,
		RequireFields<MutationremoveAllItemsFromOrderArgs, "orderId">
	>;
	updateOrder?: Resolver<
		Maybe<ResolversTypes["UpdateOrderResult"]>,
		ParentType,
		ContextType,
		RequireFields<MutationupdateOrderArgs, "productId" | "quantity">
	>;
}>;

export type OrderResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Order"] = ResolversParentTypes["Order"],
> = ResolversObject<{
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	orderItems?: Resolver<
		Array<ResolversTypes["OrderItem"]>,
		ParentType,
		ContextType
	>;
	status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	totalPrice?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderItemResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["OrderItem"] = ResolversParentTypes["OrderItem"],
> = ResolversObject<{
	product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
	quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderNotFoundResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["OrderNotFound"] = ResolversParentTypes["OrderNotFound"],
> = ResolversObject<{
	message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResultResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["OrderResult"] = ResolversParentTypes["OrderResult"],
> = ResolversObject<{
	__resolveType?: TypeResolveFn<
		"OrderNotFound" | "OrderSuccess",
		ParentType,
		ContextType
	>;
}>;

export type OrderSuccessResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["OrderSuccess"] = ResolversParentTypes["OrderSuccess"],
> = ResolversObject<{
	order?: Resolver<ResolversTypes["Order"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = ResolversObject<{
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
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductNotFoundResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["ProductNotFound"] = ResolversParentTypes["ProductNotFound"],
> = ResolversObject<{
	message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductResultResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["ProductResult"] = ResolversParentTypes["ProductResult"],
> = ResolversObject<{
	__resolveType?: TypeResolveFn<
		"ProductNotFound" | "ProductSuccess",
		ParentType,
		ContextType
	>;
}>;

export type ProductSuccessResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["ProductSuccess"] = ResolversParentTypes["ProductSuccess"],
> = ResolversObject<{
	product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = ResolversObject<{
	categories?: Resolver<
		Array<ResolversTypes["Category"]>,
		ParentType,
		ContextType
	>;
	order?: Resolver<
		Maybe<ResolversTypes["OrderResult"]>,
		ParentType,
		ContextType,
		RequireFields<QueryorderArgs, "id">
	>;
	product?: Resolver<
		Maybe<ResolversTypes["ProductResult"]>,
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
}>;

export type RemoveAllItemsFromOrderResultResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["RemoveAllItemsFromOrderResult"] = ResolversParentTypes["RemoveAllItemsFromOrderResult"],
> = ResolversObject<{
	__resolveType?: TypeResolveFn<
		"OrderNotFound" | "RemoveAllItemsFromOrderSuccess",
		ParentType,
		ContextType
	>;
}>;

export type RemoveAllItemsFromOrderSuccessResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["RemoveAllItemsFromOrderSuccess"] = ResolversParentTypes["RemoveAllItemsFromOrderSuccess"],
> = ResolversObject<{
	message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOrderResultResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["UpdateOrderResult"] = ResolversParentTypes["UpdateOrderResult"],
> = ResolversObject<{
	__resolveType?: TypeResolveFn<
		"AddToOrderError" | "InvalidQuantity" | "UpdatedOrder",
		ParentType,
		ContextType
	>;
}>;

export type UpdatedOrderResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["UpdatedOrder"] = ResolversParentTypes["UpdatedOrder"],
> = ResolversObject<{
	order?: Resolver<ResolversTypes["Order"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
	AddToOrderError?: AddToOrderErrorResolvers<ContextType>;
	Category?: CategoryResolvers<ContextType>;
	DateTime?: GraphQLScalarType;
	InvalidQuantity?: InvalidQuantityResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
	Order?: OrderResolvers<ContextType>;
	OrderItem?: OrderItemResolvers<ContextType>;
	OrderNotFound?: OrderNotFoundResolvers<ContextType>;
	OrderResult?: OrderResultResolvers<ContextType>;
	OrderSuccess?: OrderSuccessResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	ProductNotFound?: ProductNotFoundResolvers<ContextType>;
	ProductResult?: ProductResultResolvers<ContextType>;
	ProductSuccess?: ProductSuccessResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	RemoveAllItemsFromOrderResult?: RemoveAllItemsFromOrderResultResolvers<ContextType>;
	RemoveAllItemsFromOrderSuccess?: RemoveAllItemsFromOrderSuccessResolvers<ContextType>;
	UpdateOrderResult?: UpdateOrderResultResolvers<ContextType>;
	UpdatedOrder?: UpdatedOrderResolvers<ContextType>;
}>;
