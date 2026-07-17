const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`[Browser Console Error]: ${msg.text()}`);
    } else if (msg.type() === 'warning') {
      console.log(`[Browser Console Warning]: ${msg.text()}`);
    }
  });

  page.on('pageerror', error => {
    console.log(`[Browser Page Error]: ${error.message}`);
  });

  console.log("Navigating to https://climategreenworld.org...");
  await page.goto('https://climategreenworld.org', { waitUntil: 'networkidle2' });
  
  console.log("Waiting 5 seconds to capture delayed errors...");
  await new Promise(r => setTimeout(r, 5000));
  
  await browser.close();
  console.log("Done.");
})();
