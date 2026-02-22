/**
 * Post-build script: copies docs/index.html into each SPA sub-route directory
 * so GitHub Pages can serve the Angular app at every route path directly.
 */
const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');
const indexHtml = path.join(docsDir, 'index.html');

// All sub-routes that need physical index.html files
const routes = [
  'myapps',
  'myapps/flap3',
  'myapps/flap3/privacy-policy',
  'myapps/flap3/account-deletion'
];

const source = fs.readFileSync(indexHtml, 'utf8');

for (const route of routes) {
  const dir = path.join(docsDir, ...route.split('/'));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), source, 'utf8');
  console.log(`  Created: docs/${route}/index.html`);
}

// Also copy as 404.html
fs.writeFileSync(path.join(docsDir, '404.html'), source, 'utf8');
console.log('  Created: docs/404.html');
console.log('Done! All route pages created.');
