import { shallowMount, createLocalVue } from '@vue/test-utils'
import BootstrapVue, { BootstrapVueIcons } from 'bootstrap-vue'

import Spinner from '@/components/Spinner.vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Spinner', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Spinner)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
