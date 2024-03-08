import { TransferDataSource } from "../../domain/datasources"
import { TransferQueryDto } from "../../domain/dtos"
import { CreateBookingDto } from "../../domain/dtos/transfer/create-booking.dto"
import { TransferBookingEntity, TransferEntity } from "../../domain/entities"
import { TransferRepository } from "../../domain/repositories"


export class TransferImplementationRepository implements TransferRepository {
    constructor(
        private readonly transferDatasource: TransferDataSource
    ) {}
    
    async getAvailability(transferQueryDto: TransferQueryDto): Promise<TransferEntity> {
        return await this.transferDatasource.getAvailability(transferQueryDto)
    }
    
    async createBooking(createBookingDto: CreateBookingDto): Promise<TransferBookingEntity> {
        return await this.transferDatasource.createBooking(createBookingDto)
    }
}