import { CommonDataSource } from "../../domain/datasources";
import { CommonQueryDto } from "../../domain/dtos";
import { DestinationEntity, HotelEntity, TerminalEntity } from "../../domain/entities";
import { CommonRepository } from "../../domain/repositories";

export class CommonImplementationRepository implements CommonRepository {
    constructor(
        private readonly commonDatasource: CommonDataSource
    ) {}
    
    async getHotels(commonQueryDto: CommonQueryDto): Promise<HotelEntity[]> {
        return await this.commonDatasource.getHotels(commonQueryDto)
    }

    async getTerminals(commonQueryDto: CommonQueryDto): Promise<TerminalEntity[]> {
        return await this.commonDatasource.getTerminals(commonQueryDto)
    }

    async getDestinations(commonQueryDto: CommonQueryDto): Promise<DestinationEntity[]> {
        return await this.commonDatasource.getDestinations(commonQueryDto)
    }
}