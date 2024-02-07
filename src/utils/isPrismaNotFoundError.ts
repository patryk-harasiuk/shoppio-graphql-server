import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const isPrismaNotFoundError = (
	error: unknown,
): error is PrismaClientKnownRequestError =>
	error instanceof PrismaClientKnownRequestError && error.code === "P2025";
