import { CreateUserDto } from "./create-user.dto";

export type EnrichUserDto = CreateUserDto & {
    ipAddress: string | undefined;
    userAgent: string | undefined;
}
