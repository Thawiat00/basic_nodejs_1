// สร้าง HTTP Server ด้วย Node.js built-in module
let http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.write('สวัสดีจาก Node.js Server! 🎉');
  res.write('Server กำลังทำงานที่ http://localhost:8080');
  res.end();
}).listen(8080);

console.log('✅ Server กำลังทำงานที่ http://localhost:8080');
//console log server