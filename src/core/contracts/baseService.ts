import autoBind from 'auto-bind'

export default abstract class BaseService {
  constructor() {
    autoBind(this)
  }
}