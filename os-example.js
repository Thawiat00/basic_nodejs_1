// นำเข้า Built-in Module สำหรับข้อมูลระบบ
const os = require('os');

console.log('=================================');
console.log('💻 ข้อมูลระบบปฏิบัติการ');
console.log('=================================');
console.log('');
console.log('🖥️  Platform:', os.platform());
console.log('🏛️  Architecture:', os.arch());
console.log('💾 Total Memory:', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
console.log('🆓 Free Memory:', (os.freemem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
console.log('⚡ CPU Cores:', os.cpus().length);
console.log('🏠 Home Directory:', os.homedir());
console.log('⏱️  Uptime:', (os.uptime() / 3600).toFixed(2), 'hours')