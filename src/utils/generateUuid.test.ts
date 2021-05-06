import { generateUuid } from './generateUuid'

describe('generateUuid', () => {
  it('should generate a valid UUID', () => {
    const uuidRegex = /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/
    const generatedUuid = generateUuid()
    expect(generatedUuid).toMatch(uuidRegex)
  })
})