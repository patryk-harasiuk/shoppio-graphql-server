export class InvalidOrder extends Error {
	constructor(message: string) {
		super(message);
	}
}

export class OrderNotFound extends Error {
	constructor(message: string) {
		super(message);
	}
}
