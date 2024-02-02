import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const PRISMA_NOT_FOUND_CODE = "P2001";

export class NotFoundError extends Error {
	constructor(message: string) {
		super(message);
	}
}

export const isNotFoundError = (error: unknown) => {
	return (
		error instanceof PrismaClientKnownRequestError &&
		error.code === PRISMA_NOT_FOUND_CODE
	);
};
