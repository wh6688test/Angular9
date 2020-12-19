import { InputFormPage } from './pages/form.po';
import { browser, logging, element, by, ExpectedConditions } from 'protractor';
import * as utils from './common/utils';
//import * as customMatchers from 'protractor-jasmine-matchers';

describe('Group Form Suite', () => {
  let page: InputFormPage;

  beforeEach(async () => {
    page = new InputFormPage();
    await utils.navigateTo();

  });

  it('should display form title hint button on page up', async () => {


      expect(await page.getTitleText()).toEqual("Angular Group Info1");
     //hints were there before entering any text
     expect(await page.getHint1Text()).toEqual("Please enter group attribute 1");
     expect(await page.getHint2Text()).toEqual("Please enter group attribute 2");
  });


  it('should submit form successfully', async ()=> {

      await page.submitForm1("muB2", "muB3");

      await page.resultHeadCol.then( async e => await expect(e.length).toEqual(4));
      await page.resultDataRow.then( async e => await expect(e.length>=0).toBe(true));

      });

  it('should display client validation errors', async ()=> {

                //input1 validation errors are displayed
                page.attr1.clear().then(() => page.attr1.click())
                .then(() => page.title1.click()).then(() => {
                 //await new Promise(r => setTimeout(r, 1000));
                expect(page.getRequireError()).toBeTruthy();
                }).then(() => {
                    expect(page.getMinError()).toBeTruthy();
                }).then(() => {
                    expect(page.getPatternError()).toBeTruthy();
                });

                expect(await page.submit.getAttribute('disabled')).toBeTruthy();

                //await new Promise(r => setTimeout(r, 9000));

                page.attr1.click().then(() => page.attr1.clear())
                   .then(() => page.attr1.sendKeys('1234567890123'))
                   .then(() => {
                      expect(page.attr1.getAttribute('value')).toEqual('1234567890');
                   }).then(() => {
                      expect(page.getHint1Text()).toBeTruthy();
                   });

                //input2
                page.attr2.clear().then(() => page.attr2.sendKeys("1"))
                .then(() => {
                    expect(page.getMinError()).toBeTruthy();

                });
                expect(page.submit.getAttribute('disabled')).toBeTruthy();
                page.attr2.click().then(() => page.attr1.clear())
                   .then(() => page.attr2.sendKeys('1234567890123'))
                   .then(() => {
                      expect(page.attr2.getAttribute('value')).toEqual('1234567890');
                      expect(page.getHint2Text()).toBeTruthy();
                 }).then(() =>  {
                   expect(page.submit.getAttribute('disabled')).toBeFalse();
                   //new Promise(r => setTimeout(r, 12000));
                 });


  });

afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
