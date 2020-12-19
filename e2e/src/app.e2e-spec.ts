import { AppPage} from './pages/app.po';
import {InputFormPage} from './pages/form.po';
import { browser, logging, ExpectedConditions } from 'protractor';
import * as utils from './common/utils';

describe('Group App Suite', () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();
    await utils.navigateTo();
  });


  it('should display title and footers and image', async () => {
    expect(await page.getTitleText()).toEqual('Welcome to Wendy first Angular');
    expect(await page.getPrivacyLinkText()).toEqual('Privacy');
    expect(await page.getTermsLinkText()).toEqual('Terms & Conditions');
    expect(await page.getExternalLinkText()).toEqual('External');
    expect(await page.getCRNoteText()).toContain('2020');
    //verify image loading is completed
    expect(await page.contentImg.getAttribute('complete')).toBeTruthy();
  });


 afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
