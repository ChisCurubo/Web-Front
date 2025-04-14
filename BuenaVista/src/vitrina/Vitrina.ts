import VitrinaController from './controller/VitrinaController.js'
import VitrinaModel from './model/VitrinaModel.js'
import VitrinaView from './view/VitrinaView.js'

export default class Vitrina {
  private readonly model: VitrinaModel
  private readonly view: VitrinaView
  private readonly controller: VitrinaController

  constructor() {
    this.model = new VitrinaModel()
    this.view = new VitrinaView()
    this.controller = new VitrinaController(this.model, this.view)
  }

  readonly init = () => {
    this.controller.init()
  }

  readonly getVitrinaHTML = (): HTMLElement => {
    return this.view.getVitrinaHTML()
  }
}
