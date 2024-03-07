export class TerminalEntity {
    constructor(
        public readonly code: string,
        public readonly content: {
            readonly type: string,
            readonly description: string
        },
        public readonly countryCode: string,
        public readonly coordinates: {
            readonly latitude: number,
            readonly longitude: number
        },
        public readonly language: string

    ) {}

    static fromObject(obj: {[key: string]: any}) {
        return new TerminalEntity(
            obj.code,
            obj.content,
            obj.countryCode,
            obj.coordinates,
            obj.language
        )
    }
}