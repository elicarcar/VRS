import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import sinon from 'sinon'
import Vuex from 'vuex'
import LoginForm from '@/components/LoginForm.vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('LoginForm', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      alert: jest.fn(),
      login: jest.fn(),
    }

    store = new Vuex.Store({
      actions,
    })
  })

  it('calls submit fn on button click', async () => {
    const wrapper = shallowMount(LoginForm, { store, localVue })

    const submitStub = sinon.stub()
    wrapper.setMethods({ submit: submitStub })

    wrapper.find('button').trigger('click')
    expect(submitStub.called).toBe(true)
  })
})
