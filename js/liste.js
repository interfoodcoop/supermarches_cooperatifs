/* global Vue */
import { supermarches } from '../json/supermarches.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#divListe',
    data: { items: supermarches }
  })

  return app
})
