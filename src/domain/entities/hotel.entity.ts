export class HotelEntity {
    constructor(
        public readonly code: string,
        public readonly name: string,
        public readonly category: string,
        public readonly description: string,
        public readonly address: string,
        public readonly countryCode: string,
        public readonly destinationCode: string,
        public readonly coordinates: {
            latitude: number,
            longitude: number
        },
        public readonly city: string,
        public readonly postalCode: string
    ) {}

    static fromObject(obj: {[key: string]: any}) {
        return new HotelEntity(
            obj.code,
            obj.name,
            obj.category,
            obj.description,
            obj.address,
            obj.countryCode,
            obj.destinationCode,
            obj.coordinates,
            obj.city,
            obj.postalCode
        )
    }
}