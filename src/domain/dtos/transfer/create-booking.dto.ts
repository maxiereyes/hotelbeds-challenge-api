

export class CreateBookingDto {
    private constructor(
        public readonly language: string,
        public readonly holder: {
            readonly name: string,
            readonly surname: string,
            readonly email: string,
            readonly phone: string
        },
        public readonly transfers: {
            readonly rateKey: string,
            readonly pickupInformation: {
                readonly name: string,
                readonly address: string,
                readonly town: string,
                readonly country: string,
                readonly zip: string
            },
            readonly dropoffInformation: {
                readonly name: string,
                readonly address: string,
                readonly town: string,
                readonly country: string,
                readonly zip: string
            },
            readonly transferDetails: {
                readonly type: string,
                readonly direction: string,
                readonly code: string,
                readonly companyName: string
            }[]
        }[],
        readonly clientReference: string,
        readonly remark: string
    ){}

    static create(obj: {[key:string]: any}): [string?, CreateBookingDto?] {
        const {language = 'es', holder = {}, clientReference = '', remark = '', transfers = []} = obj

        if (!holder || !holder.name || !holder.surname || !holder.email || !holder.phone) {
            return ['Missing required fields , holder.name, holder.surname, holder.email and holder.phone']
        }

        if (!transfers || transfers.length === 0) return ['Missing required field transfers'] 

        for (const transfer of transfers) {
            if (!transfer) return ['Missing required field transfer']
            if (!transfer.rateKey || transfer.rateKey === '') {
                return ['Missing required field transfer.rateKey']
            }
            if (transfer.pickupInformation) {
                if (!transfer.pickupInformation.name || transfer.pickupInformation.name === '') return ['Missing required field transfer.pickupInformation.name']
                if (!transfer.pickupInformation.address || transfer.pickupInformation.address === '') return ['Missing required field transfer.pickupInformation.address']
                if (!transfer.pickupInformation.town || transfer.pickupInformation.town === '') return ['Missing required field transfer.pickupInformation.town']
                if (!transfer.pickupInformation.country || transfer.pickupInformation.country === '') return ['Missing required field transfer.pickupInformation.country']
                if (!transfer.pickupInformation.zip || transfer.pickupInformation.zip === '') return ['Missing required field transfer.pickupInformation.zip']
            }
            if (transfer.dropoffInformation) {
                if (!transfer.dropoffInformation.name || transfer.dropoffInformation.name === '') return ['Missing required field transfer.dropoffInformation.name']
                if (!transfer.dropoffInformation.address || transfer.dropoffInformation.address === '') return ['Missing required field transfer.dropoffInformation.address']
                if (!transfer.dropoffInformation.town || transfer.dropoffInformation.town === '') return ['Missing required field transfer.dropoffInformation.town']
                if (!transfer.dropoffInformation.country || transfer.dropoffInformation.country === '') return ['Missing required field transfer.dropoffInformation.country']
                if (!transfer.dropoffInformation.zip || transfer.dropoffInformation.zip === '') return ['Missing required field transfer.dropoffInformation.zip']
            }
            
            if (!transfer.transferDetails || transfer.transferDetails.length === 0) return ['Missing required field transfer.transferDetails']


            for (const transferDetail of transfer.transferDetails) {
                if (!transferDetail.type || transferDetail.type === '') return ['Missing required field transfer.transferDetails.type']
                if (!transferDetail.direction || transferDetail.direction === '') return ['Missing required field transfer.transferDetails.direction']
                if (!transferDetail.code || transferDetail.code === '') return ['Missing required field transfer.transferDetails.code']
            }
        }

        return [undefined, new CreateBookingDto(language, holder, transfers, clientReference, remark)]
    }
}