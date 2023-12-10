import { Prisma } from "@prisma/client";
import { GraphQLScalarType, Kind } from "graphql";
export const Decimal = new GraphQLScalarType({
	name: "Decimal",
	serialize: (value) => {
		/* Implement logic to turn the returned value from resolvers to a value that can be sent to clients */

		return Number(value);
	},
	parseValue: (value) => {
		/* Implement logic to parse input that was sent to the server as variables */

		return new Prisma.Decimal(value as number);
	},
	parseLiteral: (ast) => {
		if (ast.kind === Kind.INT) {
			return new Prisma.Decimal(+ast.value);
		}
	},
});
