import { createOccurrence } from './create'

describe('createOccurence', () => {

  const platformName = 'somePlatform'
  const platformHost = 'http://someplatform.com'
  const searchTerm = 'someSearchterm'
  const term = 'foundTerm'
  const link = 'http://someplatform.com/xyz'

  const occurrenceProperties = {
    platformName,
    platformHost,
    searchTerm,
    term,
    link,
  }

  it('should have uuid', () => {
    const createdOccurrence = createOccurrence(occurrenceProperties)
    expect(createdOccurrence.uuid).toBeDefined()
  })

  it('should have term', () => {
    const createdOccurrence = createOccurrence(occurrenceProperties)
    expect(createdOccurrence.term).toBe(term)
  })

  it('should have link', () => {
    const createdOccurrence = createOccurrence(occurrenceProperties)
    expect(createdOccurrence.link).toBe(link)
  })

  it('should have searchDate', () => {
    const createdOccurrence = createOccurrence(occurrenceProperties)
    expect(createdOccurrence.searchDate).toBeDefined()
  })

  it('should have searchTerm', () => {
    const createdOccurrence = createOccurrence(occurrenceProperties)
    expect(createdOccurrence.searchTerm).toBe(searchTerm)
  })

  it('should have platformName', () => {
    const createdOccurrence = createOccurrence(occurrenceProperties)
    expect(createdOccurrence.platformName).toBe(platformName)
  })

  it('should have platformHost', () => {
    const createdOccurrence = createOccurrence(occurrenceProperties)
    expect(createdOccurrence.platformHost).toBe(platformHost)
  })
})
