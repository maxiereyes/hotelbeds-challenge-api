import { TransferDataSource } from "../../domain/datasources"
import { TransferQueryDto } from "../../domain/dtos"
import { TransferEntity } from "../../domain/entities"
import { TransferRepository } from "../../domain/repositories"


export class TransferImplementationRepository implements TransferRepository {
    constructor(
        private readonly transferDatasource: TransferDataSource
    ) {}
    
    async getAvailability(transferQueryDto: TransferQueryDto): Promise<TransferEntity> {
        return await this.transferDatasource.getAvailability(transferQueryDto)
    }
}