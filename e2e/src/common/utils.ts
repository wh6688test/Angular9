import { ElementFinder, browser, by, element } from 'protractor';

   export async function navigateTo(): Promise<unknown> {
    //return await browser.get(browser.baseUrl) as Promise<unknown>;
    return await browser.get(browser.baseUrl);
  }
