import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 22, end: 32 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Category",
										loc: { start: 35, end: 43 },
									},
									loc: { start: 35, end: 43 },
								},
								loc: { start: 35, end: 44 },
							},
							loc: { start: 34, end: 45 },
						},
						loc: { start: 34, end: 46 },
					},
					directives: [],
					loc: { start: 22, end: 46 },
				},
			],
			loc: { start: 0, end: 48 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 55, end: 63 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 68, end: 70 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 72, end: 74 } },
							loc: { start: 72, end: 74 },
						},
						loc: { start: 72, end: 75 },
					},
					directives: [],
					loc: { start: 68, end: 75 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 78, end: 82 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 84, end: 90 },
							},
							loc: { start: 84, end: 90 },
						},
						loc: { start: 84, end: 91 },
					},
					directives: [],
					loc: { start: 78, end: 91 },
				},
			],
			loc: { start: 50, end: 93 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 106, end: 111 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 116, end: 121 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 122, end: 124 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 126, end: 128 },
									},
									loc: { start: 126, end: 128 },
								},
								loc: { start: 126, end: 129 },
							},
							directives: [],
							loc: { start: 122, end: 129 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "GetOrderPayload",
								loc: { start: 132, end: 147 },
							},
							loc: { start: 132, end: 147 },
						},
						loc: { start: 132, end: 148 },
					},
					directives: [],
					loc: { start: 116, end: 148 },
				},
			],
			loc: { start: 94, end: 150 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Mutation", loc: { start: 157, end: 165 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "addToOrder",
						loc: { start: 170, end: 180 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderId",
								loc: { start: 181, end: 188 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "ID",
									loc: { start: 190, end: 192 },
								},
								loc: { start: 190, end: 192 },
							},
							directives: [],
							loc: { start: 181, end: 192 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "productId",
								loc: { start: 194, end: 203 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 205, end: 207 },
									},
									loc: { start: 205, end: 207 },
								},
								loc: { start: 205, end: 208 },
							},
							directives: [],
							loc: { start: 194, end: 208 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "quantity",
								loc: { start: 210, end: 218 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 220, end: 223 },
									},
									loc: { start: 220, end: 223 },
								},
								loc: { start: 220, end: 224 },
							},
							directives: [],
							loc: { start: 210, end: 224 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "AddToOrderPayload",
								loc: { start: 227, end: 244 },
							},
							loc: { start: 227, end: 244 },
						},
						loc: { start: 227, end: 245 },
					},
					directives: [],
					loc: { start: 170, end: 245 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removeOrderItem",
						loc: { start: 248, end: 263 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderId",
								loc: { start: 264, end: 271 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 273, end: 275 },
									},
									loc: { start: 273, end: 275 },
								},
								loc: { start: 273, end: 276 },
							},
							directives: [],
							loc: { start: 264, end: 276 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderItemId",
								loc: { start: 278, end: 289 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 291, end: 293 },
									},
									loc: { start: 291, end: 293 },
								},
								loc: { start: 291, end: 294 },
							},
							directives: [],
							loc: { start: 278, end: 294 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "RemoveOrderItemPayload",
								loc: { start: 297, end: 319 },
							},
							loc: { start: 297, end: 319 },
						},
						loc: { start: 297, end: 320 },
					},
					directives: [],
					loc: { start: 248, end: 320 },
				},
			],
			loc: { start: 152, end: 322 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 329, end: 334 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 339, end: 341 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 343, end: 345 },
							},
							loc: { start: 343, end: 345 },
						},
						loc: { start: 343, end: 346 },
					},
					directives: [],
					loc: { start: 339, end: 346 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 349, end: 355 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 357, end: 363 },
							},
							loc: { start: 357, end: 363 },
						},
						loc: { start: 357, end: 364 },
					},
					directives: [],
					loc: { start: 349, end: 364 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 367, end: 377 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "OrderItem",
									loc: { start: 380, end: 389 },
								},
								loc: { start: 380, end: 389 },
							},
							loc: { start: 379, end: 390 },
						},
						loc: { start: 379, end: 391 },
					},
					directives: [],
					loc: { start: 367, end: 391 },
				},
			],
			loc: { start: 324, end: 393 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 400, end: 409 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 414, end: 422 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 424, end: 427 },
							},
							loc: { start: 424, end: 427 },
						},
						loc: { start: 424, end: 428 },
					},
					directives: [],
					loc: { start: 414, end: 428 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 431, end: 438 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 440, end: 447 },
							},
							loc: { start: 440, end: 447 },
						},
						loc: { start: 440, end: 448 },
					},
					directives: [],
					loc: { start: 431, end: 448 },
				},
			],
			loc: { start: 395, end: 450 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "GetOrderPayload",
				loc: { start: 457, end: 472 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 477, end: 482 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 484, end: 489 },
						},
						loc: { start: 484, end: 489 },
					},
					directives: [],
					loc: { start: 477, end: 489 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderErrors",
						loc: { start: 492, end: 503 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "GetOrderError",
										loc: { start: 506, end: 519 },
									},
									loc: { start: 506, end: 519 },
								},
								loc: { start: 506, end: 520 },
							},
							loc: { start: 505, end: 521 },
						},
						loc: { start: 505, end: 522 },
					},
					directives: [],
					loc: { start: 492, end: 522 },
				},
			],
			loc: { start: 452, end: 524 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "GetOrderError",
				loc: { start: 532, end: 545 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 548, end: 561 },
					},
					loc: { start: 548, end: 561 },
				},
			],
			loc: { start: 526, end: 561 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderNotFound",
				loc: { start: 568, end: 581 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 586, end: 593 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 595, end: 601 },
							},
							loc: { start: 595, end: 601 },
						},
						loc: { start: 595, end: 602 },
					},
					directives: [],
					loc: { start: 586, end: 602 },
				},
			],
			loc: { start: 563, end: 604 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "AddToOrderPayload",
				loc: { start: 611, end: 628 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 633, end: 638 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 640, end: 645 },
						},
						loc: { start: 640, end: 645 },
					},
					directives: [],
					loc: { start: 633, end: 645 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderErrors",
						loc: { start: 648, end: 659 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "AddToOrderError",
										loc: { start: 662, end: 677 },
									},
									loc: { start: 662, end: 677 },
								},
								loc: { start: 662, end: 678 },
							},
							loc: { start: 661, end: 679 },
						},
						loc: { start: 661, end: 680 },
					},
					directives: [],
					loc: { start: 648, end: 680 },
				},
			],
			loc: { start: 606, end: 682 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "AddToOrderError",
				loc: { start: 690, end: 705 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 708, end: 721 },
					},
					loc: { start: 708, end: 721 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 724, end: 739 },
					},
					loc: { start: 724, end: 739 },
				},
			],
			loc: { start: 684, end: 739 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "RemoveOrderItemPayload",
				loc: { start: 746, end: 768 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removedItem",
						loc: { start: 773, end: 784 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "OrderItem",
							loc: { start: 786, end: 795 },
						},
						loc: { start: 786, end: 795 },
					},
					directives: [],
					loc: { start: 773, end: 795 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderErrors",
						loc: { start: 798, end: 809 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "RemoveOrderItemError",
										loc: { start: 812, end: 832 },
									},
									loc: { start: 812, end: 832 },
								},
								loc: { start: 812, end: 833 },
							},
							loc: { start: 811, end: 834 },
						},
						loc: { start: 811, end: 835 },
					},
					directives: [],
					loc: { start: 798, end: 835 },
				},
			],
			loc: { start: 741, end: 837 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "RemoveOrderItemError",
				loc: { start: 845, end: 865 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 868, end: 881 },
					},
					loc: { start: 868, end: 881 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 884, end: 899 },
					},
					loc: { start: 884, end: 899 },
				},
			],
			loc: { start: 839, end: 899 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 912, end: 917 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 922, end: 930 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 931, end: 936 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 938, end: 941 },
									},
									loc: { start: 938, end: 941 },
								},
								loc: { start: 938, end: 942 },
							},
							directives: [],
							loc: { start: 931, end: 942 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 944, end: 948 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 950, end: 953 },
								},
								loc: { start: 950, end: 953 },
							},
							directives: [],
							loc: { start: 944, end: 953 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Product",
										loc: { start: 957, end: 964 },
									},
									loc: { start: 957, end: 964 },
								},
								loc: { start: 957, end: 965 },
							},
							loc: { start: 956, end: 966 },
						},
						loc: { start: 956, end: 967 },
					},
					directives: [],
					loc: { start: 922, end: 967 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productsByCategory",
						loc: { start: 970, end: 988 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 989, end: 994 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 996, end: 999 },
									},
									loc: { start: 996, end: 999 },
								},
								loc: { start: 996, end: 1000 },
							},
							directives: [],
							loc: { start: 989, end: 1000 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 1002, end: 1010 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1012, end: 1018 },
									},
									loc: { start: 1012, end: 1018 },
								},
								loc: { start: 1012, end: 1019 },
							},
							directives: [],
							loc: { start: 1002, end: 1019 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1021, end: 1025 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1027, end: 1030 },
								},
								loc: { start: 1027, end: 1030 },
							},
							directives: [],
							loc: { start: 1021, end: 1030 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Product",
										loc: { start: 1034, end: 1041 },
									},
									loc: { start: 1034, end: 1041 },
								},
								loc: { start: 1034, end: 1042 },
							},
							loc: { start: 1033, end: 1043 },
						},
						loc: { start: 1033, end: 1044 },
					},
					directives: [],
					loc: { start: 970, end: 1044 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1047, end: 1054 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1055, end: 1057 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1059, end: 1061 },
									},
									loc: { start: 1059, end: 1061 },
								},
								loc: { start: 1059, end: 1062 },
							},
							directives: [],
							loc: { start: 1055, end: 1062 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "GetOrderPayload",
								loc: { start: 1065, end: 1080 },
							},
							loc: { start: 1065, end: 1080 },
						},
						loc: { start: 1065, end: 1081 },
					},
					directives: [],
					loc: { start: 1047, end: 1081 },
				},
			],
			loc: { start: 900, end: 1083 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1090, end: 1097 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1102, end: 1104 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1106, end: 1108 },
							},
							loc: { start: 1106, end: 1108 },
						},
						loc: { start: 1106, end: 1109 },
					},
					directives: [],
					loc: { start: 1102, end: 1109 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1112, end: 1116 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1118, end: 1124 },
							},
							loc: { start: 1118, end: 1124 },
						},
						loc: { start: 1118, end: 1125 },
					},
					directives: [],
					loc: { start: 1112, end: 1125 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 1128, end: 1132 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1134, end: 1140 },
							},
							loc: { start: 1134, end: 1140 },
						},
						loc: { start: 1134, end: 1141 },
					},
					directives: [],
					loc: { start: 1128, end: 1141 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1144, end: 1155 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1157, end: 1163 },
							},
							loc: { start: 1157, end: 1163 },
						},
						loc: { start: 1157, end: 1164 },
					},
					directives: [],
					loc: { start: 1144, end: 1164 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1167, end: 1172 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1174, end: 1180 },
							},
							loc: { start: 1174, end: 1180 },
						},
						loc: { start: 1174, end: 1181 },
					},
					directives: [],
					loc: { start: 1167, end: 1181 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1184, end: 1193 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1195, end: 1203 },
							},
							loc: { start: 1195, end: 1203 },
						},
						loc: { start: 1195, end: 1204 },
					},
					directives: [],
					loc: { start: 1184, end: 1204 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1207, end: 1216 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1218, end: 1226 },
							},
							loc: { start: 1218, end: 1226 },
						},
						loc: { start: 1218, end: 1227 },
					},
					directives: [],
					loc: { start: 1207, end: 1227 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 1230, end: 1240 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Category",
									loc: { start: 1243, end: 1251 },
								},
								loc: { start: 1243, end: 1251 },
							},
							loc: { start: 1242, end: 1252 },
						},
						loc: { start: 1242, end: 1253 },
					},
					directives: [],
					loc: { start: 1230, end: 1253 },
				},
			],
			loc: { start: 1085, end: 1255 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "GetProductPayload",
				loc: { start: 1262, end: 1279 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1284, end: 1291 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1293, end: 1300 },
						},
						loc: { start: 1293, end: 1300 },
					},
					directives: [],
					loc: { start: 1284, end: 1300 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productErrors",
						loc: { start: 1303, end: 1316 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "GetOrderError",
										loc: { start: 1319, end: 1332 },
									},
									loc: { start: 1319, end: 1332 },
								},
								loc: { start: 1319, end: 1333 },
							},
							loc: { start: 1318, end: 1334 },
						},
						loc: { start: 1318, end: 1335 },
					},
					directives: [],
					loc: { start: 1303, end: 1335 },
				},
			],
			loc: { start: 1257, end: 1337 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "GetProductError",
				loc: { start: 1345, end: 1360 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 1363, end: 1378 },
					},
					loc: { start: 1363, end: 1378 },
				},
			],
			loc: { start: 1339, end: 1378 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductNotFound",
				loc: { start: 1385, end: 1400 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 1405, end: 1412 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1414, end: 1420 },
							},
							loc: { start: 1414, end: 1420 },
						},
						loc: { start: 1414, end: 1421 },
					},
					directives: [],
					loc: { start: 1405, end: 1421 },
				},
			],
			loc: { start: 1380, end: 1423 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1429, end: 1434 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1424, end: 1434 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 1443, end: 1451 },
			},
			directives: [],
			loc: { start: 1436, end: 1451 },
		},
	],
	loc: { start: 0, end: 1452 },
} as unknown as DocumentNode;
