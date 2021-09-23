import { SupermarcheCooperatif } from './coop.js'

export class SupermarchesCooperatifs {
  constructor (donneesJson) {
    this.liste = []
    donneesJson.forEach(element => {
      this.liste.push(new SupermarcheCooperatif(element))
    })
  }

  getSupermarches () {
    return this.liste
  }

  getSupermarchesLocalises () {
    const SupermarchesLocalises = []

    this.liste.forEach(element => {
      if (element.lattitude !== '') {
        SupermarchesLocalises.push(element)
      }
    })

    return SupermarchesLocalises
  }
}
