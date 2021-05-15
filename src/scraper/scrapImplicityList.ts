import { Page } from 'puppeteer'
import { findElements} from './findElements'
import { scrapLinkUrl } from './scrapLinkUrl'
import { scrapElementText } from './scrapElementText'

export type ListSelectors = {
  wrapperSelector: string,
  termSelector: string,
  linkSelector: string,
}

export const scrapImplicityList = async (page: Page, selectors: ListSelectors) => {
  const { wrapperSelector, termSelector, linkSelector } = selectors

  const elementsList = await findElements(page, wrapperSelector)
  return Promise.all(elementsList.map(async element => ({
    term: await scrapElementText(element, termSelector),
    link: await scrapLinkUrl(element, linkSelector),
  })))
}