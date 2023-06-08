import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: string | UserJwtPayload;
      userId: bigint;
    }
  }
}

declare module 'jsonwebtoken' {
  export interface UserJwtPayload extends jwt.JwtPayload {
    userId: bigint;
  }
}
