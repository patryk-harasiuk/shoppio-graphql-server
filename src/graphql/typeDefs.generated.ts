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
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "InvalidOrder",
				loc: { start: 687, end: 699 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 704, end: 711 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 713, end: 719 },
							},
							loc: { start: 713, end: 719 },
						},
						loc: { start: 713, end: 720 },
					},
					directives: [],
					loc: { start: 704, end: 720 },
				},
			],
			loc: { start: 682, end: 722 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "InvalidQuantity",
				loc: { start: 729, end: 744 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 749, end: 756 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 758, end: 764 },
							},
							loc: { start: 758, end: 764 },
						},
						loc: { start: 758, end: 765 },
					},
					directives: [],
					loc: { start: 749, end: 765 },
				},
			],
			loc: { start: 724, end: 767 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "AddToOrderError",
				loc: { start: 775, end: 790 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 793, end: 806 },
					},
					loc: { start: 793, end: 806 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 809, end: 824 },
					},
					loc: { start: 809, end: 824 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "InvalidOrder",
						loc: { start: 827, end: 839 },
					},
					loc: { start: 827, end: 839 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "InvalidQuantity",
						loc: { start: 842, end: 857 },
					},
					loc: { start: 842, end: 857 },
				},
			],
			loc: { start: 769, end: 857 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "RemoveOrderItemPayload",
				loc: { start: 864, end: 886 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removedItem",
						loc: { start: 891, end: 902 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "OrderItem",
							loc: { start: 904, end: 913 },
						},
						loc: { start: 904, end: 913 },
					},
					directives: [],
					loc: { start: 891, end: 913 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderErrors",
						loc: { start: 916, end: 927 },
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
										loc: { start: 930, end: 950 },
									},
									loc: { start: 930, end: 950 },
								},
								loc: { start: 930, end: 951 },
							},
							loc: { start: 929, end: 952 },
						},
						loc: { start: 929, end: 953 },
					},
					directives: [],
					loc: { start: 916, end: 953 },
				},
			],
			loc: { start: 859, end: 955 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "RemoveOrderItemError",
				loc: { start: 963, end: 983 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 986, end: 999 },
					},
					loc: { start: 986, end: 999 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 1002, end: 1017 },
					},
					loc: { start: 1002, end: 1017 },
				},
			],
			loc: { start: 957, end: 1017 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1030, end: 1035 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1040, end: 1048 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 1049, end: 1054 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 1056, end: 1059 },
									},
									loc: { start: 1056, end: 1059 },
								},
								loc: { start: 1056, end: 1060 },
							},
							directives: [],
							loc: { start: 1049, end: 1060 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1062, end: 1066 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1068, end: 1071 },
								},
								loc: { start: 1068, end: 1071 },
							},
							directives: [],
							loc: { start: 1062, end: 1071 },
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
										loc: { start: 1075, end: 1082 },
									},
									loc: { start: 1075, end: 1082 },
								},
								loc: { start: 1075, end: 1083 },
							},
							loc: { start: 1074, end: 1084 },
						},
						loc: { start: 1074, end: 1085 },
					},
					directives: [],
					loc: { start: 1040, end: 1085 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productsByCategory",
						loc: { start: 1088, end: 1106 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 1107, end: 1112 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 1114, end: 1117 },
									},
									loc: { start: 1114, end: 1117 },
								},
								loc: { start: 1114, end: 1118 },
							},
							directives: [],
							loc: { start: 1107, end: 1118 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 1120, end: 1128 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1130, end: 1136 },
									},
									loc: { start: 1130, end: 1136 },
								},
								loc: { start: 1130, end: 1137 },
							},
							directives: [],
							loc: { start: 1120, end: 1137 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1139, end: 1143 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1145, end: 1148 },
								},
								loc: { start: 1145, end: 1148 },
							},
							directives: [],
							loc: { start: 1139, end: 1148 },
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
										loc: { start: 1152, end: 1159 },
									},
									loc: { start: 1152, end: 1159 },
								},
								loc: { start: 1152, end: 1160 },
							},
							loc: { start: 1151, end: 1161 },
						},
						loc: { start: 1151, end: 1162 },
					},
					directives: [],
					loc: { start: 1088, end: 1162 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1165, end: 1172 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1173, end: 1175 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1177, end: 1179 },
									},
									loc: { start: 1177, end: 1179 },
								},
								loc: { start: 1177, end: 1180 },
							},
							directives: [],
							loc: { start: 1173, end: 1180 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "GetProductPayload",
								loc: { start: 1183, end: 1200 },
							},
							loc: { start: 1183, end: 1200 },
						},
						loc: { start: 1183, end: 1201 },
					},
					directives: [],
					loc: { start: 1165, end: 1201 },
				},
			],
			loc: { start: 1018, end: 1203 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1210, end: 1217 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1222, end: 1224 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1226, end: 1228 },
							},
							loc: { start: 1226, end: 1228 },
						},
						loc: { start: 1226, end: 1229 },
					},
					directives: [],
					loc: { start: 1222, end: 1229 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1232, end: 1236 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1238, end: 1244 },
							},
							loc: { start: 1238, end: 1244 },
						},
						loc: { start: 1238, end: 1245 },
					},
					directives: [],
					loc: { start: 1232, end: 1245 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 1248, end: 1252 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1254, end: 1260 },
							},
							loc: { start: 1254, end: 1260 },
						},
						loc: { start: 1254, end: 1261 },
					},
					directives: [],
					loc: { start: 1248, end: 1261 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1264, end: 1275 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1277, end: 1283 },
							},
							loc: { start: 1277, end: 1283 },
						},
						loc: { start: 1277, end: 1284 },
					},
					directives: [],
					loc: { start: 1264, end: 1284 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1287, end: 1292 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1294, end: 1300 },
							},
							loc: { start: 1294, end: 1300 },
						},
						loc: { start: 1294, end: 1301 },
					},
					directives: [],
					loc: { start: 1287, end: 1301 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1304, end: 1313 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1315, end: 1323 },
							},
							loc: { start: 1315, end: 1323 },
						},
						loc: { start: 1315, end: 1324 },
					},
					directives: [],
					loc: { start: 1304, end: 1324 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1327, end: 1336 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1338, end: 1346 },
							},
							loc: { start: 1338, end: 1346 },
						},
						loc: { start: 1338, end: 1347 },
					},
					directives: [],
					loc: { start: 1327, end: 1347 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 1350, end: 1360 },
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
									loc: { start: 1363, end: 1371 },
								},
								loc: { start: 1363, end: 1371 },
							},
							loc: { start: 1362, end: 1372 },
						},
						loc: { start: 1362, end: 1373 },
					},
					directives: [],
					loc: { start: 1350, end: 1373 },
				},
			],
			loc: { start: 1205, end: 1375 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "GetProductPayload",
				loc: { start: 1382, end: 1399 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1404, end: 1411 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1413, end: 1420 },
						},
						loc: { start: 1413, end: 1420 },
					},
					directives: [],
					loc: { start: 1404, end: 1420 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productErrors",
						loc: { start: 1423, end: 1436 },
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
										loc: { start: 1439, end: 1454 },
									},
									loc: { start: 1439, end: 1454 },
								},
								loc: { start: 1439, end: 1455 },
							},
							loc: { start: 1438, end: 1456 },
						},
						loc: { start: 1438, end: 1457 },
					},
					directives: [],
					loc: { start: 1423, end: 1457 },
				},
			],
			loc: { start: 1377, end: 1459 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "GetProductError",
				loc: { start: 1467, end: 1482 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 1485, end: 1500 },
					},
					loc: { start: 1485, end: 1500 },
				},
			],
			loc: { start: 1461, end: 1500 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductNotFound",
				loc: { start: 1507, end: 1522 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 1527, end: 1534 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1536, end: 1542 },
							},
							loc: { start: 1536, end: 1542 },
						},
						loc: { start: 1536, end: 1543 },
					},
					directives: [],
					loc: { start: 1527, end: 1543 },
				},
			],
			loc: { start: 1502, end: 1545 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1551, end: 1556 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1546, end: 1556 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 1565, end: 1573 },
			},
			directives: [],
			loc: { start: 1558, end: 1573 },
		},
	],
	loc: { start: 0, end: 1574 },
} as unknown as DocumentNode;
