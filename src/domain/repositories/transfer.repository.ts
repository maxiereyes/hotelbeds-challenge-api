import { TransferQueryDto } from "../dtos";
import { TransferEntity } from "../entities";

export abstract class TransferRepository {
    abstract getAvailability(transferQueryDto: TransferQueryDto): Promise<TransferEntity>
}