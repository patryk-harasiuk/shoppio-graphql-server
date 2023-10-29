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
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 116, end: 124 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 125, end: 130 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 132, end: 135 },
									},
									loc: { start: 132, end: 135 },
								},
								loc: { start: 132, end: 136 },
							},
							directives: [],
							loc: { start: 125, end: 136 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 138, end: 142 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 144, end: 147 },
								},
								loc: { start: 144, end: 147 },
							},
							directives: [],
							loc: { start: 138, end: 147 },
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
										loc: { start: 151, end: 158 },
									},
									loc: { start: 151, end: 158 },
								},
								loc: { start: 151, end: 159 },
							},
							loc: { start: 150, end: 160 },
						},
						loc: { start: 150, end: 161 },
					},
					directives: [],
					loc: { start: 116, end: 161 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 164, end: 171 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 172, end: 174 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 176, end: 178 },
									},
									loc: { start: 176, end: 178 },
								},
								loc: { start: 176, end: 179 },
							},
							directives: [],
							loc: { start: 172, end: 179 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 182, end: 189 },
						},
						loc: { start: 182, end: 189 },
					},
					directives: [],
					loc: { start: 164, end: 189 },
				},
			],
			loc: { start: 94, end: 191 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 198, end: 205 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 210, end: 212 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 214, end: 216 },
							},
							loc: { start: 214, end: 216 },
						},
						loc: { start: 214, end: 217 },
					},
					directives: [],
					loc: { start: 210, end: 217 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 220, end: 224 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 226, end: 232 },
							},
							loc: { start: 226, end: 232 },
						},
						loc: { start: 226, end: 233 },
					},
					directives: [],
					loc: { start: 220, end: 233 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 236, end: 240 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 242, end: 248 },
							},
							loc: { start: 242, end: 248 },
						},
						loc: { start: 242, end: 249 },
					},
					directives: [],
					loc: { start: 236, end: 249 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 252, end: 263 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 265, end: 271 },
							},
							loc: { start: 265, end: 271 },
						},
						loc: { start: 265, end: 272 },
					},
					directives: [],
					loc: { start: 252, end: 272 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 275, end: 280 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 282, end: 285 },
							},
							loc: { start: 282, end: 285 },
						},
						loc: { start: 282, end: 286 },
					},
					directives: [],
					loc: { start: 275, end: 286 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 289, end: 298 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 300, end: 308 },
							},
							loc: { start: 300, end: 308 },
						},
						loc: { start: 300, end: 309 },
					},
					directives: [],
					loc: { start: 289, end: 309 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 312, end: 321 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 323, end: 331 },
							},
							loc: { start: 323, end: 331 },
						},
						loc: { start: 323, end: 332 },
					},
					directives: [],
					loc: { start: 312, end: 332 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 335, end: 345 },
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
									loc: { start: 348, end: 356 },
								},
								loc: { start: 348, end: 356 },
							},
							loc: { start: 347, end: 357 },
						},
						loc: { start: 347, end: 358 },
					},
					directives: [],
					loc: { start: 335, end: 358 },
				},
			],
			loc: { start: 193, end: 360 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 366, end: 371 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 361, end: 371 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "DateTime", loc: { start: 380, end: 388 } },
			directives: [],
			loc: { start: 373, end: 388 },
		},
	],
	loc: { start: 0, end: 389 },
} as unknown as DocumentNode;
