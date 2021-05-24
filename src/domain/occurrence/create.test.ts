import { createOccurrence } from './create'

describe('occurrence.create', () => {

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

  it('should return occurrence with uuid', () => {
    const createdOccurrence = createOccurrence(occurrenceProperties)
    expect(createdOccurrence.uuid).toBeDefined()
  })

  it('should return occurrence with term', () => {
    const createdOccurrence = createOccurrence(occurrenceProperties)
    expect(createdOccurrence.term).toBe(term)
  })

  it('should return occurrence with link', () => {
    const createdOccurrence = createOccurrence(occurrenceProperties)
    expect(createdOccurrence.link).toBe(link)
  })

  it('should return occurrence with searchDate', () => {
    const createdOccurrence = createOccurrence(occurrenceProperties)
    expect(createdOccurrence.searchDate).toBeDefined()
  })

  it('should return occurrence with searchTerm', () => {
    const createdOccurrence = createOccurrence(occurrenceProperties)
    expect(createdOccurrence.searchTerm).toBe(searchTerm)
  })

  it('should return occurrence with platformName', () => {
    const createdOccurrence = createOccurrence(occurrenceProperties)
    expect(createdOccurrence.platformName).toBe(platformName)
  })

  it('should return occurrence with platformHost', () => {
    const createdOccurrence = createOccurrence(occurrenceProperties)
    expect(createdOccurrence.platformHost).toBe(platformHost)
  })
})
