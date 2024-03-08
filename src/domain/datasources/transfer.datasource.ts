import { TransferQueryDto } from "../dtos";
import { CreateBookingDto } from "../dtos/transfer/create-booking.dto";
import { TransferBookingEntity, TransferEntity } from "../entities";

export abstract class TransferDataSource {
    abstract getAvailability(transferQueryDto: TransferQueryDto): Promise<TransferEntity>
    abstract createBooking(createBookingDto: CreateBookingDto): Promise<TransferBookingEntity>
}