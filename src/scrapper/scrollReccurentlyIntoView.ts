import { scrollIntoView } from  './scrollIntoView'
import { waitTimeout } from '../helpers'
import { Page } from 'puppeteer' 

export type InfinityScollOptions = {
  results?: number,
  delay?: number,
  index?: number,
  min?: number,
}

export const scrollReccurentlyIntoView = async (page: Page, selector: string, options: InfinityScollOptions = {}): Promise<void> => {

  const { 
    delay = 2000,
    results = 0,
    index = 0, 
    min = 0, 
  } = options

  await scrollIntoView(page, selector)
  await waitTimeout(delay/5)

  const queryResults = (await page.$$(selector)).length

  if(min > 0 && queryResults >= min) {
    return
  }

  if(queryResults === results && index >= delay*2/10 ) {
    return
  }

  if(queryResults === results && index < 15) {
    return scrollReccurentlyIntoView(page, selector, {min, index: index+1, results: queryResults})  
  }

  return scrollReccurentlyIntoView(page, selector, {min, index: 0, results: queryResults})
}