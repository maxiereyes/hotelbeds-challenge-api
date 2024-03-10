export class CountryEntity {
    constructor(
        public readonly code: string,
        public readonly name: string
    ) {}

    static fromObject(obj: {[key: string]: any}) {
        return new CountryEntity(
            obj.code,
            obj.name
        )
    }
}