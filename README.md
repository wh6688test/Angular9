#Prerequisite : 
  1. set up angular9 environment : associated node dependencies
  2. working with fastapi backend : https://github.com/wh6688test/fastapi


CLI : 

ng build --watch  and ng e2e

or : 

ng serve  ng e2e --port <unused port>

example of protractor e2e test results : 

   [12:32:41] I/launcher - Running 1 instances of WebDriver
   [12:32:41] I/direct - Using ChromeDriver directly...
    Jasmine started

      Group App Suite
      ✓ should display title and footers and image

      Group Form Suite
       ✓ should display form title hint button on page up
       ✓ should submit form successfully
       ✓ should display client validation errors

    Executed 4 of 4 specs SUCCESS in 3 secs.
    [12:32:48] I/launcher - 0 instance(s) of WebDriver still running
    [12:32:48] I/launcher - chrome #01 passed


