import { supermarches } from '../json/supermarches.js'
import '../lib/leaflet.awesome-markers.min.js'
import { Map } from './map.js'
import { SupermarchesCooperatifs } from './coops.js'
import { parametres } from './parametres.js'

document.addEventListener('DOMContentLoaded', () => {
  const superCoop = new SupermarchesCooperatifs(supermarches)
  const carte = new Map(parametres)
  carte.afficherLaCouleurdesDepartements(supermarches, 4)
  carte.afficherLesPoints(superCoop.getSupermarchesLocalises())
})
