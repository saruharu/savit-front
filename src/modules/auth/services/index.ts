import { AuthService } from "./auth/auth.service";
import { TokenStorageService } from "./token-storage/token-storage.service";
import { UserService } from "./user/user.service";

export const services = [
    AuthService,
    TokenStorageService,
    UserService
];

export * from "./auth/auth.service";
export * from "./token-storage/token-storage.service";
export * from "./user/user.service";