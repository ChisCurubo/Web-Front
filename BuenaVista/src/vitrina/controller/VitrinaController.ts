import VitrinaModel from '../model/VitrinaModel.js'
import VitrinaView from '../view/VitrinaView.js'

export default class VitrinaController {
  constructor(
    private readonly model: VitrinaModel,
    private readonly view: VitrinaView
  ) {}

  readonly init = () => {
    console.log('VitrinaController.init()')
    this.model.init()
    this.view.init()
    this.view.render()
  }
}
