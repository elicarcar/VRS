import getters from '@/store/getters.js'

describe('getters', () => {
  it('getActiveVisitors', () => {
    const state = {
      visitors: {
        data: [
          { id: 1, name: 'Foo Bar', is_logged: false },
          { id: 2, name: 'Bar Baz', is_logged: true },
          { id: 3, name: 'Synx Doe', is_logged: false },
        ],
      },
    }

    const result = getters.getActiveVisitors(state)

    expect(result).toEqual([{ id: 2, name: 'Bar Baz', is_logged: true }])
  })
})
