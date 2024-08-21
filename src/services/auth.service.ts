import BaseService from "../core/contracts/baseService";
import { UserRepository } from "../core/repositories/user.repository";

export default class AuthService extends BaseService {
  constructor(private readonly userRepository: UserRepository) {
    super();
  }

  async login({ username, password }: { username: string; password: string }) {
    try {
      const user = await this.userRepository.findUserWithUsernameAndPassword(
        username,
        password
      );

      if (!user) {
        throw new Error("user not found");
      }

      return user.generateJwt();
    } catch (error) {
      throw error;
    }
  }
}
