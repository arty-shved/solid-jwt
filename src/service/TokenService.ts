import jwt from 'jsonwebtoken';
import { User } from '../model/User';

export class TokenService {
    constructor(private secret: string) { }

    public generateToken(user: User): string {
        const payload = { username: user.username };
        return jwt.sign(payload, this.secret, { expiresIn: '1h' });
    }

    public verifyToken(token: string): string | null {
        try {
            return jwt.verify(token, this.secret) as string;
        } catch (error) {
            return null;
        }
    }

    public decodeToken(token: string) {
        try {
            const parts = token.split('.');

            if (parts.length !== 3) {
                throw new Error('Invalid JWT token');
            }

            const base64Url = parts[1];

            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = atob(base64);

            return JSON.parse(jsonPayload);
        } catch (e) {
            throw new Error(JSON.stringify(e))
        }
    }
}