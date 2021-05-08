import { Page } from 'puppeteer'

export const scrollLastElementIntoView = async (page: Page, selector: string) => {
  page.evaluate((selector) => {
    const elements = document.querySelectorAll(selector)  
    elements[elements.length -1].scrollIntoView()
  }, selector)
}
