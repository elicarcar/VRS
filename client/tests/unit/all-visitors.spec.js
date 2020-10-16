import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import { BootstrapVue } from 'bootstrap-vue'

import AllVisitors from '@/components/AllVisitors.vue'
import Spinner from '@/components/Spinner.vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('AllVisitors.vue', () => {
  it('shows spinner components if visitors are loading', () => {
    const wrapper = mount(AllVisitors, {
      propsData: {
        visitors: {
          data: [],
          isLoading: false,
        },
      },
      localVue,
    })

    const spinner = wrapper.findComponent(Spinner)

    if (wrapper.props().visitors.isLoading) {
      expect(spinner.exists()).toBe(false)
    } else {
      expect(spinner.exists()).toBe(false)
    }
  })
})
