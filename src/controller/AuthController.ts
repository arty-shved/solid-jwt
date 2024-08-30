import { UserService } from '../service/UserService';
import { TokenService } from '../service/TokenService';
import { User } from '../model/User';

export class AuthController {
    constructor(private userService: UserService, private tokenService: TokenService) {}

    public async register(username: string, password: string): Promise<User> {
        return await this.userService.register(username, password);
    }

    public login(username: string, password: string): string | null {
        const user = this.userService.findUser(username);
        if (user && user.username === username) {
            return this.tokenService.generateToken(user);
        }
        return null;
    }
}