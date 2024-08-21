import User from "../../models/user.model";
import { UserDocument, UserModel } from "../contracts/model";

export class UserRepository {
  private userModel: UserModel;

  constructor() {
    this.userModel = User;
  }

  async findUser(id: string): Promise<UserDocument | null> {
    return await this.userModel.findById(id);
  }

  async findUserWithUsernameAndPassword(username: string, password: string) {
    return await this.userModel.findOne({
      username,
      password,
    });
  }
}

export default new UserRepository();
