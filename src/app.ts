import { scrollRecursivelyIntoView } from './scraper'
import { scrapImplicityList } from './scraper/scrapImplicityList'
import { createOccurrence } from './domain'
import { concatenatePath } from './utils'
import { Browser, launch } from 'puppeteer'
import { load } from './scraper/load'

export type SearchResult = {
  platformName: string,
  platformHost: string,
  searchTerm: string,
  term: string,
  link: string
}

async function searchYoutube(searchTerm: string, browser: Browser): Promise<SearchResult[]> {

  const platformName = 'YouTube'
  const platformHost = 'https://youtube.com'

  const selectors = Object.freeze({
    wrapperSelector: 'ytd-channel-renderer',
    termSelector: '#text',
    linkSelector: 'a',
  })

  const buildListUrl = (searchTerm: string) => {
    return concatenatePath(platformHost, `/results?search_query=${searchTerm}&sp=EgIQAg%253D%253D`)
  }

  const listUrl = buildListUrl(searchTerm)
  const page = await browser.newPage()

  await load(listUrl, page)

  await scrollRecursivelyIntoView(page, selectors.wrapperSelector)

  return scrapImplicityList(page, selectors)
    .then(table => table.map(line => ({
      term: line.term,
      link: line.link,
      searchTerm,
      platformName,
      platformHost,
    })))
}

async function search(searchTerm: string) {
  const browser = await launch()
  const createYoutubeOccurrence = ({ term, link, platformHost, platformName }: SearchResult) => createOccurrence({
    platformHost, 
    platformName,
    searchTerm,
    term,
    link,
  })

  const throwYoutubeSearchError = () => {
    throw new Error('An error occurred during YouTube Search')
  }

  return searchYoutube(searchTerm, browser)
    .then(searchResults => searchResults.map(createYoutubeOccurrence))
    .catch(() => throwYoutubeSearchError())
    .finally(() => browser.close())
}

async function main() {
  const searchTerm = process.argv[2]

  if(!searchTerm) {
    console.log('Search term must be specified as parameter')
    return
  } else {
    const searchResults = await search(searchTerm)
    console.log(`A total of ${searchResults.length} occurrences has being found for the search term "${searchTerm}".`)
    console.table(searchResults)
  }
}

main();