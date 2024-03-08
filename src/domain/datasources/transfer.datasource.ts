import { TransferQueryDto } from "../dtos";
import { TransferEntity } from "../entities";

export abstract class TransferDataSource {
    abstract getAvailability(transferQueryDto: TransferQueryDto): Promise<TransferEntity>
}