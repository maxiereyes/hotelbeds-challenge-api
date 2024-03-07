export class CommonQueryDto {
    private constructor(
        public readonly offset: number,
        public readonly limit: number,
        public readonly countryCodes: string,
        public readonly destinationCodes: string,
        public readonly language: string
    ){}

    static create(offset: number = 0, limit: number = 10, countryCodes: string = '', destinationCodes: string = '', language: string = 'es'): [string?, CommonQueryDto?] {
        if (isNaN(offset) || isNaN(limit)) return ['Offset and limit must be numbers']
        if (isNaN(limit) || limit < 1) return ['Limit must be greater than 0']

        return [undefined, new CommonQueryDto(offset, limit, countryCodes, destinationCodes, language)]
    }
}