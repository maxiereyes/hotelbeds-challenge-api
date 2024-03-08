import { FromToTypeEnum } from "../../enums/transfer/fromToType.enum"

export class TransferQueryDto {
    private constructor(
        public readonly language: string,
        public readonly fromType: FromToTypeEnum,
        public readonly fromCode: string,
        public readonly toType: FromToTypeEnum,
        public readonly toCode: string,
        public readonly outbound: string,
        public readonly inbound: string,
        public readonly adults: number,
        public readonly children: number,
        public readonly infants: number
    ){}

    static create(language = 'es', fromType: FromToTypeEnum, fromCode: string, toType: FromToTypeEnum, toCode: string, outbound: string, inbound: string, adults: number, children: number, infants: number): [string?, TransferQueryDto?] {
        if (!Object.values(FromToTypeEnum).includes(fromType)) return ['Invalid from type, valid values: IATA, ATLAS, GPS, PORT, STATION']
        if (!Object.values(FromToTypeEnum).includes(toType)) return ['Invalid to type, valid values: IATA, ATLAS, GPS, PORT, STATION']
        if (!fromCode) return ['Param fromCode is required']
        if (!toCode) return ['Param toCode is required']
        if (!outbound) return ['Param outbound is required']
        if (new Date(outbound).toString() === 'Invalid Date') return ['Invalid outbound date']
        if (inbound && new Date(inbound).toString() === 'Invalid Date') return ['Invalid inbound date']
        if (isNaN(adults) || isNaN(children) || isNaN(infants)) return ['Adults, children and infants must be numbers']
        if (adults <= 0 && children <= 0 && infants <= 0) return ['Adults, children or infants must be greater than 0']

        return [undefined, new TransferQueryDto(language, fromType, fromCode, toType, toCode, outbound, inbound, adults, children, infants)]
    }
}