const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 5502;
const root = process.cwd();

const mime = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff2': 'font/woff2'
};

const csp = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://cdn.tailwindcss.com https://unpkg.com https://static.elfsight.com https://elfsightcdn.com https://universe-static.elfsightcdn.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https: https://static.elfsight.com https://core.service.elfsight.com https://elfsightcdn.com https://universe-static.elfsightcdn.com; frame-src 'self' https://static.elfsight.com https://elfsightcdn.com https://universe-static.elfsightcdn.com https://www.google.com https://maps.google.com https://www.google.co.in https://www.googleusercontent.com blob:; base-uri 'self'; form-action 'self';";

const server = http.createServer((req,res)=>{
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if(reqPath === '/') reqPath = '/index.html';
  const file = path.join(root, reqPath);
  fs.stat(file, (err, stats) => {
    if(err || !stats.isFile()){
      res.statusCode = 404; res.end('Not found'); return;
    }
    const ext = path.extname(file).toLowerCase();
    const type = mime[ext] || 'application/octet-stream';
    res.setHeader('Content-Type', type);
    res.setHeader('Content-Security-Policy', csp);
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    fs.createReadStream(file).pipe(res);
  });
});

server.listen(port, ()=> console.log(`Static server running at http://localhost:${port}`));
