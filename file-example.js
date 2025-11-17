// นำเข้า File System Module
const fs = require('fs');

console.log('📁 ตัวอย่างการทำงานกับไฟล์\n');

// 1. เขียนไฟล์
const content = 'สวัสดี! นี่คือไฟล์ที่สร้างจาก file-example Node.js\nเวลา: ' + new Date().toLocaleString('th-TH');

fs.writeFile('example.txt', content, function(err) {
  if (err) throw err;
  console.log('✅ สร้างไฟล์ example.txt สำเร็จ!');
  
  // 2. อ่านไฟล์
  fs.readFile('example.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log('📖 อ่านไฟล์สำเร็จ:');
    console.log(data);
    
    // 3. เพิ่มข้อมูลต่อท้าย
    fs.appendFile('example.txt', '\n\n➕ บรรทัดที่เพิ่มเข้ามาใหม่', function(err) {
      if (err) throw err;
      console.log('✅ เพิ่มข้อมูลในไฟล์สำเร็จ!');
    });
  });
});