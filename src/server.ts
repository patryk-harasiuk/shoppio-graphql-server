import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";
import { PrismaClient } from "@prisma/client";

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const prisma = new PrismaClient({
	log: ["query", "info", "warn", "error"],
	errorFormat: "pretty",
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
	context: async () => {
		return { prisma };
	},
});

console.log(`🚀 Server ready at: ${url}`);

// cloa2onur0001snx94149h9q5

// 4b5bccf6-5d0a-4c03-9112-9503812be4f1
