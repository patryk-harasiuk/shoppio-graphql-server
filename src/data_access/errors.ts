export class NotFoundError extends Error {
	constructor(message: string) {
		super(message);
	}
}

export class DataAccessError extends Error {
	constructor(message: string) {
		super(message);
	}
}
