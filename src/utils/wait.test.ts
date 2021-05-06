import { wait } from './wait'

jest.useFakeTimers();

describe('wait', () => {

  const callback = jest.fn();

  async function testFunction(delay: number, callback: Function) {
    await wait(delay)
    callback()
  }

  it('callback function should be called one second after test function is called', async () => {
    const promise = testFunction(1000, callback)
    expect(callback).not.toBeCalled()

    jest.runAllTimers()
    
    await promise
    expect(callback).toHaveBeenCalledTimes(1)
  })
})