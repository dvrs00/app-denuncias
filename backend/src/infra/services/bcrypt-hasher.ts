import { Hasher } from "../../domain/interface/hasher";
import * as bcrypt from "bcrypt";

export class BcryptHasher implements Hasher {
    async hash(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    async compare(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
}