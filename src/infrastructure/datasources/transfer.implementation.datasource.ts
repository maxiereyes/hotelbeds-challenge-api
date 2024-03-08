import { HttpService } from "../../domain/adapters/http.adapter";
import { TransferDataSource } from "../../domain/datasources";
import { TransferQueryDto } from "../../domain/dtos";
import { TransferEntity } from "../../domain/entities";
import { AxiosAdapter } from "../adapters/axios.adapter";

export class TransferImplementationDatasource implements TransferDataSource {
    private httpService: HttpService

    constructor(private baseURL: string) {
        this.httpService = new AxiosAdapter(baseURL);
      }

    async getAvailability(transferQueryDto: TransferQueryDto): Promise<TransferEntity> {
        const {language, fromType, fromCode, toType, toCode, outbound, inbound, adults, children, infants} = transferQueryDto
        const response = await this.httpService.get<any[]>(`/transfer-api/1.0/availability/${language}/from/${fromType}/${fromCode}/to/${toType}/${toCode}/${outbound}/${inbound}/${adults}/${children}/${infants}`)
        const availability = TransferEntity.fromObject(response.data)
        return availability
    }
}