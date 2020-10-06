import { shallowMount, createLocalVue } from '@vue/test-utils'
import LoginButtons from '@/components/LoginButtons.vue'
import Vuex from 'vuex'
import BootstrapVue, { BootstrapVueIcons } from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)
localVue.use(Vuex)

describe('LoginButtons', () => {
  let store
  let state
  let actions

  beforeEach(() => {
    state = {
      auth: {
        user: {
          id: null,
          email: 'foo@gmail.com',
          full_name: 'Fooc baz',
          isAuthenticated: true,
        },
        isLoading: false,
      },
    }
    actions = {
      logout: jest.fn(),
      alert: jest.fn(),
    }
    store = new Vuex.Store({
      state,
      actions,
    })
  })

  it('show login if user is defined', () => {
    const wrapper = shallowMount(LoginButtons, { store, localVue })

    if (!store.state.auth.user.isAuthenticated) {
      expect(wrapper.find("[data-name='login-btn']").exists()).toBe(true)
    } else {
      expect(wrapper.find("[data-name='logout-btn']").exists()).toBe(true)
    }
  }),
    it('shows modal when clicked on logout and calles Logout function', async () => {
      const spyLogout = jest.spyOn(LoginButtons.methods, 'Logout')
      const wrapper = shallowMount(LoginButtons, {
        store,
        localVue,
      })

      await wrapper.find("[data-name='logout-btn']").trigger('click')
      await wrapper.setData({
        showModal: true,
      })

      expect(wrapper.find('.modal-overlay').isVisible()).toBe(true)

      await wrapper.find("[data-name='logout-fn-btn']").trigger('click')
      expect(actions.logout).toHaveBeenCalled()
    })
})
