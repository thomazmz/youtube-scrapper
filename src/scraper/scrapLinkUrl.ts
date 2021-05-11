import { Page, ElementHandle } from 'puppeteer'
import { findElement } from './findElement'

export const scrapLinkUrl = async (wrapper: Page | ElementHandle, selector: string): Promise<string> => {
  const linkElement = await findElement(wrapper, selector)
  const link = await linkElement.evaluate(linkElement => linkElement.href, linkElement)
  if(!link) throw new Error(`Element does not have text content. Selectors might be broken.`)
  return link as string
}