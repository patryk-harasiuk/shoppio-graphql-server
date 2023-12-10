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
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Mutation", loc: { start: 146, end: 154 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "addToOrder",
						loc: { start: 159, end: 169 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderId",
								loc: { start: 170, end: 177 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "ID",
									loc: { start: 179, end: 181 },
								},
								loc: { start: 179, end: 181 },
							},
							directives: [],
							loc: { start: 170, end: 181 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "productId",
								loc: { start: 183, end: 192 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 194, end: 196 },
									},
									loc: { start: 194, end: 196 },
								},
								loc: { start: 194, end: 197 },
							},
							directives: [],
							loc: { start: 183, end: 197 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "quantity",
								loc: { start: 199, end: 207 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 209, end: 212 },
									},
									loc: { start: 209, end: 212 },
								},
								loc: { start: 209, end: 213 },
							},
							directives: [],
							loc: { start: 199, end: 213 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 216, end: 221 },
						},
						loc: { start: 216, end: 221 },
					},
					directives: [],
					loc: { start: 159, end: 221 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removeOrderItem",
						loc: { start: 224, end: 239 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderId",
								loc: { start: 240, end: 247 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 249, end: 251 },
									},
									loc: { start: 249, end: 251 },
								},
								loc: { start: 249, end: 252 },
							},
							directives: [],
							loc: { start: 240, end: 252 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderItemId",
								loc: { start: 254, end: 265 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 267, end: 269 },
									},
									loc: { start: 267, end: 269 },
								},
								loc: { start: 267, end: 270 },
							},
							directives: [],
							loc: { start: 254, end: 270 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 273, end: 278 },
						},
						loc: { start: 273, end: 278 },
					},
					directives: [],
					loc: { start: 224, end: 278 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removeOrderItems",
						loc: { start: 281, end: 297 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderId",
								loc: { start: 298, end: 305 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 307, end: 309 },
									},
									loc: { start: 307, end: 309 },
								},
								loc: { start: 307, end: 310 },
							},
							directives: [],
							loc: { start: 298, end: 310 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 313, end: 318 },
						},
						loc: { start: 313, end: 318 },
					},
					directives: [],
					loc: { start: 281, end: 318 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateOrderItemQuantity",
						loc: { start: 321, end: 344 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderId",
								loc: { start: 345, end: 352 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 354, end: 356 },
									},
									loc: { start: 354, end: 356 },
								},
								loc: { start: 354, end: 357 },
							},
							directives: [],
							loc: { start: 345, end: 357 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderItemId",
								loc: { start: 359, end: 370 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 372, end: 374 },
									},
									loc: { start: 372, end: 374 },
								},
								loc: { start: 372, end: 375 },
							},
							directives: [],
							loc: { start: 359, end: 375 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 378, end: 383 },
						},
						loc: { start: 378, end: 383 },
					},
					directives: [],
					loc: { start: 321, end: 383 },
				},
			],
			loc: { start: 141, end: 385 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 392, end: 397 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 402, end: 404 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 406, end: 408 },
							},
							loc: { start: 406, end: 408 },
						},
						loc: { start: 406, end: 409 },
					},
					directives: [],
					loc: { start: 402, end: 409 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 412, end: 418 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 420, end: 426 },
							},
							loc: { start: 420, end: 426 },
						},
						loc: { start: 420, end: 427 },
					},
					directives: [],
					loc: { start: 412, end: 427 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 430, end: 440 },
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
									loc: { start: 443, end: 452 },
								},
								loc: { start: 443, end: 452 },
							},
							loc: { start: 442, end: 453 },
						},
						loc: { start: 442, end: 454 },
					},
					directives: [],
					loc: { start: 430, end: 454 },
				},
			],
			loc: { start: 387, end: 456 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 463, end: 472 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 477, end: 485 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 487, end: 490 },
							},
							loc: { start: 487, end: 490 },
						},
						loc: { start: 487, end: 491 },
					},
					directives: [],
					loc: { start: 477, end: 491 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 494, end: 501 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 503, end: 510 },
							},
							loc: { start: 503, end: 510 },
						},
						loc: { start: 503, end: 511 },
					},
					directives: [],
					loc: { start: 494, end: 511 },
				},
			],
			loc: { start: 458, end: 513 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 526, end: 531 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 536, end: 544 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 545, end: 550 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 552, end: 555 },
									},
									loc: { start: 552, end: 555 },
								},
								loc: { start: 552, end: 556 },
							},
							directives: [],
							loc: { start: 545, end: 556 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 558, end: 562 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 564, end: 567 },
								},
								loc: { start: 564, end: 567 },
							},
							directives: [],
							loc: { start: 558, end: 567 },
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
										loc: { start: 571, end: 578 },
									},
									loc: { start: 571, end: 578 },
								},
								loc: { start: 571, end: 579 },
							},
							loc: { start: 570, end: 580 },
						},
						loc: { start: 570, end: 581 },
					},
					directives: [],
					loc: { start: 536, end: 581 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productsByCategory",
						loc: { start: 584, end: 602 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 603, end: 608 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 610, end: 613 },
									},
									loc: { start: 610, end: 613 },
								},
								loc: { start: 610, end: 614 },
							},
							directives: [],
							loc: { start: 603, end: 614 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 616, end: 624 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 626, end: 632 },
									},
									loc: { start: 626, end: 632 },
								},
								loc: { start: 626, end: 633 },
							},
							directives: [],
							loc: { start: 616, end: 633 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 635, end: 639 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 641, end: 644 },
								},
								loc: { start: 641, end: 644 },
							},
							directives: [],
							loc: { start: 635, end: 644 },
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
										loc: { start: 648, end: 655 },
									},
									loc: { start: 648, end: 655 },
								},
								loc: { start: 648, end: 656 },
							},
							loc: { start: 647, end: 657 },
						},
						loc: { start: 647, end: 658 },
					},
					directives: [],
					loc: { start: 584, end: 658 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 661, end: 668 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 669, end: 671 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 673, end: 675 },
									},
									loc: { start: 673, end: 675 },
								},
								loc: { start: 673, end: 676 },
							},
							directives: [],
							loc: { start: 669, end: 676 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 679, end: 686 },
						},
						loc: { start: 679, end: 686 },
					},
					directives: [],
					loc: { start: 661, end: 686 },
				},
			],
			loc: { start: 514, end: 688 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 695, end: 702 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 707, end: 709 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 711, end: 713 },
							},
							loc: { start: 711, end: 713 },
						},
						loc: { start: 711, end: 714 },
					},
					directives: [],
					loc: { start: 707, end: 714 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 717, end: 721 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 723, end: 729 },
							},
							loc: { start: 723, end: 729 },
						},
						loc: { start: 723, end: 730 },
					},
					directives: [],
					loc: { start: 717, end: 730 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 733, end: 737 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 739, end: 745 },
							},
							loc: { start: 739, end: 745 },
						},
						loc: { start: 739, end: 746 },
					},
					directives: [],
					loc: { start: 733, end: 746 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 749, end: 760 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 762, end: 768 },
							},
							loc: { start: 762, end: 768 },
						},
						loc: { start: 762, end: 769 },
					},
					directives: [],
					loc: { start: 749, end: 769 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 772, end: 777 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Decimal",
								loc: { start: 779, end: 786 },
							},
							loc: { start: 779, end: 786 },
						},
						loc: { start: 779, end: 787 },
					},
					directives: [],
					loc: { start: 772, end: 787 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 790, end: 799 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 801, end: 809 },
							},
							loc: { start: 801, end: 809 },
						},
						loc: { start: 801, end: 810 },
					},
					directives: [],
					loc: { start: 790, end: 810 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 813, end: 822 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 824, end: 832 },
							},
							loc: { start: 824, end: 832 },
						},
						loc: { start: 824, end: 833 },
					},
					directives: [],
					loc: { start: 813, end: 833 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 836, end: 846 },
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
									loc: { start: 849, end: 857 },
								},
								loc: { start: 849, end: 857 },
							},
							loc: { start: 848, end: 858 },
						},
						loc: { start: 848, end: 859 },
					},
					directives: [],
					loc: { start: 836, end: 859 },
				},
			],
			loc: { start: 690, end: 861 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 867, end: 872 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 862, end: 872 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "DateTime", loc: { start: 881, end: 889 } },
			directives: [],
			loc: { start: 874, end: 889 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "Decimal", loc: { start: 898, end: 905 } },
			directives: [],
			loc: { start: 891, end: 905 },
		},
	],
	loc: { start: 0, end: 906 },
} as unknown as DocumentNode;
