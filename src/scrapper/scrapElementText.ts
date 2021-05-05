import { Page, ElementHandle } from 'puppeteer'
import { findElement } from './findElement'

export const scrapElementText = async (wrapper: Page | ElementHandle, selector: string): Promise<string> => {
  const element = await findElement(wrapper, selector)
  const text = await wrapper.evaluate(element => element.textContent, element)
  if(!text) throw new Error(`Element does not have text content. Selectors might be broken.`)
  return text as string
}