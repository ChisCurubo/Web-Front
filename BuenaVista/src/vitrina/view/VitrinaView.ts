export default class VitrinaView {
  private readonly vitrinaHTML: HTMLElement

  constructor() {
    this.vitrinaHTML = document.createElement('vitrina')
    this.vitrinaHTML.classList.add('vitrina')
  }

  readonly init = () => {
    console.log('VitrinaView.init()')
  }

  readonly getVitrinaHTML = (): HTMLElement => {
    return this.vitrinaHTML
  }

  readonly render = () => {
    this.vitrinaHTML.innerHTML = ``
  }
}

