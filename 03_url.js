const url = require('url');
const websiteURL = 'https://www.example.com:8080/products?category=electronics&sort=price';

const parsedURL = url.parse(websiteURL, true);
console.log(`Protocol: ${parsedURL.protocol}`);       
console.log(`Hostname: ${parsedURL.hostname}`);       
console.log(`Port: ${parsedURL.port}`);               
console.log(`Pathname: ${parsedURL.pathname}`);       
console.log('Query Parameters:', JSON.stringify(parsedURL.query));