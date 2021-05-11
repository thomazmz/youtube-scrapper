import { scrollLastElementIntoView } from  './scrollLastElementIntoView'
import { wait } from '../utils'
import { Page } from 'puppeteer' 

type Options = {
  results?: number,
  delay?: number,
  index?: number,
  min?: number,
}

export const scrollRecursivelyIntoView = async (page: Page, selector: string, options: Options = {}): Promise<void> => {

  const {
    delay = 2000,
    results = 0,
    index = 0,
    min = 0,
  } = options

  await scrollLastElementIntoView(page, selector)
  await wait(delay/10)

  const queryResults = (await page.$$(selector)).length

  if(min > 0 && queryResults >= min) {
    return
  }

  if(queryResults === results && index >= delay/400) {
    return
  }

  if(queryResults === results && index < delay/400) {
    return scrollRecursivelyIntoView(page, selector, {min, index: index+1, results: queryResults})  
  }

  return scrollRecursivelyIntoView(page, selector, {min, index: 0, results: queryResults})
}