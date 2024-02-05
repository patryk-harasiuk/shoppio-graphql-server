import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 0, end: 10 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Mutation", loc: { start: 17, end: 25 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 12, end: 25 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "DateTime", loc: { start: 34, end: 42 } },
			directives: [],
			loc: { start: 27, end: 42 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 55, end: 60 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 65, end: 75 },
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
										loc: { start: 78, end: 86 },
									},
									loc: { start: 78, end: 86 },
								},
								loc: { start: 78, end: 87 },
							},
							loc: { start: 77, end: 88 },
						},
						loc: { start: 77, end: 89 },
					},
					directives: [],
					loc: { start: 65, end: 89 },
				},
			],
			loc: { start: 43, end: 91 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 98, end: 106 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 111, end: 113 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 115, end: 117 },
							},
							loc: { start: 115, end: 117 },
						},
						loc: { start: 115, end: 118 },
					},
					directives: [],
					loc: { start: 111, end: 118 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 121, end: 125 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 127, end: 133 },
							},
							loc: { start: 127, end: 133 },
						},
						loc: { start: 127, end: 134 },
					},
					directives: [],
					loc: { start: 121, end: 134 },
				},
			],
			loc: { start: 93, end: 136 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 149, end: 154 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 159, end: 164 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 165, end: 167 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 169, end: 171 },
									},
									loc: { start: 169, end: 171 },
								},
								loc: { start: 169, end: 172 },
							},
							directives: [],
							loc: { start: 165, end: 172 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "OrderResult",
							loc: { start: 175, end: 186 },
						},
						loc: { start: 175, end: 186 },
					},
					directives: [],
					loc: { start: 159, end: 186 },
				},
			],
			loc: { start: 137, end: 188 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Mutation", loc: { start: 195, end: 203 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "addToOrder",
						loc: { start: 208, end: 218 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderId",
								loc: { start: 219, end: 226 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "ID",
									loc: { start: 228, end: 230 },
								},
								loc: { start: 228, end: 230 },
							},
							directives: [],
							loc: { start: 219, end: 230 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "productId",
								loc: { start: 232, end: 241 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 243, end: 245 },
									},
									loc: { start: 243, end: 245 },
								},
								loc: { start: 243, end: 246 },
							},
							directives: [],
							loc: { start: 232, end: 246 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "quantity",
								loc: { start: 248, end: 256 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 258, end: 261 },
									},
									loc: { start: 258, end: 261 },
								},
								loc: { start: 258, end: 262 },
							},
							directives: [],
							loc: { start: 248, end: 262 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "AddToOrderResult",
							loc: { start: 265, end: 281 },
						},
						loc: { start: 265, end: 281 },
					},
					directives: [],
					loc: { start: 208, end: 281 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removeOrderItem",
						loc: { start: 284, end: 299 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderId",
								loc: { start: 300, end: 307 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 309, end: 311 },
									},
									loc: { start: 309, end: 311 },
								},
								loc: { start: 309, end: 312 },
							},
							directives: [],
							loc: { start: 300, end: 312 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "productId",
								loc: { start: 314, end: 323 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 325, end: 327 },
									},
									loc: { start: 325, end: 327 },
								},
								loc: { start: 325, end: 328 },
							},
							directives: [],
							loc: { start: 314, end: 328 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "RemoveOrderItemResult",
							loc: { start: 331, end: 352 },
						},
						loc: { start: 331, end: 352 },
					},
					directives: [],
					loc: { start: 284, end: 352 },
				},
			],
			loc: { start: 190, end: 354 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 361, end: 366 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 371, end: 373 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 375, end: 377 },
							},
							loc: { start: 375, end: 377 },
						},
						loc: { start: 375, end: 378 },
					},
					directives: [],
					loc: { start: 371, end: 378 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 381, end: 387 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 389, end: 395 },
							},
							loc: { start: 389, end: 395 },
						},
						loc: { start: 389, end: 396 },
					},
					directives: [],
					loc: { start: 381, end: 396 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 399, end: 409 },
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
									loc: { start: 412, end: 421 },
								},
								loc: { start: 412, end: 421 },
							},
							loc: { start: 411, end: 422 },
						},
						loc: { start: 411, end: 423 },
					},
					directives: [],
					loc: { start: 399, end: 423 },
				},
			],
			loc: { start: 356, end: 425 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 432, end: 441 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 446, end: 454 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 456, end: 459 },
							},
							loc: { start: 456, end: 459 },
						},
						loc: { start: 456, end: 460 },
					},
					directives: [],
					loc: { start: 446, end: 460 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 463, end: 470 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 472, end: 479 },
							},
							loc: { start: 472, end: 479 },
						},
						loc: { start: 472, end: 480 },
					},
					directives: [],
					loc: { start: 463, end: 480 },
				},
			],
			loc: { start: 427, end: 482 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderSuccess",
				loc: { start: 489, end: 501 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 506, end: 511 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 513, end: 518 },
							},
							loc: { start: 513, end: 518 },
						},
						loc: { start: 513, end: 519 },
					},
					directives: [],
					loc: { start: 506, end: 519 },
				},
			],
			loc: { start: 484, end: 521 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderResult",
				loc: { start: 529, end: 540 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderSuccess",
						loc: { start: 543, end: 555 },
					},
					loc: { start: 543, end: 555 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 558, end: 571 },
					},
					loc: { start: 558, end: 571 },
				},
			],
			loc: { start: 523, end: 571 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderNotFound",
				loc: { start: 578, end: 591 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 596, end: 603 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 605, end: 611 },
							},
							loc: { start: 605, end: 611 },
						},
						loc: { start: 605, end: 612 },
					},
					directives: [],
					loc: { start: 596, end: 612 },
				},
			],
			loc: { start: 573, end: 614 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "InvalidOrder",
				loc: { start: 621, end: 633 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 638, end: 645 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 647, end: 653 },
							},
							loc: { start: 647, end: 653 },
						},
						loc: { start: 647, end: 654 },
					},
					directives: [],
					loc: { start: 638, end: 654 },
				},
			],
			loc: { start: 616, end: 656 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "InvalidQuantity",
				loc: { start: 663, end: 678 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 683, end: 690 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 692, end: 698 },
							},
							loc: { start: 692, end: 698 },
						},
						loc: { start: 692, end: 699 },
					},
					directives: [],
					loc: { start: 683, end: 699 },
				},
			],
			loc: { start: 658, end: 701 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "UpdatedOrder",
				loc: { start: 708, end: 720 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 725, end: 730 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 732, end: 737 },
							},
							loc: { start: 732, end: 737 },
						},
						loc: { start: 732, end: 738 },
					},
					directives: [],
					loc: { start: 725, end: 738 },
				},
			],
			loc: { start: 703, end: 740 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "AddToOrderResult",
				loc: { start: 748, end: 764 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "UpdatedOrder",
						loc: { start: 767, end: 779 },
					},
					loc: { start: 767, end: 779 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "InvalidOrder",
						loc: { start: 782, end: 794 },
					},
					loc: { start: 782, end: 794 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "InvalidQuantity",
						loc: { start: 797, end: 812 },
					},
					loc: { start: 797, end: 812 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 815, end: 830 },
					},
					loc: { start: 815, end: 830 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 833, end: 846 },
					},
					loc: { start: 833, end: 846 },
				},
			],
			loc: { start: 742, end: 846 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "RemoveOrderItemResult",
				loc: { start: 854, end: 875 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "RemovedOrderItem",
						loc: { start: 878, end: 894 },
					},
					loc: { start: 878, end: 894 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 897, end: 910 },
					},
					loc: { start: 897, end: 910 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 913, end: 928 },
					},
					loc: { start: 913, end: 928 },
				},
			],
			loc: { start: 848, end: 928 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "RemovedOrderItem",
				loc: { start: 935, end: 951 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removedItem",
						loc: { start: 956, end: 967 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "OrderItem",
								loc: { start: 969, end: 978 },
							},
							loc: { start: 969, end: 978 },
						},
						loc: { start: 969, end: 979 },
					},
					directives: [],
					loc: { start: 956, end: 979 },
				},
			],
			loc: { start: 930, end: 981 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 994, end: 999 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1004, end: 1012 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 1013, end: 1018 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 1020, end: 1023 },
									},
									loc: { start: 1020, end: 1023 },
								},
								loc: { start: 1020, end: 1024 },
							},
							directives: [],
							loc: { start: 1013, end: 1024 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1026, end: 1030 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1032, end: 1035 },
								},
								loc: { start: 1032, end: 1035 },
							},
							directives: [],
							loc: { start: 1026, end: 1035 },
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
										loc: { start: 1039, end: 1046 },
									},
									loc: { start: 1039, end: 1046 },
								},
								loc: { start: 1039, end: 1047 },
							},
							loc: { start: 1038, end: 1048 },
						},
						loc: { start: 1038, end: 1049 },
					},
					directives: [],
					loc: { start: 1004, end: 1049 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productsByCategory",
						loc: { start: 1052, end: 1070 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 1071, end: 1076 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 1078, end: 1081 },
									},
									loc: { start: 1078, end: 1081 },
								},
								loc: { start: 1078, end: 1082 },
							},
							directives: [],
							loc: { start: 1071, end: 1082 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 1084, end: 1092 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1094, end: 1100 },
									},
									loc: { start: 1094, end: 1100 },
								},
								loc: { start: 1094, end: 1101 },
							},
							directives: [],
							loc: { start: 1084, end: 1101 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1103, end: 1107 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1109, end: 1112 },
								},
								loc: { start: 1109, end: 1112 },
							},
							directives: [],
							loc: { start: 1103, end: 1112 },
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
										loc: { start: 1116, end: 1123 },
									},
									loc: { start: 1116, end: 1123 },
								},
								loc: { start: 1116, end: 1124 },
							},
							loc: { start: 1115, end: 1125 },
						},
						loc: { start: 1115, end: 1126 },
					},
					directives: [],
					loc: { start: 1052, end: 1126 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1129, end: 1136 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1137, end: 1139 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1141, end: 1143 },
									},
									loc: { start: 1141, end: 1143 },
								},
								loc: { start: 1141, end: 1144 },
							},
							directives: [],
							loc: { start: 1137, end: 1144 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "ProductResult",
							loc: { start: 1147, end: 1160 },
						},
						loc: { start: 1147, end: 1160 },
					},
					directives: [],
					loc: { start: 1129, end: 1160 },
				},
			],
			loc: { start: 982, end: 1162 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1169, end: 1176 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1181, end: 1183 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1185, end: 1187 },
							},
							loc: { start: 1185, end: 1187 },
						},
						loc: { start: 1185, end: 1188 },
					},
					directives: [],
					loc: { start: 1181, end: 1188 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1191, end: 1195 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1197, end: 1203 },
							},
							loc: { start: 1197, end: 1203 },
						},
						loc: { start: 1197, end: 1204 },
					},
					directives: [],
					loc: { start: 1191, end: 1204 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 1207, end: 1211 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1213, end: 1219 },
							},
							loc: { start: 1213, end: 1219 },
						},
						loc: { start: 1213, end: 1220 },
					},
					directives: [],
					loc: { start: 1207, end: 1220 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1223, end: 1234 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1236, end: 1242 },
							},
							loc: { start: 1236, end: 1242 },
						},
						loc: { start: 1236, end: 1243 },
					},
					directives: [],
					loc: { start: 1223, end: 1243 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1246, end: 1251 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1253, end: 1259 },
							},
							loc: { start: 1253, end: 1259 },
						},
						loc: { start: 1253, end: 1260 },
					},
					directives: [],
					loc: { start: 1246, end: 1260 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1263, end: 1272 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1274, end: 1282 },
							},
							loc: { start: 1274, end: 1282 },
						},
						loc: { start: 1274, end: 1283 },
					},
					directives: [],
					loc: { start: 1263, end: 1283 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1286, end: 1295 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1297, end: 1305 },
							},
							loc: { start: 1297, end: 1305 },
						},
						loc: { start: 1297, end: 1306 },
					},
					directives: [],
					loc: { start: 1286, end: 1306 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 1309, end: 1319 },
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
									loc: { start: 1322, end: 1330 },
								},
								loc: { start: 1322, end: 1330 },
							},
							loc: { start: 1321, end: 1331 },
						},
						loc: { start: 1321, end: 1332 },
					},
					directives: [],
					loc: { start: 1309, end: 1332 },
				},
			],
			loc: { start: 1164, end: 1334 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductNotFound",
				loc: { start: 1341, end: 1356 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 1361, end: 1368 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1370, end: 1376 },
							},
							loc: { start: 1370, end: 1376 },
						},
						loc: { start: 1370, end: 1377 },
					},
					directives: [],
					loc: { start: 1361, end: 1377 },
				},
			],
			loc: { start: 1336, end: 1379 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductSuccess",
				loc: { start: 1386, end: 1400 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1405, end: 1412 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1414, end: 1421 },
							},
							loc: { start: 1414, end: 1421 },
						},
						loc: { start: 1414, end: 1422 },
					},
					directives: [],
					loc: { start: 1405, end: 1422 },
				},
			],
			loc: { start: 1381, end: 1424 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductResult",
				loc: { start: 1432, end: 1445 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductSuccess",
						loc: { start: 1448, end: 1462 },
					},
					loc: { start: 1448, end: 1462 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 1465, end: 1480 },
					},
					loc: { start: 1465, end: 1480 },
				},
			],
			loc: { start: 1426, end: 1480 },
		},
	],
	loc: { start: 0, end: 1481 },
} as unknown as DocumentNode;
