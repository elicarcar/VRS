import { mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import CurrentVisitors from '@/components/CurrentVisitors.vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('CurrentVisitors', () => {
  it('shows visitors if visitors.length > 0', () => {
    const wrapper = mount(CurrentVisitors, {
      propsData: {
        visitors: [],
        changeStatus: jest.fn(),
      },
    })

    const paragraph = wrapper.find('p')
    if (!wrapper.vm.visitors.length) {
      expect(paragraph.text()).toBe(
        'There are no visitors at the office right now.'
      )
    }
  }),
    it("won't show the table if !visitors.length", () => {
      const wrapper = mount(CurrentVisitors, {
        propsData: {
          visitors: [],
          changeStatus: jest.fn(),
        },
      })

      if (!wrapper.vm.visitors.length) {
        expect(wrapper.find('table').isVisible()).toBe(false)
      } else {
        expect(wrapper.find('table').isVisible()).toBe(true)
      }
    })
})
