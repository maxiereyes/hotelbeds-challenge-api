export class TransferEntity {
    constructor(
        public readonly search: {
            readonly language:  string,
            readonly departure: {
                readonly date: string,
                readonly time: string
            },
            readonly comeBack:  {
                readonly date: string,
                readonly time: string
            },
            readonly occupancy: {
                readonly adults:   number,
                readonly children: number,
                readonly infants:  number
            },
            readonly from: {
                readonly code: string,
                readonly description: string,
                readonly type: string
            },
            readonly to: {
                readonly code: string,
                readonly description: string,
                readonly type: string
            }
        },
        public readonly services: {
            readonly id: number,
            readonly direction: string,
            readonly transferType: string,
            readonly vehicle: {
                readonly code: string,
                readonly name: string
            },
            readonly category: {
                readonly code: string,
                readonly name: string
            },
            readonly pickupInformation: {
                readonly from: {
                    readonly code: string,
                    readonly description: string,
                    readonly type: string
                },
                readonly to: {
                    readonly code: string,
                    readonly description: string,
                    readonly type: string
                },
                readonly date: string,
                readonly time: string,
                readonly pickup: {
                    readonly address: string,
                    readonly number: string,
                    readonly town: string,
                    readonly zip: string,
                    readonly description: string,
                    readonly altitude: string,
                    readonly latitude: string,
                    readonly longitude: string,
                    readonly useWebCheckpickup: boolean,
                    readonly pickupId: number,
                    readonly stopName: string,
                    readonly image: string
                }
            },
            readonly minPaxCapacity: number,
            readonly maxPaxCapacity: number,
            readonly content: {
                readonly vehicle: {
                    readonly code: string,
                    readonly name: string
                },
                readonly category: {
                    readonly code: string,
                    readonly name: string
                },
                readonly images: {
                    readonly url: string,
                    readonly type: string
                }[],
                readonly transferDetailInfos: {
                    readonly id: string,
                    readonly name: string,
                    readonly description: string,
                    readonly type: string
                }[],
                readonly customerTransferTimeInfo: string,
                readonly supplierTransferTimeInfo: string
            },
            readonly price: {
                totalAmount: number,
                netAmount: number
            },
            readonly rateKey: string,
            readonly cancellationPolicies: {
                readonly amount: number,
                readonly from: string,
                readonly currencyId: string
            }[],
            readonly links: {
                readonly rel: string,
                readonly href: string
            }[],
            readonly factsheetId: number;
        }[]

    ) {}

    static fromObject(obj: {[key: string]: any}) {
        return new TransferEntity(
            obj.search,
            obj.services   
        )
    }
}