import bcrypt from 'bcrypt';
import { User } from '../model/User';

export class UserService {
    private users: User[] = [];

    public async hashPassword(plainPassword: string): Promise<string> {
        try {
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);

            const hashedPassword = await bcrypt.hash(plainPassword, salt);
            
            return hashedPassword;
        } catch (error) {
            console.error('Error hashing password:', error);
            throw error;
        }
    }

    public async register(username: string, password: string): Promise<User> {
        // hash password
        const securedPassword = await this.hashPassword(password);
        const user = new User(username, securedPassword);
        this.users.push(user);
        return user;
    }

    public findUser(username: string): User | undefined {
        return this.users.find(user => user.username === username);
    }
}