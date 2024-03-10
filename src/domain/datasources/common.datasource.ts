import { CommonQueryDto } from "../dtos";
import { HotelEntity, TerminalEntity, DestinationEntity, CountryEntity } from "../entities";

export abstract class CommonDataSource {
    abstract getHotels(CommonQueryDto: CommonQueryDto): Promise<HotelEntity[]>
    abstract getTerminals(CommonQueryDto: CommonQueryDto): Promise<TerminalEntity[]>
    abstract getDestinations(CommonQueryDto: CommonQueryDto): Promise<DestinationEntity[]>
    abstract getCountries(commonQueryDto: CommonQueryDto): Promise<CountryEntity[]>
}