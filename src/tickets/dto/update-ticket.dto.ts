
import { IsOptional } from 'class-validator';
import { IsString, Length } from "class-validator";

export class UpdateTicketDto {
    @IsString()
    @Length(2, 30, { message: "Title Must Be At Least 2 characters" })
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    priority: string;

    @IsString()
    @IsOptional()
    category: string;

    @IsString()
    @IsOptional()
    status: string;
}
