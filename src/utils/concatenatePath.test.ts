import { concatenatePath } from './concatenatePath'

describe('concatenatePath', () => {

  it('should trim slashes on path limits', () => {
    const somePath = '/somePath/'
    const concatenatedPath = concatenatePath(somePath)
    expect(concatenatedPath).toBe('somePath')
  })

  it('should remove duplicated slash', () => {
    const somePath = '/somePath/'
    const anotherPath = '/anotherPath/'
    const concatenatedPath = concatenatePath(somePath, anotherPath)
    expect(concatenatedPath).toBe('somePath/anotherPath')
  })
})