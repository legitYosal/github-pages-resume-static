
import Vue from 'vue'

// import 'vue-awesome/icons/flag'
// import 'vue-awesome/icons'
// import Icon from 'vue-awesome/components/Icon'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faCoffee 
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from 
    '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)
