import { FormBuilder } from '@angular/forms'
import { CounterComponent } from './counter.component'

describe('CounterComponent', () => {
  let component: CounterComponent
  beforeEach(() => {
    component = new CounterComponent(new FormBuilder)
  })

  it('increment', () => {
    component.increment()
    expect(component.counter).toBe(1)
  })
  it('decrement', () => {
    component.decrement()
    expect(component.counter).toBe(-1)
  })
  it('emitter', () => {
    let result = null
    component.counterEmitter.subscribe(v => result = v)
    component.increment()
    expect(result).toBe(1)
  })
  it('two controls', () => {
    expect(component.form.contains('login')).toBeTruthy()
    expect(component.form.contains('email')).toBeTruthy()
  })
  it('valueLogin', () => {
    const control = component.form.get('login')
    control.setValue('')
    expect(control.valid).toBeFalsy()
  })
})
