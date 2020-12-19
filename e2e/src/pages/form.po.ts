import { resolveTxt } from 'dns';
import {ElementFinder, ElementArrayFinder, element, by, browser, ExpectedConditions} from 'protractor';

export class InputFormPage {

       title1: ElementFinder;

       attr1 :  ElementFinder;
       attr2 : ElementFinder;

       hint1 :  ElementFinder;
       hint2 : ElementFinder;

       submit :   ElementFinder;
       groupResult : ElementFinder;

       requireErr: ElementFinder;
       patternErr: ElementFinder;
       minErr: ElementFinder;

       resultHeadCol: ElementArrayFinder;
       resultDataRow: ElementArrayFinder;
       //belongs here logically
       serviceError: ElementFinder;

       TIMEOUT = 5000;

       //UNTIL = protractor.ExpectedConditions;

       constructor() {
          this.title1 = element(by.css('[testid="title1"]'));

          this.attr1 = element(by.id('input1'));
          this.attr2 = element(by.id('input2'));

          this.hint1 = element(by.css('[testid="hint1"'));
          this.hint2 = element(by.css('[testid="hint2"'));

          this.requireErr = element(by.css('[testid="requireErr"]'));
          this.patternErr = element(by.css('[testid="patternErr"]'));
          this.minErr = element(by.css('[testid="minErr"]'));
          this.submit = element(by.css('button[type="submit"]'));
          this.resultHeadCol = element.all(by.css('[testid="groupHead"]>th'));
          this.resultDataRow= element.all(by.css('[testid="groupData"]'));

          //belongs here logically
          this.serviceError = element(by.css('[testid="error"]'));
       }


       async getTitleText(): Promise<string> {
          return await this.title1.getText();
       }

       async getHint1Text(): Promise<string> {
          return await this.hint1.getText();
       }
       async getHint2Text(): Promise<string> {
          return await this.hint2.getText();
       }

       async getRequireError(): Promise<string> {
          return await this.requireErr.getText();
       }
       async getPatternError(): Promise<string> {
          return await this.patternErr.getText();
       }
       async getMinError(): Promise<string> {
          return await this.minErr.getText();
       }
       async getServiceErrorText(): Promise<string> {
           return  await this.serviceError.getText();
       }

       async getResultHeadColLength(): Promise<number> {
          return await element.all(by.css('[testid="groupHead"]>th'))
               .then(async e => e.length);
       }

       async getResultDataRowLength(): Promise<number> {
          return await element.all(by.css('[testid="groupData"]'))
            .then(async e => e.length);
       }
       async submitForm1(input11: string, input22: string): Promise<void> {
                //enter texts
                await this.attr1.clear().then(async () => {
                  await this.attr1.click();
                }).then(async () => {
                  await this.attr1.sendKeys(input11)
                });
                //await new Promise(r => setTimeout(r, 12000));
                await this.attr2.clear().then(async () => {
                  await this.attr2.click();
                }).then(async () => {
                  await this.attr2.sendKeys(input22)
                }).then(async () => {
                  await this.submit.click();
                })

                return;

       }

}
