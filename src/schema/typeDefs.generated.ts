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
						value: "updateOrder",
						loc: { start: 208, end: 219 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderId",
								loc: { start: 220, end: 227 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "ID",
									loc: { start: 229, end: 231 },
								},
								loc: { start: 229, end: 231 },
							},
							directives: [],
							loc: { start: 220, end: 231 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "productId",
								loc: { start: 233, end: 242 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 244, end: 246 },
									},
									loc: { start: 244, end: 246 },
								},
								loc: { start: 244, end: 247 },
							},
							directives: [],
							loc: { start: 233, end: 247 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "quantity",
								loc: { start: 249, end: 257 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 259, end: 262 },
									},
									loc: { start: 259, end: 262 },
								},
								loc: { start: 259, end: 263 },
							},
							directives: [],
							loc: { start: 249, end: 263 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "UpdateOrderResult",
							loc: { start: 266, end: 283 },
						},
						loc: { start: 266, end: 283 },
					},
					directives: [],
					loc: { start: 208, end: 283 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removeAllItemsFromOrder",
						loc: { start: 286, end: 309 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderId",
								loc: { start: 310, end: 317 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 319, end: 321 },
									},
									loc: { start: 319, end: 321 },
								},
								loc: { start: 319, end: 322 },
							},
							directives: [],
							loc: { start: 310, end: 322 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "RemoveAllItemsFromOrderResult",
							loc: { start: 325, end: 354 },
						},
						loc: { start: 325, end: 354 },
					},
					directives: [],
					loc: { start: 286, end: 354 },
				},
			],
			loc: { start: 190, end: 356 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 363, end: 368 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 373, end: 375 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 377, end: 379 },
							},
							loc: { start: 377, end: 379 },
						},
						loc: { start: 377, end: 380 },
					},
					directives: [],
					loc: { start: 373, end: 380 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 383, end: 389 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 391, end: 397 },
							},
							loc: { start: 391, end: 397 },
						},
						loc: { start: 391, end: 398 },
					},
					directives: [],
					loc: { start: 383, end: 398 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "totalPrice",
						loc: { start: 401, end: 411 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 413, end: 419 },
							},
							loc: { start: 413, end: 419 },
						},
						loc: { start: 413, end: 420 },
					},
					directives: [],
					loc: { start: 401, end: 420 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 423, end: 433 },
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
										value: "OrderItem",
										loc: { start: 436, end: 445 },
									},
									loc: { start: 436, end: 445 },
								},
								loc: { start: 436, end: 446 },
							},
							loc: { start: 435, end: 447 },
						},
						loc: { start: 435, end: 448 },
					},
					directives: [],
					loc: { start: 423, end: 448 },
				},
			],
			loc: { start: 358, end: 450 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 457, end: 466 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 471, end: 479 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 481, end: 484 },
							},
							loc: { start: 481, end: 484 },
						},
						loc: { start: 481, end: 485 },
					},
					directives: [],
					loc: { start: 471, end: 485 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 488, end: 495 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 497, end: 504 },
							},
							loc: { start: 497, end: 504 },
						},
						loc: { start: 497, end: 505 },
					},
					directives: [],
					loc: { start: 488, end: 505 },
				},
			],
			loc: { start: 452, end: 507 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderSuccess",
				loc: { start: 514, end: 526 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 531, end: 536 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 538, end: 543 },
							},
							loc: { start: 538, end: 543 },
						},
						loc: { start: 538, end: 544 },
					},
					directives: [],
					loc: { start: 531, end: 544 },
				},
			],
			loc: { start: 509, end: 546 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderResult",
				loc: { start: 554, end: 565 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderSuccess",
						loc: { start: 568, end: 580 },
					},
					loc: { start: 568, end: 580 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 583, end: 596 },
					},
					loc: { start: 583, end: 596 },
				},
			],
			loc: { start: 548, end: 596 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderNotFound",
				loc: { start: 603, end: 616 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 621, end: 628 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 630, end: 636 },
							},
							loc: { start: 630, end: 636 },
						},
						loc: { start: 630, end: 637 },
					},
					directives: [],
					loc: { start: 621, end: 637 },
				},
			],
			loc: { start: 598, end: 639 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "InvalidQuantity",
				loc: { start: 646, end: 661 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 666, end: 673 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 675, end: 681 },
							},
							loc: { start: 675, end: 681 },
						},
						loc: { start: 675, end: 682 },
					},
					directives: [],
					loc: { start: 666, end: 682 },
				},
			],
			loc: { start: 641, end: 684 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "AddToOrderError",
				loc: { start: 691, end: 706 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 711, end: 718 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 720, end: 726 },
							},
							loc: { start: 720, end: 726 },
						},
						loc: { start: 720, end: 727 },
					},
					directives: [],
					loc: { start: 711, end: 727 },
				},
			],
			loc: { start: 686, end: 729 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "UpdatedOrder",
				loc: { start: 736, end: 748 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 753, end: 758 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 760, end: 765 },
							},
							loc: { start: 760, end: 765 },
						},
						loc: { start: 760, end: 766 },
					},
					directives: [],
					loc: { start: 753, end: 766 },
				},
			],
			loc: { start: 731, end: 768 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "UpdateOrderResult",
				loc: { start: 776, end: 793 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "UpdatedOrder",
						loc: { start: 796, end: 808 },
					},
					loc: { start: 796, end: 808 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "InvalidQuantity",
						loc: { start: 811, end: 826 },
					},
					loc: { start: 811, end: 826 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "AddToOrderError",
						loc: { start: 829, end: 844 },
					},
					loc: { start: 829, end: 844 },
				},
			],
			loc: { start: 770, end: 844 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "RemoveAllItemsFromOrderResult",
				loc: { start: 852, end: 881 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "RemoveAllItemsFromOrderSuccess",
						loc: { start: 884, end: 914 },
					},
					loc: { start: 884, end: 914 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 917, end: 930 },
					},
					loc: { start: 917, end: 930 },
				},
			],
			loc: { start: 846, end: 930 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "RemoveAllItemsFromOrderSuccess",
				loc: { start: 937, end: 967 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 972, end: 979 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 981, end: 987 },
							},
							loc: { start: 981, end: 987 },
						},
						loc: { start: 981, end: 988 },
					},
					directives: [],
					loc: { start: 972, end: 988 },
				},
			],
			loc: { start: 932, end: 990 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1003, end: 1008 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1013, end: 1021 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 1022, end: 1027 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 1029, end: 1032 },
									},
									loc: { start: 1029, end: 1032 },
								},
								loc: { start: 1029, end: 1033 },
							},
							directives: [],
							loc: { start: 1022, end: 1033 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1035, end: 1039 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1041, end: 1044 },
								},
								loc: { start: 1041, end: 1044 },
							},
							directives: [],
							loc: { start: 1035, end: 1044 },
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
										loc: { start: 1048, end: 1055 },
									},
									loc: { start: 1048, end: 1055 },
								},
								loc: { start: 1048, end: 1056 },
							},
							loc: { start: 1047, end: 1057 },
						},
						loc: { start: 1047, end: 1058 },
					},
					directives: [],
					loc: { start: 1013, end: 1058 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productsByCategory",
						loc: { start: 1061, end: 1079 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 1080, end: 1085 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 1087, end: 1090 },
									},
									loc: { start: 1087, end: 1090 },
								},
								loc: { start: 1087, end: 1091 },
							},
							directives: [],
							loc: { start: 1080, end: 1091 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 1093, end: 1101 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1103, end: 1109 },
									},
									loc: { start: 1103, end: 1109 },
								},
								loc: { start: 1103, end: 1110 },
							},
							directives: [],
							loc: { start: 1093, end: 1110 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1112, end: 1116 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1118, end: 1121 },
								},
								loc: { start: 1118, end: 1121 },
							},
							directives: [],
							loc: { start: 1112, end: 1121 },
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
										loc: { start: 1125, end: 1132 },
									},
									loc: { start: 1125, end: 1132 },
								},
								loc: { start: 1125, end: 1133 },
							},
							loc: { start: 1124, end: 1134 },
						},
						loc: { start: 1124, end: 1135 },
					},
					directives: [],
					loc: { start: 1061, end: 1135 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1138, end: 1145 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1146, end: 1148 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1150, end: 1152 },
									},
									loc: { start: 1150, end: 1152 },
								},
								loc: { start: 1150, end: 1153 },
							},
							directives: [],
							loc: { start: 1146, end: 1153 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "ProductResult",
							loc: { start: 1156, end: 1169 },
						},
						loc: { start: 1156, end: 1169 },
					},
					directives: [],
					loc: { start: 1138, end: 1169 },
				},
			],
			loc: { start: 991, end: 1171 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1178, end: 1185 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1190, end: 1192 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1194, end: 1196 },
							},
							loc: { start: 1194, end: 1196 },
						},
						loc: { start: 1194, end: 1197 },
					},
					directives: [],
					loc: { start: 1190, end: 1197 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1200, end: 1204 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1206, end: 1212 },
							},
							loc: { start: 1206, end: 1212 },
						},
						loc: { start: 1206, end: 1213 },
					},
					directives: [],
					loc: { start: 1200, end: 1213 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1216, end: 1227 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1229, end: 1235 },
							},
							loc: { start: 1229, end: 1235 },
						},
						loc: { start: 1229, end: 1236 },
					},
					directives: [],
					loc: { start: 1216, end: 1236 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1239, end: 1244 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1246, end: 1252 },
							},
							loc: { start: 1246, end: 1252 },
						},
						loc: { start: 1246, end: 1253 },
					},
					directives: [],
					loc: { start: 1239, end: 1253 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1256, end: 1265 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1267, end: 1275 },
							},
							loc: { start: 1267, end: 1275 },
						},
						loc: { start: 1267, end: 1276 },
					},
					directives: [],
					loc: { start: 1256, end: 1276 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1279, end: 1288 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1290, end: 1298 },
							},
							loc: { start: 1290, end: 1298 },
						},
						loc: { start: 1290, end: 1299 },
					},
					directives: [],
					loc: { start: 1279, end: 1299 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 1302, end: 1312 },
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
									loc: { start: 1315, end: 1323 },
								},
								loc: { start: 1315, end: 1323 },
							},
							loc: { start: 1314, end: 1324 },
						},
						loc: { start: 1314, end: 1325 },
					},
					directives: [],
					loc: { start: 1302, end: 1325 },
				},
			],
			loc: { start: 1173, end: 1327 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductNotFound",
				loc: { start: 1334, end: 1349 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 1354, end: 1361 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1363, end: 1369 },
							},
							loc: { start: 1363, end: 1369 },
						},
						loc: { start: 1363, end: 1370 },
					},
					directives: [],
					loc: { start: 1354, end: 1370 },
				},
			],
			loc: { start: 1329, end: 1372 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductSuccess",
				loc: { start: 1379, end: 1393 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1398, end: 1405 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1407, end: 1414 },
							},
							loc: { start: 1407, end: 1414 },
						},
						loc: { start: 1407, end: 1415 },
					},
					directives: [],
					loc: { start: 1398, end: 1415 },
				},
			],
			loc: { start: 1374, end: 1417 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductResult",
				loc: { start: 1425, end: 1438 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductSuccess",
						loc: { start: 1441, end: 1455 },
					},
					loc: { start: 1441, end: 1455 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 1458, end: 1473 },
					},
					loc: { start: 1458, end: 1473 },
				},
			],
			loc: { start: 1419, end: 1473 },
		},
	],
	loc: { start: 0, end: 1474 },
} as unknown as DocumentNode;
