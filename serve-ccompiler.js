// Simple Node.js server with Cross-Origin Isolation headers for CCompiler.html
// Run with: node serve-ccompiler.js

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.wasm': 'application/wasm',
};

const server = http.createServer((req, res) => {
  // Set Cross-Origin Isolation headers (required for Wasmer SDK)
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');

  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './CCompiler.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + error.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n🚀 Server running at http://localhost:${PORT}/`);
  console.log(`📝 Serving CCompiler.html with Cross-Origin Isolation headers\n`);
  console.log(`   Cross-Origin-Opener-Policy: same-origin`);
  console.log(`   Cross-Origin-Embedder-Policy: require-corp\n`);
  console.log(`Press Ctrl+C to stop\n`);
});
