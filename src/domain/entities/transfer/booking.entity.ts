import { BookingStatusEnum } from "../../enums/transfer/BookingStatus.enum"
import { ImagesTypeEnum } from "../../enums/transfer/ImagesType.enum"
import { PaxesTypeEnum } from "../../enums/transfer/PaxesType.enum"
import { PickupLocationCodes } from "../../enums/transfer/PickupLocationCodes.enum"
import { TransferStatusEnum } from "../../enums/transfer/TransferStatus.enum"
import { TransferTypeEnum } from "../../enums/transfer/TransferType.enum"

export class TransferBookingEntity {
    constructor(
        public readonly bookings: {
            booking: {
                reference: string,
                creationDate: Date,
                status: BookingStatusEnum,
                modificationsPolicies: {
                    cancellation: boolean,
                    modification: boolean
                },
                holder: {
                    name: string,
                    surname: string,
                    email: string,
                    phone: string
                },
                transfers: {
                        id: number,
                        direction: string,
                        status: TransferStatusEnum,
                        transferType: TransferTypeEnum,
                        vehicle: {
                            code: string,
                            name: string
                        },
                        category: {
                            code: string,
                            name: string
                        },
                        pickupInformation: {
                            from: {
                                code: string,
                                description: string,
                                type: PickupLocationCodes
                            },
                            to: {
                                code: string,
                                description: string,
                                type: PickupLocationCodes
                            },
                            date: string,
                            time: string,
                            pickup: {
                                address: string,
                                number: string,
                                town: string,
                                zip: string,
                                description: string,
                                altitude: string,
                                latitude: string,
                                longitude: string,
                                checkPickup: {
                                    mustCheckPickupTime: boolean,
                                    url: string,
                                    hoursBeforeConsulting: number
                                },
                                pickupId: number,
                                stopName: string,
                                image: string
                            }
                        },
                        paxes: {
                            type: PaxesTypeEnum,
                            age: string
                        }[],
                        content: {
                            vehicle: {
                                code: string,
                                name: string
                            },
                            category: {
                                code: string,
                                name: string
                            },
                            images: {
                                url: string,
                                type: ImagesTypeEnum
                            }[],
                            transferDetailInfo: {
                                id: string,
                                name: string,
                                description: string,
                                type: string
                            }[],
                            transferRemarks: {
                                type: string,
                                description: string,
                                mandatory: boolean
                            }
                        },
                        price: {
                            totalAmount: number,
                            netAmount: number,
                            currencyId: string
                        },
                        rateKey: string,
                        cancellationPolicies: {
                            amount: number,
                            from: string,
                            currencyId: string
                        }[],
                        links: {
                            rel: string,
                            href: string,
                            method: string
                        }[],
                        factsheetId: number,
                        arrivalFlightNumber: string,
                        departureFlightNumber: string,
                        arrivalShipName: string,
                        departureShipName: string,
                        arrivalTrainInfo: string,
                        departureTrainInfo: string,
                        transferDetails: {
                            type: string,
                            direction: string,
                            code: string,
                            companyName: string
                        }[],
                        sourceMarketEmergencyNumber: string,

                }[],
                clientReference: string,
                remark: string,
                invoiceCompany: {
                    code: string
                },
                supplier: {
                    name: string,
                    vatNumber: string
                },
                totalAmount: number,
                netAmount: number,
                pendingAmount: number,
                currencyId: string,
                links: {
                    rel: string,
                    href: string,
                    method: string
                }[],
                paymentDataRequired: boolean
            }
        }[]
    ) {}

    static fromObject(obj: {[key: string]: any}) {
        return new TransferBookingEntity(
            obj.bookings
        )
    }
}