import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { BootstrapVue } from 'bootstrap-vue'

import Alert from '@/components/Alert.vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('Alert Component', () => {
  let store
  let state

  beforeEach(() => {
    state = {
      alerts: ['alert1', 'alert2'],
    }
    store = new Vuex.Store({
      state,
    })
  })

  it('dynamically changes classes when alerts length is greater than 0', () => {
    const wrapper = shallowMount(Alert, { store, localVue })
    const alertBox = wrapper.find('[data-name="alert-box"]')

    if (state.alerts.length > 0) {
      expect(alertBox.classes()).toContain('fadeIn', 'fadeOut')
    } else {
      expect(alertBox.classes()).toContain('')
    }
  })
})
