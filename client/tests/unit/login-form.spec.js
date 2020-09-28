import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import Vuex from 'vuex'
import LoginForm from '@/components/LoginForm.vue'
import sinon from 'sinon'

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

  it('sets new value to email and password input', async () => {
    const wrapper = shallowMount(LoginForm, { store, localVue })
    const emailInput = wrapper.find('input[type="email"]')
    const passwordInput = wrapper.find('input[type="password"]')

    await emailInput.setValue('foo@gmail.com')
    await passwordInput.setValue('fooBarBaz')

    expect(emailInput.element.value).toBe('foo@gmail.com')
    expect(passwordInput.element.value).toBe('fooBarBaz')
  })

  it('calls alert action when password length is lesser than 6 ', async () => {
    const wrapper = shallowMount(LoginForm, { store, localVue })
    const emailInput = wrapper.find('input[type="email"]')
    const passwordInput = wrapper.find('input[type="password"]')

    const submitStub = sinon.stub()
    wrapper.setMethods({ submit: submitStub })

    await emailInput.setValue('foo@gmail.com')
    await passwordInput.setValue('fooBa')

    wrapper.find('button').trigger('click')
    expect(submitStub.called).toBe(true)
    if (passwordInput.element.value.length <= 6) {
      expect(actions.alert).toHaveBeenCalled()
    }
  })
})
