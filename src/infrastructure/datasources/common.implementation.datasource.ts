import { HttpService } from "../../domain/adapters/http.adapter";
import { CommonDataSource } from "../../domain/datasources";
import { CommonQueryDto } from "../../domain/dtos";
import { DestinationEntity, HotelEntity, TerminalEntity } from "../../domain/entities";
import { AxiosAdapter } from "../adapters/axios.adapter";

export class CommonImplementationDatasource implements CommonDataSource {
    private httpService: HttpService

    constructor(private baseURL: string) {
        this.httpService = new AxiosAdapter(baseURL);
      }

    async getHotels(commonQueryDto: CommonQueryDto): Promise<HotelEntity[]> {
        const {offset, limit, countryCodes, destinationCodes, language} = commonQueryDto
        const response = await this.httpService.get<any[]>(`/transfer-cache-api/1.0/hotels?fields=ALL&language=${language}&countryCodes=${countryCodes}&destinationCodes=${destinationCodes}&limit=${limit}&offset=${offset}`)
        const hotels = response.data.map(hotel => HotelEntity.fromObject(hotel))
        return hotels
    }

    async getTerminals(commonQueryDto: CommonQueryDto): Promise<TerminalEntity[]> {
        const {offset, limit, countryCodes, language} = commonQueryDto
        const response = await this.httpService.get<any[]>(`/transfer-cache-api/1.0/locations/terminals?fields=ALL&language=${language}&countryCodes=${countryCodes}&limit=${limit}&offset=${offset}`)
        const terminals = response.data.map(terminal => TerminalEntity.fromObject(terminal))
        return terminals
    }

    async getDestinations(commonQueryDto: CommonQueryDto): Promise<DestinationEntity[]> {
        const {offset, limit, countryCodes, language} = commonQueryDto
        const response = await this.httpService.get<any[]>(`/transfer-cache-api/1.0/locations/destinations?fields=ALL&language=${language}&countryCodes=${countryCodes}&limit=${limit}&offset=${offset}`)
        const destinations = response.data.map(destination => DestinationEntity.fromObject(destination))
        return destinations
    }
}