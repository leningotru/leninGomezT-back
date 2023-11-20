import { IsString, Length } from "class-validator";

export class CreateTicketDto {
    @IsString()
    @Length(2, 30, { message: "Title Must Be At Least 2 characters" })
    title: string;

    @IsString()
    description: string;

    @IsString()
    priority: string;

    @IsString()
    category: string;

    @IsString()
    status: string;
}
