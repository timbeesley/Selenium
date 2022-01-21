//Selenium Javascript Tutorial For Beginners
//Setting Browser Options
//https://www.youtube.com/watch?v=QwymPtk4zWo
//Scipt is not working, TypeError: options.setPreference is not a function

const { Builder, By, Key, util } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();

//Not sure if my directory path is set correct, example from video was "C:\mySeleniumDownloads"
options.setPreference("browser.download.dir", "~/Desktop/mySeleniumDownloads");
options.setPreference("browser.download.folderList", 2);
options.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/x-csv");

const driver = new Builder().forBrowser("chrome").setChromeOptions(options).build();

driver.get("http://samplecsvs.s3.amazonaws.com/Sacramentaorealestatetransactions.csv");