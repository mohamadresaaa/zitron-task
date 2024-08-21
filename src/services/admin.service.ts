import BaseService from "../core/contracts/baseService";
import { DesignRepository } from "../core/repositories/design.repository";
import { ScoreRepository } from "../core/repositories/score.repository";

export default class AdminService extends BaseService {
  constructor(
    private readonly designRepository: DesignRepository,
    private readonly scoreRepository: ScoreRepository
  ) {
    super();
  }

  async create(user, body) {
    try {
      return await this.designRepository.create({ user: user.id, ...body });
    } catch (error) {
      throw error;
    }
  }

  async get(id: string) {
    try {
      const design = await this.designRepository.findById(id);
      if (design.deadLine < new Date()) {
        return await this.scoreRepository.findWithDesignId(design.id);
      } else return null;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      return await this.designRepository.findAll();
    } catch (error) {
      throw error;
    }
  }
}
