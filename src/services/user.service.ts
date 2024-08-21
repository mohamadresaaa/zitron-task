import BaseService from "../core/contracts/baseService";
import { CustomRequest } from "../core/contracts/http";
import { DesignRepository } from "../core/repositories/design.repository";
import { ScoreRepository } from "../core/repositories/score.repository";

export default class UserService extends BaseService {
  constructor(
    private readonly scoreRepository: ScoreRepository,
    private readonly designRepository: DesignRepository
  ) {
    super();
  }

  async submitScore({ params: { id }, body: { number }, user }: CustomRequest) {
    try {
      const findDesign = await this.designRepository.findById(id);

      if (findDesign.deadLine > new Date()) {
        const checkScoreExists = await this.scoreRepository.find(user.id, id);

        if (!checkScoreExists)
          await this.scoreRepository.submitScore({
            number,
            design: id,
            user: user.id,
          });
      }
    } catch (error) {
      throw error;
    }
  }
}
