require('chromedriver');
const { Builder, By, Key, Capabilities} = require('selenium-webdriver');
const assert = require('assert');

describe('Home Actions', function() {
  this.timeout(10000);
  var driver;

  beforeEach(function(){
    driver = new Builder().withCapabilities(
      Capabilities.chrome()).build();
    driver.get('http://127.0.0.1:3000/');
  });

  describe('fill all form fields', function() {
    it('function should terminate without error', async function() {

      let destBox = await driver.findElement(By.xpath('//*[@id="destination"]'));
      destBox.sendKeys('asdfghjkl');
      
      let checkInDayBox = await driver.findElement(By.xpath('//*[@id="checkInDay"]'));
      checkInDayBox.sendKeys('09012022');
      
      let checkOutDayBox = await driver.findElement(By.xpath('//*[@id="checkOutDay"]'));
      checkOutDayBox.sendKeys('09032022');
      
      let roomSelectBox = await driver.findElement(By.xpath('//*[@id="rooms"]'));
      await roomSelectBox.click();
      let roomOptions = await driver.findElements(By.className('menuItem'));
      roomOptions[0].click();
      
      let adultSelectBox = await driver.findElement(By.xpath('//*[@id="adults"]'));
      await adultSelectBox.click();
      let adultOptions = await driver.findElements(By.className('menuItem'));
      adultOptions[0].click();

      let childrenSelectBox = await driver.findElement(By.xpath('//*[@id="children"]'));
      await childrenSelectBox.click();
      let childrenOptions = await driver.findElements(By.className('menuItem'));
      childrenOptions[0].click();
      
      await driver.sleep(3000);
      let hotelList = await driver.findElements(By.xpath("//*[@id='hotelList']/div/div/ul/div"));
      assert(hotelList.length == 0);
    });
  });

  afterEach(function() {
    driver.quit();
  })

});