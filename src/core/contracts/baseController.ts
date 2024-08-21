import autoBind from 'auto-bind'
import { Response } from 'express'
import { Models } from 'mongoose'
import models from '../../models'

export default abstract class BaseController {
  protected models: Models

  constructor() {
    autoBind(this)

    this.models = { ...models }
  }

  /**
   * @method sendResponse
   * @param {response} res
   * @param {number} status default 200
   * @param {object} data
   * @returns response server
   */
  protected sendResponse(res: Response, status = 200, data?: object): Response {
    return res.status(status).json(data)
  }
}