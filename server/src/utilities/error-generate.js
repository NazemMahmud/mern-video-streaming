export class CommonErrors extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
    getStatusCode() {
        return 400;
    }
}

export class NotFoundError extends CommonErrors {
    constructor(message) {
        super(message);
        this.name = 'NotFound'
    }

    getStatusCode() {
        return 404;
    }
}

export class BadRequest extends CommonErrors {
    constructor(message) {
        super(message);
        this.name = 'BadRequest';
    }
    getStatusCode() { return 400; }
}

export class UnAuthorized extends CommonErrors {
    constructor(message) {
        super(message);
        console.log("message: ", message);
        this.name = 'UnAuthorized';
    }
    getStatusCode() { return 401; }
}

export class DuplicateKeyError extends CommonErrors {
    constructor(message) {
        super(message);
        console.log("message: ", message);
        this.name = 'DuplicateKey';
    }
}

export class ValidationErrors extends CommonErrors {
    constructor(message) {
        super(message);
        this.name = 'NotValidated';
    }
    getStatusCode() { return 422; }
}
