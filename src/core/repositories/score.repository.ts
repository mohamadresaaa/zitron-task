import Score from "../../models/score.model";
import { ScoreDocument, ScoreModel } from "../contracts/model";

export class ScoreRepository {
  private scoreModel: ScoreModel;

  constructor() {
    this.scoreModel = Score;
  }

  async submitScore(data: {
    number: Number;
    user: string;
    design: string;
  }): Promise<ScoreDocument> {
    const score = new this.scoreModel({ ...data });
    await score.save();
    return score;
  }

  async find(user: string, design: string): Promise<ScoreDocument | null> {
    return await this.scoreModel.findOne({
      user,
      design,
    });
  }

  async findWithDesignId(design: string) {
    return await this.scoreModel
      .find({
        design,
      })
      .select("number");
  }
}

export default new ScoreRepository();
