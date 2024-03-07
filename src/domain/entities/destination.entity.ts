export class DestinationEntity {
    constructor(
        public readonly code: string,
        public readonly name: string,
        public readonly countryCode: string,
        public readonly language: string,
    ) {}

    static fromObject(obj: {[key: string]: any}) {
        return new DestinationEntity(
            obj.code,
            obj.name,
            obj.countryCode,
            obj.language
        )
    }
}