import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Nav from '@/components/Nav.vue'

describe('Nav', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Nav, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
