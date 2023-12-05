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
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 132, end: 137 },
						},
						loc: { start: 132, end: 137 },
					},
					directives: [],
					loc: { start: 116, end: 137 },
				},
			],
			loc: { start: 94, end: 139 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Mutation", loc: { start: 153, end: 161 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "addToOrder",
						loc: { start: 166, end: 176 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderId",
								loc: { start: 177, end: 184 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 186, end: 188 },
									},
									loc: { start: 186, end: 188 },
								},
								loc: { start: 186, end: 189 },
							},
							directives: [],
							loc: { start: 177, end: 189 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "productId",
								loc: { start: 191, end: 200 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 202, end: 204 },
									},
									loc: { start: 202, end: 204 },
								},
								loc: { start: 202, end: 205 },
							},
							directives: [],
							loc: { start: 191, end: 205 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 208, end: 213 },
						},
						loc: { start: 208, end: 213 },
					},
					directives: [],
					loc: { start: 166, end: 213 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removeOrderItem",
						loc: { start: 216, end: 231 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderId",
								loc: { start: 232, end: 239 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 241, end: 243 },
									},
									loc: { start: 241, end: 243 },
								},
								loc: { start: 241, end: 244 },
							},
							directives: [],
							loc: { start: 232, end: 244 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderItemId",
								loc: { start: 246, end: 257 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 259, end: 261 },
									},
									loc: { start: 259, end: 261 },
								},
								loc: { start: 259, end: 262 },
							},
							directives: [],
							loc: { start: 246, end: 262 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 265, end: 270 },
						},
						loc: { start: 265, end: 270 },
					},
					directives: [],
					loc: { start: 216, end: 270 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removeOrderItems",
						loc: { start: 273, end: 289 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderId",
								loc: { start: 290, end: 297 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 299, end: 301 },
									},
									loc: { start: 299, end: 301 },
								},
								loc: { start: 299, end: 302 },
							},
							directives: [],
							loc: { start: 290, end: 302 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 305, end: 310 },
						},
						loc: { start: 305, end: 310 },
					},
					directives: [],
					loc: { start: 273, end: 310 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateOrderItemQuantity",
						loc: { start: 313, end: 336 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderId",
								loc: { start: 337, end: 344 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 346, end: 348 },
									},
									loc: { start: 346, end: 348 },
								},
								loc: { start: 346, end: 349 },
							},
							directives: [],
							loc: { start: 337, end: 349 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderItemId",
								loc: { start: 351, end: 362 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 364, end: 366 },
									},
									loc: { start: 364, end: 366 },
								},
								loc: { start: 364, end: 367 },
							},
							directives: [],
							loc: { start: 351, end: 367 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 370, end: 375 },
						},
						loc: { start: 370, end: 375 },
					},
					directives: [],
					loc: { start: 313, end: 375 },
				},
			],
			loc: { start: 141, end: 377 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 384, end: 389 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 394, end: 396 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 398, end: 400 },
							},
							loc: { start: 398, end: 400 },
						},
						loc: { start: 398, end: 401 },
					},
					directives: [],
					loc: { start: 394, end: 401 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "total", loc: { start: 404, end: 409 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 411, end: 414 },
							},
							loc: { start: 411, end: 414 },
						},
						loc: { start: 411, end: 415 },
					},
					directives: [],
					loc: { start: 404, end: 415 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 418, end: 424 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 426, end: 432 },
							},
							loc: { start: 426, end: 432 },
						},
						loc: { start: 426, end: 433 },
					},
					directives: [],
					loc: { start: 418, end: 433 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 436, end: 446 },
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
									loc: { start: 449, end: 458 },
								},
								loc: { start: 449, end: 458 },
							},
							loc: { start: 448, end: 459 },
						},
						loc: { start: 448, end: 460 },
					},
					directives: [],
					loc: { start: 436, end: 460 },
				},
			],
			loc: { start: 379, end: 462 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 469, end: 478 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 483, end: 491 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 493, end: 496 },
							},
							loc: { start: 493, end: 496 },
						},
						loc: { start: 493, end: 497 },
					},
					directives: [],
					loc: { start: 483, end: 497 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 500, end: 507 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 509, end: 516 },
							},
							loc: { start: 509, end: 516 },
						},
						loc: { start: 509, end: 517 },
					},
					directives: [],
					loc: { start: 500, end: 517 },
				},
			],
			loc: { start: 464, end: 519 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 532, end: 537 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 542, end: 550 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 551, end: 556 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 558, end: 561 },
									},
									loc: { start: 558, end: 561 },
								},
								loc: { start: 558, end: 562 },
							},
							directives: [],
							loc: { start: 551, end: 562 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 564, end: 568 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 570, end: 573 },
								},
								loc: { start: 570, end: 573 },
							},
							directives: [],
							loc: { start: 564, end: 573 },
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
										loc: { start: 577, end: 584 },
									},
									loc: { start: 577, end: 584 },
								},
								loc: { start: 577, end: 585 },
							},
							loc: { start: 576, end: 586 },
						},
						loc: { start: 576, end: 587 },
					},
					directives: [],
					loc: { start: 542, end: 587 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productsByCategory",
						loc: { start: 590, end: 608 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 609, end: 614 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 616, end: 619 },
									},
									loc: { start: 616, end: 619 },
								},
								loc: { start: 616, end: 620 },
							},
							directives: [],
							loc: { start: 609, end: 620 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 622, end: 630 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 632, end: 638 },
									},
									loc: { start: 632, end: 638 },
								},
								loc: { start: 632, end: 639 },
							},
							directives: [],
							loc: { start: 622, end: 639 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 641, end: 645 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 647, end: 650 },
								},
								loc: { start: 647, end: 650 },
							},
							directives: [],
							loc: { start: 641, end: 650 },
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
										loc: { start: 654, end: 661 },
									},
									loc: { start: 654, end: 661 },
								},
								loc: { start: 654, end: 662 },
							},
							loc: { start: 653, end: 663 },
						},
						loc: { start: 653, end: 664 },
					},
					directives: [],
					loc: { start: 590, end: 664 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 667, end: 674 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 675, end: 677 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 679, end: 681 },
									},
									loc: { start: 679, end: 681 },
								},
								loc: { start: 679, end: 682 },
							},
							directives: [],
							loc: { start: 675, end: 682 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 685, end: 692 },
						},
						loc: { start: 685, end: 692 },
					},
					directives: [],
					loc: { start: 667, end: 692 },
				},
			],
			loc: { start: 520, end: 694 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 701, end: 708 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 713, end: 715 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 717, end: 719 },
							},
							loc: { start: 717, end: 719 },
						},
						loc: { start: 717, end: 720 },
					},
					directives: [],
					loc: { start: 713, end: 720 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 723, end: 727 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 729, end: 735 },
							},
							loc: { start: 729, end: 735 },
						},
						loc: { start: 729, end: 736 },
					},
					directives: [],
					loc: { start: 723, end: 736 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 739, end: 743 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 745, end: 751 },
							},
							loc: { start: 745, end: 751 },
						},
						loc: { start: 745, end: 752 },
					},
					directives: [],
					loc: { start: 739, end: 752 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 755, end: 766 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 768, end: 774 },
							},
							loc: { start: 768, end: 774 },
						},
						loc: { start: 768, end: 775 },
					},
					directives: [],
					loc: { start: 755, end: 775 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 778, end: 783 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 785, end: 788 },
							},
							loc: { start: 785, end: 788 },
						},
						loc: { start: 785, end: 789 },
					},
					directives: [],
					loc: { start: 778, end: 789 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 792, end: 801 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 803, end: 811 },
							},
							loc: { start: 803, end: 811 },
						},
						loc: { start: 803, end: 812 },
					},
					directives: [],
					loc: { start: 792, end: 812 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 815, end: 824 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 826, end: 834 },
							},
							loc: { start: 826, end: 834 },
						},
						loc: { start: 826, end: 835 },
					},
					directives: [],
					loc: { start: 815, end: 835 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 838, end: 848 },
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
									loc: { start: 851, end: 859 },
								},
								loc: { start: 851, end: 859 },
							},
							loc: { start: 850, end: 860 },
						},
						loc: { start: 850, end: 861 },
					},
					directives: [],
					loc: { start: 838, end: 861 },
				},
			],
			loc: { start: 696, end: 863 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 869, end: 874 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 864, end: 874 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "DateTime", loc: { start: 883, end: 891 } },
			directives: [],
			loc: { start: 876, end: 891 },
		},
	],
	loc: { start: 0, end: 892 },
} as unknown as DocumentNode;
