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
			],
			loc: { start: 141, end: 280 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 287, end: 292 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 297, end: 299 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 301, end: 303 },
							},
							loc: { start: 301, end: 303 },
						},
						loc: { start: 301, end: 304 },
					},
					directives: [],
					loc: { start: 297, end: 304 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 307, end: 313 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 315, end: 321 },
							},
							loc: { start: 315, end: 321 },
						},
						loc: { start: 315, end: 322 },
					},
					directives: [],
					loc: { start: 307, end: 322 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 325, end: 335 },
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
									loc: { start: 338, end: 347 },
								},
								loc: { start: 338, end: 347 },
							},
							loc: { start: 337, end: 348 },
						},
						loc: { start: 337, end: 349 },
					},
					directives: [],
					loc: { start: 325, end: 349 },
				},
			],
			loc: { start: 282, end: 351 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 358, end: 367 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 372, end: 380 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 382, end: 385 },
							},
							loc: { start: 382, end: 385 },
						},
						loc: { start: 382, end: 386 },
					},
					directives: [],
					loc: { start: 372, end: 386 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 389, end: 396 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 398, end: 405 },
							},
							loc: { start: 398, end: 405 },
						},
						loc: { start: 398, end: 406 },
					},
					directives: [],
					loc: { start: 389, end: 406 },
				},
			],
			loc: { start: 353, end: 408 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 421, end: 426 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 431, end: 439 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 440, end: 445 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 447, end: 450 },
									},
									loc: { start: 447, end: 450 },
								},
								loc: { start: 447, end: 451 },
							},
							directives: [],
							loc: { start: 440, end: 451 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 453, end: 457 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 459, end: 462 },
								},
								loc: { start: 459, end: 462 },
							},
							directives: [],
							loc: { start: 453, end: 462 },
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
										loc: { start: 466, end: 473 },
									},
									loc: { start: 466, end: 473 },
								},
								loc: { start: 466, end: 474 },
							},
							loc: { start: 465, end: 475 },
						},
						loc: { start: 465, end: 476 },
					},
					directives: [],
					loc: { start: 431, end: 476 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productsByCategory",
						loc: { start: 479, end: 497 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 498, end: 503 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 505, end: 508 },
									},
									loc: { start: 505, end: 508 },
								},
								loc: { start: 505, end: 509 },
							},
							directives: [],
							loc: { start: 498, end: 509 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 511, end: 519 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 521, end: 527 },
									},
									loc: { start: 521, end: 527 },
								},
								loc: { start: 521, end: 528 },
							},
							directives: [],
							loc: { start: 511, end: 528 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 530, end: 534 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 536, end: 539 },
								},
								loc: { start: 536, end: 539 },
							},
							directives: [],
							loc: { start: 530, end: 539 },
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
										loc: { start: 543, end: 550 },
									},
									loc: { start: 543, end: 550 },
								},
								loc: { start: 543, end: 551 },
							},
							loc: { start: 542, end: 552 },
						},
						loc: { start: 542, end: 553 },
					},
					directives: [],
					loc: { start: 479, end: 553 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 556, end: 563 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 564, end: 566 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 568, end: 570 },
									},
									loc: { start: 568, end: 570 },
								},
								loc: { start: 568, end: 571 },
							},
							directives: [],
							loc: { start: 564, end: 571 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 574, end: 581 },
						},
						loc: { start: 574, end: 581 },
					},
					directives: [],
					loc: { start: 556, end: 581 },
				},
			],
			loc: { start: 409, end: 583 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 590, end: 597 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 602, end: 604 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 606, end: 608 },
							},
							loc: { start: 606, end: 608 },
						},
						loc: { start: 606, end: 609 },
					},
					directives: [],
					loc: { start: 602, end: 609 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 612, end: 616 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 618, end: 624 },
							},
							loc: { start: 618, end: 624 },
						},
						loc: { start: 618, end: 625 },
					},
					directives: [],
					loc: { start: 612, end: 625 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 628, end: 632 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 634, end: 640 },
							},
							loc: { start: 634, end: 640 },
						},
						loc: { start: 634, end: 641 },
					},
					directives: [],
					loc: { start: 628, end: 641 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 644, end: 655 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 657, end: 663 },
							},
							loc: { start: 657, end: 663 },
						},
						loc: { start: 657, end: 664 },
					},
					directives: [],
					loc: { start: 644, end: 664 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 667, end: 672 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 674, end: 680 },
							},
							loc: { start: 674, end: 680 },
						},
						loc: { start: 674, end: 681 },
					},
					directives: [],
					loc: { start: 667, end: 681 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 684, end: 693 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 695, end: 703 },
							},
							loc: { start: 695, end: 703 },
						},
						loc: { start: 695, end: 704 },
					},
					directives: [],
					loc: { start: 684, end: 704 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 707, end: 716 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 718, end: 726 },
							},
							loc: { start: 718, end: 726 },
						},
						loc: { start: 718, end: 727 },
					},
					directives: [],
					loc: { start: 707, end: 727 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 730, end: 740 },
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
									loc: { start: 743, end: 751 },
								},
								loc: { start: 743, end: 751 },
							},
							loc: { start: 742, end: 752 },
						},
						loc: { start: 742, end: 753 },
					},
					directives: [],
					loc: { start: 730, end: 753 },
				},
			],
			loc: { start: 585, end: 755 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 761, end: 766 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 756, end: 766 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "DateTime", loc: { start: 775, end: 783 } },
			directives: [],
			loc: { start: 768, end: 783 },
		},
	],
	loc: { start: 0, end: 784 },
} as unknown as DocumentNode;
