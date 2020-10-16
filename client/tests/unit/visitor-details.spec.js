import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue, BIconJustifyLeft } from 'bootstrap-vue'
import sinon from 'sinon'
import VisitorDetails from '@/components/VisitorDetails.vue'

jest.mock('date-fns-tz')

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('visitor-details', () => {
  it('shows current appoitnments and visits if they are not empty', async () => {
    const wrapper = shallowMount(VisitorDetails, {
      propsData: {
        visitor: {
          first_name: 'foo',
          last_name: 'bar',
          email: 'foo@gmail.com',
          current_appointment: {
            person: 'Foo Baz',
            start_time: '2020-10-15T12:24:44.145Z',
          },
        },
        visits: [
          {
            id: 1,
            person: {
              person: {
                name: 'Bar',
              },
            },
            start_time: '2020-10-15T12:24:44.145Z',
            end_time: '2020-10-15T12:44:23.566Z',
          },
        ],
      },
      localVue,
    })

    expect(wrapper.find('[data-name="current-appointment"]').exists()).toBe(
      true
    )
    expect(wrapper.find('[data-name="visits"]').exists()).toBe(true)
  })
})
