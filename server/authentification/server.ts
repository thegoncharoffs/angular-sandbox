import App from './app';

const port = +process.env.PORT || 8080;

const app = new App(8080);
 
app.listen();