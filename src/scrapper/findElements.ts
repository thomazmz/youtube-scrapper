import { Page, ElementHandle } from 'puppeteer'

export const findElements = async (wrapper: Page | ElementHandle, selector: string): Promise<ElementHandle<Element>[]> => {
  const elements = await wrapper.$$(selector)
  if(!elements) throw new Error(`No element found for query selector "${selector}". Selectors might be broken.`)
  return elements
}