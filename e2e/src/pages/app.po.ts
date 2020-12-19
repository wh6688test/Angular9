import { browser, by, element, ElementFinder} from 'protractor';

export class AppPage {

  title: ElementFinder;
      
       titleTop :  ElementFinder;
       contentImg : ElementFinder;
       privacyLink :  ElementFinder;
       termsLink : ElementFinder;
       externalLink : ElementFinder;
       crNote : ElementFinder;
       TIMEOUT = 5000;

  constructor() {
          this.titleTop = element(by.css('[testid="titletop"]'));
          this.contentImg = element(by.css('img[alt="my svg"]'));
          this.privacyLink = element(by.css('[href*="privacy"]'));
          this.termsLink = element(by.css('[href*="terms"]'));
          this.externalLink = element(by.css('[href*="external"]'));
          this.crNote = element(by.css('[data-testid*="footer_note"]'));
  }

  

  async getTitleText(): Promise<string> {
    //return await this.titleTop.getText() as Promise<string>;
     return await this.titleTop.getText();
  }

  async getPrivacyLinkText(): Promise<string> {
    //return await this.privacyLink.getText() as Promise<string>;
     return await this.privacyLink.getText();
  }

  async getTermsLinkText(): Promise<string> {
    //return this.privacyLink.getText() as Promise<string>;
    return this.termsLink.getText();
  }

  async getExternalLinkText(): Promise<string> {
    //return this.externalLink.getText() as Promise<string>;
     return this.externalLink.getText();
  }

  async getCRNoteText(): Promise<string> {
    //return this.crNote.getText() as Promise<string>;
    return this.crNote.getText();
  }
  
}
