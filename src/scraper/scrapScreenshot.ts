import { Page } from 'puppeteer';
import { load } from './load'

type Properties = {
  url: string,
  path: string,
  width?: number,
  height?: number,
  fullPage?: boolean,
}

export const scrapScreenshot = async (page: Page, props: Properties) => {

  const {
    url,
    path,
    width = 1440,
    height = 1080,
    fullPage = true,
  } = props;
  
  await load(url, page)
  await page.setViewport({ width, height })
  await page.screenshot({ path, fullPage })
}