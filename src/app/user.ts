// Model for binding template data to class file
// Note: instance of this model need to be created in ts file where it is used
export class User {
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public topic: string,
        public timePreference: string,
        public subscribe: boolean
    ) {}
}
