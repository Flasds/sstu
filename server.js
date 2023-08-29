const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let notices = [];

app.use(bodyParser.json());
// 在 server.js 文件中
app.use(express.static(__dirname)); // 使 Express 能够提供静态文件

app.use(express.static('public'));

app.post('/publish', (req, res) => {
    const notice = req.body.notice;
    
    if (notice) {
        notices.push(notice);
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.get('/notices', (req, res) => {
    res.json({ notices });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// ... 其他引入和代码 ...

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// ... 其他路由和代码 ...
