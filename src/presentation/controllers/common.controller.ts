import { Request, Response } from "express";
import { CustomError } from "../../domain/errors/custom-error";
import { CommonRepository } from "../../domain/repositories";
import { AxiosError } from "axios";
import { CommonQueryDto } from "../../domain/dtos";


export class CommonController {
    constructor(
        private readonly commonRepository: CommonRepository
    ) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof AxiosError) return res.status(error?.response!.status).json({errorResponse: error?.response!.statusText, errorData: error?.response!.data.error})
        if (error instanceof CustomError) return res.status(error?.statusCode).json({error: error?.message})
        
        return res.status(500).json({error: 'Unknown error'})
    }

    public getHotels = (req: Request, res: Response) => {
        const {offset = 0, limit = 10, countryCodes, destinationCodes, language = 'es'} = req.query
        const [error, commonQueryDto] = CommonQueryDto.create(+offset, +limit, countryCodes as string, destinationCodes as string, language as string)
        if (error) return res.status(400).json({error})

        this.commonRepository
            .getHotels(commonQueryDto!)
            .then(hotels => res.status(200).json(hotels))
            .catch(error => this.handleError(error, res))
    }

    public getTerminals = (req: Request, res: Response) => {
        const {offset = 0, limit = 10, countryCodes, language = 'es'} = req.query
        const [error, commonQueryDto] = CommonQueryDto.create(+offset, +limit, countryCodes as string, language as string)
        if (error) return res.status(400).json({error})

        this.commonRepository
            .getTerminals(commonQueryDto!)
            .then(terminals => res.status(200).json(terminals))
            .catch(error => this.handleError(error, res))
    }

    public getDestinations = (req: Request, res: Response) => {
        const {offset = 0, limit = 10, countryCodes, language = 'es'} = req.query
        const [error, commonQueryDto] = CommonQueryDto.create(+offset, +limit, countryCodes as string, language as string)
        if (error) return res.status(400).json({error})

        this.commonRepository
            .getDestinations(commonQueryDto!)
            .then(destinations => res.status(200).json(destinations))
            .catch(error => this.handleError(error, res))
    }
}