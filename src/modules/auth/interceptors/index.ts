import { AuthInterceptor } from "./auth/auth.interceptor";

export const interceptors = [
    AuthInterceptor
];

export * from './auth/auth.interceptor';