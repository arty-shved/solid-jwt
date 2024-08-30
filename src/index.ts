import { AuthController } from './controller/AuthController';
import { UserService } from './service/UserService';
import { TokenService } from './service/TokenService';

const userService = new UserService();
const tokenService = new TokenService('secret_key');
const authController = new AuthController(userService, tokenService);

authController.register('user1', 'password123').then(() => {
    const token = authController.login('user1', 'password123');
    console.log('JWT: ', token)

    if (token) {
        console.log('Decoded JWT: ', tokenService.decodeToken(token))
    }
    
})
