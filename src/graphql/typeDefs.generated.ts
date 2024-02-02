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
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "AddToOrderError",
				loc: { start: 730, end: 745 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 748, end: 761 },
					},
					loc: { start: 748, end: 761 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 764, end: 779 },
					},
					loc: { start: 764, end: 779 },
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
			],
			loc: { start: 724, end: 794 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "RemoveOrderItemPayload",
				loc: { start: 801, end: 823 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removedItem",
						loc: { start: 828, end: 839 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "OrderItem",
							loc: { start: 841, end: 850 },
						},
						loc: { start: 841, end: 850 },
					},
					directives: [],
					loc: { start: 828, end: 850 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderErrors",
						loc: { start: 853, end: 864 },
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
										loc: { start: 867, end: 887 },
									},
									loc: { start: 867, end: 887 },
								},
								loc: { start: 867, end: 888 },
							},
							loc: { start: 866, end: 889 },
						},
						loc: { start: 866, end: 890 },
					},
					directives: [],
					loc: { start: 853, end: 890 },
				},
			],
			loc: { start: 796, end: 892 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "RemoveOrderItemError",
				loc: { start: 900, end: 920 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "OrderNotFound",
						loc: { start: 923, end: 936 },
					},
					loc: { start: 923, end: 936 },
				},
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 939, end: 954 },
					},
					loc: { start: 939, end: 954 },
				},
			],
			loc: { start: 894, end: 954 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 967, end: 972 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 977, end: 985 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 986, end: 991 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 993, end: 996 },
									},
									loc: { start: 993, end: 996 },
								},
								loc: { start: 993, end: 997 },
							},
							directives: [],
							loc: { start: 986, end: 997 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 999, end: 1003 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1005, end: 1008 },
								},
								loc: { start: 1005, end: 1008 },
							},
							directives: [],
							loc: { start: 999, end: 1008 },
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
										loc: { start: 1012, end: 1019 },
									},
									loc: { start: 1012, end: 1019 },
								},
								loc: { start: 1012, end: 1020 },
							},
							loc: { start: 1011, end: 1021 },
						},
						loc: { start: 1011, end: 1022 },
					},
					directives: [],
					loc: { start: 977, end: 1022 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productsByCategory",
						loc: { start: 1025, end: 1043 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 1044, end: 1049 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 1051, end: 1054 },
									},
									loc: { start: 1051, end: 1054 },
								},
								loc: { start: 1051, end: 1055 },
							},
							directives: [],
							loc: { start: 1044, end: 1055 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 1057, end: 1065 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1067, end: 1073 },
									},
									loc: { start: 1067, end: 1073 },
								},
								loc: { start: 1067, end: 1074 },
							},
							directives: [],
							loc: { start: 1057, end: 1074 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1076, end: 1080 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1082, end: 1085 },
								},
								loc: { start: 1082, end: 1085 },
							},
							directives: [],
							loc: { start: 1076, end: 1085 },
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
										loc: { start: 1089, end: 1096 },
									},
									loc: { start: 1089, end: 1096 },
								},
								loc: { start: 1089, end: 1097 },
							},
							loc: { start: 1088, end: 1098 },
						},
						loc: { start: 1088, end: 1099 },
					},
					directives: [],
					loc: { start: 1025, end: 1099 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1102, end: 1109 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1110, end: 1112 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1114, end: 1116 },
									},
									loc: { start: 1114, end: 1116 },
								},
								loc: { start: 1114, end: 1117 },
							},
							directives: [],
							loc: { start: 1110, end: 1117 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "GetProductPayload",
								loc: { start: 1120, end: 1137 },
							},
							loc: { start: 1120, end: 1137 },
						},
						loc: { start: 1120, end: 1138 },
					},
					directives: [],
					loc: { start: 1102, end: 1138 },
				},
			],
			loc: { start: 955, end: 1140 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1147, end: 1154 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1159, end: 1161 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1163, end: 1165 },
							},
							loc: { start: 1163, end: 1165 },
						},
						loc: { start: 1163, end: 1166 },
					},
					directives: [],
					loc: { start: 1159, end: 1166 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1169, end: 1173 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1175, end: 1181 },
							},
							loc: { start: 1175, end: 1181 },
						},
						loc: { start: 1175, end: 1182 },
					},
					directives: [],
					loc: { start: 1169, end: 1182 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 1185, end: 1189 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1191, end: 1197 },
							},
							loc: { start: 1191, end: 1197 },
						},
						loc: { start: 1191, end: 1198 },
					},
					directives: [],
					loc: { start: 1185, end: 1198 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1201, end: 1212 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1214, end: 1220 },
							},
							loc: { start: 1214, end: 1220 },
						},
						loc: { start: 1214, end: 1221 },
					},
					directives: [],
					loc: { start: 1201, end: 1221 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1224, end: 1229 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1231, end: 1237 },
							},
							loc: { start: 1231, end: 1237 },
						},
						loc: { start: 1231, end: 1238 },
					},
					directives: [],
					loc: { start: 1224, end: 1238 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1241, end: 1250 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1252, end: 1260 },
							},
							loc: { start: 1252, end: 1260 },
						},
						loc: { start: 1252, end: 1261 },
					},
					directives: [],
					loc: { start: 1241, end: 1261 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1264, end: 1273 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1275, end: 1283 },
							},
							loc: { start: 1275, end: 1283 },
						},
						loc: { start: 1275, end: 1284 },
					},
					directives: [],
					loc: { start: 1264, end: 1284 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 1287, end: 1297 },
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
									loc: { start: 1300, end: 1308 },
								},
								loc: { start: 1300, end: 1308 },
							},
							loc: { start: 1299, end: 1309 },
						},
						loc: { start: 1299, end: 1310 },
					},
					directives: [],
					loc: { start: 1287, end: 1310 },
				},
			],
			loc: { start: 1142, end: 1312 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "GetProductPayload",
				loc: { start: 1319, end: 1336 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1341, end: 1348 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1350, end: 1357 },
						},
						loc: { start: 1350, end: 1357 },
					},
					directives: [],
					loc: { start: 1341, end: 1357 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productErrors",
						loc: { start: 1360, end: 1373 },
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
										loc: { start: 1376, end: 1391 },
									},
									loc: { start: 1376, end: 1391 },
								},
								loc: { start: 1376, end: 1392 },
							},
							loc: { start: 1375, end: 1393 },
						},
						loc: { start: 1375, end: 1394 },
					},
					directives: [],
					loc: { start: 1360, end: 1394 },
				},
			],
			loc: { start: 1314, end: 1396 },
		},
		{
			kind: "UnionTypeDefinition",
			name: {
				kind: "Name",
				value: "GetProductError",
				loc: { start: 1404, end: 1419 },
			},
			directives: [],
			types: [
				{
					kind: "NamedType",
					name: {
						kind: "Name",
						value: "ProductNotFound",
						loc: { start: 1422, end: 1437 },
					},
					loc: { start: 1422, end: 1437 },
				},
			],
			loc: { start: 1398, end: 1437 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductNotFound",
				loc: { start: 1444, end: 1459 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "message",
						loc: { start: 1464, end: 1471 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1473, end: 1479 },
							},
							loc: { start: 1473, end: 1479 },
						},
						loc: { start: 1473, end: 1480 },
					},
					directives: [],
					loc: { start: 1464, end: 1480 },
				},
			],
			loc: { start: 1439, end: 1482 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1488, end: 1493 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1483, end: 1493 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 1502, end: 1510 },
			},
			directives: [],
			loc: { start: 1495, end: 1510 },
		},
	],
	loc: { start: 0, end: 1511 },
} as unknown as DocumentNode;
