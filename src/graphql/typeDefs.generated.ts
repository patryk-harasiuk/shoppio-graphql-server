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
						value: "products",
						loc: { start: 22, end: 30 },
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
										value: "Product",
										loc: { start: 33, end: 40 },
									},
									loc: { start: 33, end: 40 },
								},
								loc: { start: 33, end: 41 },
							},
							loc: { start: 32, end: 42 },
						},
						loc: { start: 32, end: 43 },
					},
					directives: [],
					loc: { start: 22, end: 43 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product", loc: { start: 46, end: 53 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id", loc: { start: 54, end: 56 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 58, end: 60 },
									},
									loc: { start: 58, end: 60 },
								},
								loc: { start: 58, end: 61 },
							},
							directives: [],
							loc: { start: 54, end: 61 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 64, end: 71 },
						},
						loc: { start: 64, end: 71 },
					},
					directives: [],
					loc: { start: 46, end: 71 },
				},
			],
			loc: { start: 0, end: 73 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 80, end: 87 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 92, end: 94 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 96, end: 98 } },
							loc: { start: 96, end: 98 },
						},
						loc: { start: 96, end: 99 },
					},
					directives: [],
					loc: { start: 92, end: 99 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 102, end: 106 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 108, end: 114 },
							},
							loc: { start: 108, end: 114 },
						},
						loc: { start: 108, end: 115 },
					},
					directives: [],
					loc: { start: 102, end: 115 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 118, end: 122 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 124, end: 130 },
							},
							loc: { start: 124, end: 130 },
						},
						loc: { start: 124, end: 131 },
					},
					directives: [],
					loc: { start: 118, end: 131 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 134, end: 145 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 147, end: 153 },
							},
							loc: { start: 147, end: 153 },
						},
						loc: { start: 147, end: 154 },
					},
					directives: [],
					loc: { start: 134, end: 154 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 157, end: 162 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 164, end: 167 },
							},
							loc: { start: 164, end: 167 },
						},
						loc: { start: 164, end: 168 },
					},
					directives: [],
					loc: { start: 157, end: 168 },
				},
			],
			loc: { start: 75, end: 170 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 176, end: 181 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 171, end: 181 },
		},
	],
	loc: { start: 0, end: 182 },
} as unknown as DocumentNode;
