import { supermarches } from '../json/supermarches.js'
import '../lib/leaflet.awesome-markers.min.js'
import { Map } from './map.js'
import { parametres } from './parametres.js'

document.addEventListener('DOMContentLoaded', () => {
  const supermarchesLocalises = supermarches.filter(element => element.lattitude !== '')
  const carte = new Map(parametres)
  carte.afficherLaCouleurdesDepartements(supermarches, 4)
  carte.afficherLesPoints(supermarchesLocalises)
})
