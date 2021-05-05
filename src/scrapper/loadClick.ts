import { Page } from 'puppeteer'

export const loadClick = (page: Page, selector: string) => {
  return Promise.all([
    page.click(selector), 
    page.waitForNavigation({ waitUntil: 'networkidle0' })
  ])
}
