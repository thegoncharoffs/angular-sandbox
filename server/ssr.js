const puppeteer = require('puppeteer');
const express = require('express');
const { join, dirname } = require('path');
const { readFile, exists, writeFile, mkdir } = require('mz/fs');

// Defining some configuration
const PORT = 4000;
const HOST = `http://localhost:${PORT}`;

let PAGES = [
    '',
    'observable',
    'ng-if',
    'ng-template'
];
let RENDERED_PAGES = [];

async function main() {

    // Starting an Express.js server to serve the static files while puppeter prerender the pages
    const app = express();

    // Getting the html content from the index.html file
    const index = (await readFile(join(process.cwd(), 'dist/browser', 'index.html'))).toString();

    // Serving the static files.
    app.get('*.*', express.static(join(process.cwd(), 'dist/browser')));

    // Serving index.html, when a puppeters request the index page
    app.get('*', (req, res) => res.send(index));

    // Starting the express server
    const server = await (new Promise((resolve, reject) => {
        const s = app.listen(PORT, e => e ? reject(e) : resolve(s));
    }));

    console.log(`Started server ${HOST}!`);

    // Launching Puppeteer
    const browser = await puppeteer.launch();

    console.log(`Started browser!`);

    // Creating a new Tap/Page
    const page = await browser.newPage();

    for (let i = 0; i < PAGES.length; i++) {
        const p = PAGES[i];

        // Requesting the first page in PAGES array
        await page.goto(`${HOST}/${p}`);
        await page.waitFor(1000);

        // Getting the html content after the Chromium finish rendering.
        const result = await page.evaluate(() => document.documentElement.outerHTML);

        // Defining the html file name that will be created
        const file = join(process.cwd(), 'dist/browser', p, 'index.html');
        const dir = dirname(file);

        // Test if the directory exist, if not create the directory
        if (!(await exists(dir))) {
            await mkdir(dir, {recursive: true});
        }

        // Write the rendered html file
        await writeFile(file, `<!doctype html> \n ${result}`);

        //console.log(`Writed ${file}`);

        // Add this page to the RENDERED PAGES array
        // RENDERED_PAGES = [...RENDERED_PAGES, p];

        // Set PAGES with the pages that still need to be rendered
        // PAGES = difference(
        //     uniq(PAGES.concat(result.match(/href="\/[\/\w\d\-]*"/g).map(s => s.match(/\/([\/\w\d\-]*)/)[1]))),
        //     RENDERED_PAGES
        // );

    }

    // Closes Chromium and finishes the express server.
    browser.close();
    // serverserver.close();
}

// Run the main async function
main()
    .then(() => console.log('All right!'))
    .catch(err => {
        console.error('Err', err);
        process.exit(1);
    });