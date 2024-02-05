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
				value: "InvalidQuantity",
				loc: { start: 621, end: 636 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 641, end: 648 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 650, end: 656 },
							},
							loc: { start: 650, end: 656 },
						},
						loc: { start: 650, end: 657 },
					},
					directives: [],
					loc: { start: 641, end: 657 },
				},
			],
			loc: { start: 616, end: 659 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "AddToOrderError",
				loc: { start: 666, end: 681 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 686, end: 693 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 695, end: 701 },
							},
							loc: { start: 695, end: 701 },
						},
						loc: { start: 695, end: 702 },
					},
					directives: [],
					loc: { start: 686, end: 702 },
				},
			],
			loc: { start: 661, end: 704 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "UpdatedOrder",
				loc: { start: 711, end: 723 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 728, end: 733 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 735, end: 740 },
							},
							loc: { start: 735, end: 740 },
						},
						loc: { start: 735, end: 741 },
					},
					directives: [],
					loc: { start: 728, end: 741 },
				},
			],
			loc: { start: 706, end: 743 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "AddToOrderResult",
				loc: { start: 751, end: 767 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "UpdatedOrder",
						loc: { start: 770, end: 782 },
					},
					loc: { start: 770, end: 782 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "InvalidQuantity",
						loc: { start: 785, end: 800 },
					},
					loc: { start: 785, end: 800 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "AddToOrderError",
						loc: { start: 803, end: 818 },
					},
					loc: { start: 803, end: 818 },
				},
			],
			loc: { start: 745, end: 818 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "RemoveOrderItemResult",
				loc: { start: 826, end: 847 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "RemovedOrderItem",
						loc: { start: 850, end: 866 },
					},
					loc: { start: 850, end: 866 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 869, end: 882 },
					},
					loc: { start: 869, end: 882 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 885, end: 900 },
					},
					loc: { start: 885, end: 900 },
				},
			],
			loc: { start: 820, end: 900 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "RemovedOrderItem",
				loc: { start: 907, end: 923 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removedItem",
						loc: { start: 928, end: 939 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "OrderItem",
								loc: { start: 941, end: 950 },
							},
							loc: { start: 941, end: 950 },
						},
						loc: { start: 941, end: 951 },
					},
					directives: [],
					loc: { start: 928, end: 951 },
				},
			],
			loc: { start: 902, end: 953 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 966, end: 971 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 976, end: 984 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 985, end: 990 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 992, end: 995 },
									},
									loc: { start: 992, end: 995 },
								},
								loc: { start: 992, end: 996 },
							},
							directives: [],
							loc: { start: 985, end: 996 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 998, end: 1002 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1004, end: 1007 },
								},
								loc: { start: 1004, end: 1007 },
							},
							directives: [],
							loc: { start: 998, end: 1007 },
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
										loc: { start: 1011, end: 1018 },
									},
									loc: { start: 1011, end: 1018 },
								},
								loc: { start: 1011, end: 1019 },
							},
							loc: { start: 1010, end: 1020 },
						},
						loc: { start: 1010, end: 1021 },
					},
					directives: [],
					loc: { start: 976, end: 1021 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productsByCategory",
						loc: { start: 1024, end: 1042 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 1043, end: 1048 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 1050, end: 1053 },
									},
									loc: { start: 1050, end: 1053 },
								},
								loc: { start: 1050, end: 1054 },
							},
							directives: [],
							loc: { start: 1043, end: 1054 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 1056, end: 1064 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1066, end: 1072 },
									},
									loc: { start: 1066, end: 1072 },
								},
								loc: { start: 1066, end: 1073 },
							},
							directives: [],
							loc: { start: 1056, end: 1073 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1075, end: 1079 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1081, end: 1084 },
								},
								loc: { start: 1081, end: 1084 },
							},
							directives: [],
							loc: { start: 1075, end: 1084 },
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
										loc: { start: 1088, end: 1095 },
									},
									loc: { start: 1088, end: 1095 },
								},
								loc: { start: 1088, end: 1096 },
							},
							loc: { start: 1087, end: 1097 },
						},
						loc: { start: 1087, end: 1098 },
					},
					directives: [],
					loc: { start: 1024, end: 1098 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1101, end: 1108 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1109, end: 1111 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1113, end: 1115 },
									},
									loc: { start: 1113, end: 1115 },
								},
								loc: { start: 1113, end: 1116 },
							},
							directives: [],
							loc: { start: 1109, end: 1116 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "ProductResult",
							loc: { start: 1119, end: 1132 },
						},
						loc: { start: 1119, end: 1132 },
					},
					directives: [],
					loc: { start: 1101, end: 1132 },
				},
			],
			loc: { start: 954, end: 1134 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1141, end: 1148 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1153, end: 1155 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1157, end: 1159 },
							},
							loc: { start: 1157, end: 1159 },
						},
						loc: { start: 1157, end: 1160 },
					},
					directives: [],
					loc: { start: 1153, end: 1160 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1163, end: 1167 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1169, end: 1175 },
							},
							loc: { start: 1169, end: 1175 },
						},
						loc: { start: 1169, end: 1176 },
					},
					directives: [],
					loc: { start: 1163, end: 1176 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 1179, end: 1183 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1185, end: 1191 },
							},
							loc: { start: 1185, end: 1191 },
						},
						loc: { start: 1185, end: 1192 },
					},
					directives: [],
					loc: { start: 1179, end: 1192 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1195, end: 1206 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1208, end: 1214 },
							},
							loc: { start: 1208, end: 1214 },
						},
						loc: { start: 1208, end: 1215 },
					},
					directives: [],
					loc: { start: 1195, end: 1215 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1218, end: 1223 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1225, end: 1231 },
							},
							loc: { start: 1225, end: 1231 },
						},
						loc: { start: 1225, end: 1232 },
					},
					directives: [],
					loc: { start: 1218, end: 1232 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1235, end: 1244 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1246, end: 1254 },
							},
							loc: { start: 1246, end: 1254 },
						},
						loc: { start: 1246, end: 1255 },
					},
					directives: [],
					loc: { start: 1235, end: 1255 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1258, end: 1267 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1269, end: 1277 },
							},
							loc: { start: 1269, end: 1277 },
						},
						loc: { start: 1269, end: 1278 },
					},
					directives: [],
					loc: { start: 1258, end: 1278 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 1281, end: 1291 },
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
									loc: { start: 1294, end: 1302 },
								},
								loc: { start: 1294, end: 1302 },
							},
							loc: { start: 1293, end: 1303 },
						},
						loc: { start: 1293, end: 1304 },
					},
					directives: [],
					loc: { start: 1281, end: 1304 },
				},
			],
			loc: { start: 1136, end: 1306 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductNotFound",
				loc: { start: 1313, end: 1328 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 1333, end: 1340 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1342, end: 1348 },
							},
							loc: { start: 1342, end: 1348 },
						},
						loc: { start: 1342, end: 1349 },
					},
					directives: [],
					loc: { start: 1333, end: 1349 },
				},
			],
			loc: { start: 1308, end: 1351 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductSuccess",
				loc: { start: 1358, end: 1372 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1377, end: 1384 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1386, end: 1393 },
							},
							loc: { start: 1386, end: 1393 },
						},
						loc: { start: 1386, end: 1394 },
					},
					directives: [],
					loc: { start: 1377, end: 1394 },
				},
			],
			loc: { start: 1353, end: 1396 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductResult",
				loc: { start: 1404, end: 1417 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductSuccess",
						loc: { start: 1420, end: 1434 },
					},
					loc: { start: 1420, end: 1434 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 1437, end: 1452 },
					},
					loc: { start: 1437, end: 1452 },
				},
			],
			loc: { start: 1398, end: 1452 },
		},
	],
	loc: { start: 0, end: 1453 },
} as unknown as DocumentNode;
