import { CommonQueryDto } from "../dtos";
import { HotelEntity, TerminalEntity, DestinationEntity, CountryEntity } from "../entities";

export abstract class CommonRepository {
    abstract getHotels(commonQueryDto: CommonQueryDto): Promise<HotelEntity[]>
    abstract getTerminals(commonQueryDto: CommonQueryDto): Promise<TerminalEntity[]>
    abstract getDestinations(commonQueryDto: CommonQueryDto): Promise<DestinationEntity[]>
    abstract getCountries(commonQueryDto: CommonQueryDto): Promise<CountryEntity[]>
}