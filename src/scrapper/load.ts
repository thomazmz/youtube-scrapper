import { Page } from 'puppeteer'

export const load = (url: string, page: Page) => {
  return page.goto(url, { waitUntil: 'networkidle0' })
}