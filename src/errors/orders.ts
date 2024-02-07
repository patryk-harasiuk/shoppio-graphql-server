export class OrderNotFound extends Error {
	constructor(message: string) {
		super(message);
	}
}

export class AddToOrderError extends Error {
	constructor(message: string) {
		super(message);
	}
}
