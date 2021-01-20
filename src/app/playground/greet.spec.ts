import {greet} from './greet'

describe('greet', () => {

  it('shoeeeeeeeeeeeee', () => {
    // expect(greet('angular')).toBe('Hello angular')
    expect(greet('angular')).toContain('angular')
  })
})
