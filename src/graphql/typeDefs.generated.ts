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
								value: "productId",
								loc: { start: 278, end: 287 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 289, end: 291 },
									},
									loc: { start: 289, end: 291 },
								},
								loc: { start: 289, end: 292 },
							},
							directives: [],
							loc: { start: 278, end: 292 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "RemoveOrderItemPayload",
								loc: { start: 295, end: 317 },
							},
							loc: { start: 295, end: 317 },
						},
						loc: { start: 295, end: 318 },
					},
					directives: [],
					loc: { start: 248, end: 318 },
				},
			],
			loc: { start: 152, end: 320 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 327, end: 332 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 337, end: 339 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 341, end: 343 },
							},
							loc: { start: 341, end: 343 },
						},
						loc: { start: 341, end: 344 },
					},
					directives: [],
					loc: { start: 337, end: 344 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 347, end: 353 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 355, end: 361 },
							},
							loc: { start: 355, end: 361 },
						},
						loc: { start: 355, end: 362 },
					},
					directives: [],
					loc: { start: 347, end: 362 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 365, end: 375 },
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
									loc: { start: 378, end: 387 },
								},
								loc: { start: 378, end: 387 },
							},
							loc: { start: 377, end: 388 },
						},
						loc: { start: 377, end: 389 },
					},
					directives: [],
					loc: { start: 365, end: 389 },
				},
			],
			loc: { start: 322, end: 391 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 398, end: 407 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 412, end: 420 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 422, end: 425 },
							},
							loc: { start: 422, end: 425 },
						},
						loc: { start: 422, end: 426 },
					},
					directives: [],
					loc: { start: 412, end: 426 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 429, end: 436 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 438, end: 445 },
							},
							loc: { start: 438, end: 445 },
						},
						loc: { start: 438, end: 446 },
					},
					directives: [],
					loc: { start: 429, end: 446 },
				},
			],
			loc: { start: 393, end: 448 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "GetOrderPayload",
				loc: { start: 455, end: 470 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 475, end: 480 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 482, end: 487 },
						},
						loc: { start: 482, end: 487 },
					},
					directives: [],
					loc: { start: 475, end: 487 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderErrors",
						loc: { start: 490, end: 501 },
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
										loc: { start: 504, end: 517 },
									},
									loc: { start: 504, end: 517 },
								},
								loc: { start: 504, end: 518 },
							},
							loc: { start: 503, end: 519 },
						},
						loc: { start: 503, end: 520 },
					},
					directives: [],
					loc: { start: 490, end: 520 },
				},
			],
			loc: { start: 450, end: 522 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "GetOrderError",
				loc: { start: 530, end: 543 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 546, end: 559 },
					},
					loc: { start: 546, end: 559 },
				},
			],
			loc: { start: 524, end: 559 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderNotFound",
				loc: { start: 566, end: 579 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 584, end: 591 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 593, end: 599 },
							},
							loc: { start: 593, end: 599 },
						},
						loc: { start: 593, end: 600 },
					},
					directives: [],
					loc: { start: 584, end: 600 },
				},
			],
			loc: { start: 561, end: 602 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "AddToOrderPayload",
				loc: { start: 609, end: 626 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 631, end: 636 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 638, end: 643 },
						},
						loc: { start: 638, end: 643 },
					},
					directives: [],
					loc: { start: 631, end: 643 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderErrors",
						loc: { start: 646, end: 657 },
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
										loc: { start: 660, end: 675 },
									},
									loc: { start: 660, end: 675 },
								},
								loc: { start: 660, end: 676 },
							},
							loc: { start: 659, end: 677 },
						},
						loc: { start: 659, end: 678 },
					},
					directives: [],
					loc: { start: 646, end: 678 },
				},
			],
			loc: { start: 604, end: 680 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "AddToOrderError",
				loc: { start: 688, end: 703 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 706, end: 719 },
					},
					loc: { start: 706, end: 719 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 722, end: 737 },
					},
					loc: { start: 722, end: 737 },
				},
			],
			loc: { start: 682, end: 737 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "RemoveOrderItemPayload",
				loc: { start: 744, end: 766 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removedItem",
						loc: { start: 771, end: 782 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "OrderItem",
							loc: { start: 784, end: 793 },
						},
						loc: { start: 784, end: 793 },
					},
					directives: [],
					loc: { start: 771, end: 793 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderErrors",
						loc: { start: 796, end: 807 },
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
										loc: { start: 810, end: 830 },
									},
									loc: { start: 810, end: 830 },
								},
								loc: { start: 810, end: 831 },
							},
							loc: { start: 809, end: 832 },
						},
						loc: { start: 809, end: 833 },
					},
					directives: [],
					loc: { start: 796, end: 833 },
				},
			],
			loc: { start: 739, end: 835 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "RemoveOrderItemError",
				loc: { start: 843, end: 863 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 866, end: 879 },
					},
					loc: { start: 866, end: 879 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 882, end: 897 },
					},
					loc: { start: 882, end: 897 },
				},
			],
			loc: { start: 837, end: 897 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 910, end: 915 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 920, end: 928 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 929, end: 934 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 936, end: 939 },
									},
									loc: { start: 936, end: 939 },
								},
								loc: { start: 936, end: 940 },
							},
							directives: [],
							loc: { start: 929, end: 940 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 942, end: 946 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 948, end: 951 },
								},
								loc: { start: 948, end: 951 },
							},
							directives: [],
							loc: { start: 942, end: 951 },
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
										loc: { start: 955, end: 962 },
									},
									loc: { start: 955, end: 962 },
								},
								loc: { start: 955, end: 963 },
							},
							loc: { start: 954, end: 964 },
						},
						loc: { start: 954, end: 965 },
					},
					directives: [],
					loc: { start: 920, end: 965 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productsByCategory",
						loc: { start: 968, end: 986 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 987, end: 992 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 994, end: 997 },
									},
									loc: { start: 994, end: 997 },
								},
								loc: { start: 994, end: 998 },
							},
							directives: [],
							loc: { start: 987, end: 998 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 1000, end: 1008 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1010, end: 1016 },
									},
									loc: { start: 1010, end: 1016 },
								},
								loc: { start: 1010, end: 1017 },
							},
							directives: [],
							loc: { start: 1000, end: 1017 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1019, end: 1023 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1025, end: 1028 },
								},
								loc: { start: 1025, end: 1028 },
							},
							directives: [],
							loc: { start: 1019, end: 1028 },
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
										loc: { start: 1032, end: 1039 },
									},
									loc: { start: 1032, end: 1039 },
								},
								loc: { start: 1032, end: 1040 },
							},
							loc: { start: 1031, end: 1041 },
						},
						loc: { start: 1031, end: 1042 },
					},
					directives: [],
					loc: { start: 968, end: 1042 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1045, end: 1052 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1053, end: 1055 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1057, end: 1059 },
									},
									loc: { start: 1057, end: 1059 },
								},
								loc: { start: 1057, end: 1060 },
							},
							directives: [],
							loc: { start: 1053, end: 1060 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "GetProductPayload",
								loc: { start: 1063, end: 1080 },
							},
							loc: { start: 1063, end: 1080 },
						},
						loc: { start: 1063, end: 1081 },
					},
					directives: [],
					loc: { start: 1045, end: 1081 },
				},
			],
			loc: { start: 898, end: 1083 },
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
										value: "GetProductError",
										loc: { start: 1319, end: 1334 },
									},
									loc: { start: 1319, end: 1334 },
								},
								loc: { start: 1319, end: 1335 },
							},
							loc: { start: 1318, end: 1336 },
						},
						loc: { start: 1318, end: 1337 },
					},
					directives: [],
					loc: { start: 1303, end: 1337 },
				},
			],
			loc: { start: 1257, end: 1339 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "GetProductError",
				loc: { start: 1347, end: 1362 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 1365, end: 1380 },
					},
					loc: { start: 1365, end: 1380 },
				},
			],
			loc: { start: 1341, end: 1380 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductNotFound",
				loc: { start: 1387, end: 1402 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 1407, end: 1414 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1416, end: 1422 },
							},
							loc: { start: 1416, end: 1422 },
						},
						loc: { start: 1416, end: 1423 },
					},
					directives: [],
					loc: { start: 1407, end: 1423 },
				},
			],
			loc: { start: 1382, end: 1425 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1431, end: 1436 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1426, end: 1436 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 1445, end: 1453 },
			},
			directives: [],
			loc: { start: 1438, end: 1453 },
		},
	],
	loc: { start: 0, end: 1454 },
} as unknown as DocumentNode;
