// ใช้ Express Framework (ต้องติดตั้งก่อน: npm install express)
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware สำหรับ parse JSON
app.use(express.json());

// Route หลัก
app.get('/', (req, res) => {
  res.send(`
    
      
        
        Express Server
        
          body { 
            font-family: Arial; 
            text-align: center; 
            padding: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          h1 { font-size: 3em; }
        
      
      
        🚀 Express Server
        กำลังทำงานที่ http://localhost:${PORT}
      
    
  `);
});

// Route สำหรับ API
app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'สวัสดีจาก API!', 
    timestamp: new Date(),
    status: 'success'
  });
});

// Route สำหรับรับข้อมูล
app.post('/api/data', (req, res) => {
  console.log('📨 ได้รับข้อมูล:', req.body);
  res.json({ 
    message: 'รับข้อมูลสำเร็จ!', 
    received: req.body 
  });
});

// เริ่ม Server
app.listen(PORT, () => {
  console.log(`✅ Express Server กำลังทำงานที่ http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/hello`);
});