import { Request, Response } from "express";
import { CustomError } from "../../domain/errors/custom-error";
import { AxiosError } from "axios";
import { TransferRepository } from "../../domain/repositories";
import { TransferQueryDto } from "../../domain/dtos";
import { FromToTypeEnum } from "../../domain/enums/transfer/fromToType.enum";


export class TransferController {
    constructor(
        private readonly transferRepository: TransferRepository
    ) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof AxiosError) return res.status(error?.response?.status || 500).json({errorResponse: error?.response?.statusText || 'Unknown error', errorData: error?.response?.data.error})
        if (error instanceof CustomError) return res.status(error?.statusCode).json({error: error?.message})
        
        return res.status(500).json({error: 'Unknown error'})
    }

    public getAvailability = (req: Request, res: Response) => {
        const {language = 'es', fromType = '', fromCode = '', toType = '', toCode = '', outbound = '', inbound = '', adults = 0, children = 0, infants = 0 } = req.query
        const [error, transferQueryDto] = TransferQueryDto.create(language as string, fromType as FromToTypeEnum, fromCode as string, toType as FromToTypeEnum, toCode as string, outbound as string, inbound as string, +adults, +children, +infants)
        if (error) return res.status(400).json({error})

        this.transferRepository
            .getAvailability(transferQueryDto!)
            .then(availability => res.status(200).json(availability))
            .catch(error => this.handleError(error, res))
    }
}