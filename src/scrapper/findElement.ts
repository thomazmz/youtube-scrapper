import { Page, ElementHandle } from 'puppeteer'

export const findElement = async (wrapper: Page | ElementHandle, selector: string): Promise<ElementHandle<Element>> => {
  const element = await wrapper.$(selector)
  if(!element) throw new Error(`No element found for query selector "${selector}". Selectors might be broken.`)
  return element
}