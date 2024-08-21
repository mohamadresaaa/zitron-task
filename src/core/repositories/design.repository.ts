import Design from "../../models/design.model";
import User from "../../models/user.model";
import {
  DesignDocument,
  DesignModel,
  UserDocument,
  UserModel,
} from "../contracts/model";

export class DesignRepository {
  private designModel: DesignModel;

  constructor() {
    this.designModel = Design;
  }

  async findSingle(id: string) {
    const data = await this.designModel.find({ _id: id }).populate("scores");
    return data;
  }

  async findById(id: string): Promise<DesignDocument | null> {
    return await this.designModel.findById(id);
  }

  async findAll(): Promise<DesignDocument[]> {
    return await this.designModel.find();
  }

  async create(data: {
    user: string;
    deadLine: Date;
    title: string;
  }): Promise<DesignDocument> {
    const design = new this.designModel({
      ...data,
    });
    await design.save();

    return design;
  }
}

export default new DesignRepository();
