
// Import the HTTP module to create a web server
const http = require('http');

// Import readFileSync from the fs module to read files
const { readFileSync } = require('fs');

// Read the HTML files
const homePage = readFileSync('./templates/page.html');
const aboutPage = readFileSync('./templates/about.html');
const contactPage = readFileSync('./templates/contact.html');

// Read the CSS file
const homeStyles = readFileSync('./templates/extrenal.css');

// Read the image file
const image = readFileSync('./templates/images.jpg');

// Create an HTTP server
const server = http.createServer((req, res) => {

    // Get the requested URL from the browser
    const url = req.url;

    // Print the requested URL in the terminal
    console.log(url);

    // Home page: display page.html
    if (url === '/' || url === '/home') {

        // Send status code 200 (OK) and specify HTML content
        res.writeHead(200, { 'content-type': 'text/html' });

        // Send the home page content to the browser
        res.write(homePage);

        // Finish the response
        res.end();
    }

    // About page: display about.html
    else if (url === '/about') {

        // Send status code 200 (OK) and specify HTML content
        res.writeHead(200, { 'content-type': 'text/html' });

        // Send the about page content
        res.write(aboutPage);

        // Finish the response
        res.end();
    }

    // Contact page: display contact.html
    else if (url === '/contact') {

        // Send status code 200 (OK) and specify HTML content
        res.writeHead(200, { 'content-type': 'text/html' });

        // Send the contact page content
        res.write(contactPage);

        // Finish the response
        res.end();
    }

    // CSS: send the external CSS file to the browser
    else if (url === '/extrenal.css') {

        // Send status code 200 and specify CSS content
        res.writeHead(200, { 'content-type': 'text/css' });

        // Send the CSS file
        res.write(homeStyles);

        // Finish the response
        res.end();
    }

    // Image: send the JPG image to the browser
    else if (url === '/images.jpg') {

        // Send status code 200 and specify JPEG image content
        res.writeHead(200, { 'content-type': 'image/jpeg' });

        // Send the image
        res.write(image);

        // Finish the response
        res.end();
    }

    // If the requested URL does not exist, display a 404 error
    else {

        // Send status code 404 (Page Not Found)
        res.writeHead(404, { 'content-type': 'text/html' });

        // Display an error message
        res.write('<h1>Page Not Found</h1>');

        // Finish the response
        res.end();
    }
});

// Start the server on port 3000
server.listen(3000);

// Print a message in the terminal when the server starts
console.log('Server is running on http://localhost:3000');
