import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheck,
  faPlus,
  faTrash,
  faPen,
  faTimes,
  faUndo,
  faSave,
  faAngleLeft
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck, faPlus, faTrash, faPen, faTimes, faUndo, faSave, faAngleLeft)

export default Vue.component('font-awesome-icon', FontAwesomeIcon)
