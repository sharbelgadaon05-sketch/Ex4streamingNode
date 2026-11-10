const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./templates/page.html');
const aboutPage = readFileSync('./templates/about.html');
const contactPage = readFileSync('./templates/contact.html');
const homeStyles = readFileSync('./templates/extrenal.css');
const image = readFileSync('./templates/images.jpg');

const server = http.createServer((req, res) => {

    const url = req.url;

    console.log(url);

    // Home page
    if (url === '/' || url === '/home') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
        res.end();
    }

    // About page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(aboutPage);
        res.end();
    }

    // Contact page
    else if (url === '/contact') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(contactPage);
        res.end();
    }

    // CSS
    else if (url === '/extrenal.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(homeStyles);
        res.end();
    }

    // Image
    else if (url === '/images.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpeg' });
        res.write(image);
        res.end();
    }

    // 404
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }
});

server.listen(3000);

console.log('Server is running on http://localhost:3000');