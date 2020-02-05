# AngularSandbox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## SSR (Puppeteer)

To run prerender pages follow these steps:

1. Run `ng build --prod`

2. Run `node ./server/ssr-puppeteer.js` to prerender pages

3. Run `http-server -p 8080 -c-1 ./dist/browser`.

4. To see what is done try to throttle network `Chrome Dev Tools` -> 
`...` -> `Network Condition` -> `Network Throttling`. The page will load instantly
while other resources will still load

## PWA

1. Run `ng add @angular/pwa`. This command will make your angular 
application PWA. It will create `manifest.webmanifest`, `ngsw-config.json`,
add some dependencies in `package.json` and add new module in `app.module.ts`. 

2. Run `ng build --prod`. You will see ngsw-worker.js in dist/browser folder.
This is the service worker. You can configure its behavior in `ngsw-config.json`
To see comments on behavior open `ngsw-config-with-comments.json`

3. To see service worker in action, install `http-server` and run 
`http-server -p 8080 -c-1 ./dist/browser`. `-p` flag sets the port and
`-c-1` disables caching. Then go to `http://localhost:8080/`

4. You can see service worker in chrome dev-tools -> Application -> 
Service Worker
