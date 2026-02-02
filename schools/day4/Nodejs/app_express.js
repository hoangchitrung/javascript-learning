// https://expressjs.com/en/starter/installing.html
// npm init -y
// npm install express


// Khi dùng http thuần cú pháp
// const http = require("http");

// http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/movies") {
//     res.end("List movies");
//   }
// }).listen(3000);

// Route phức tạp + Parse body mệt +Dự án lớn → code rối
// Express.js là framework chạy trên Node.js, giúp xây dựng web server và REST API nhanh, rõ ràng, dễ bảo trì.

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

// app.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// Express = HTTP server + Routing + Middleware + Xử lý dữ liệu
// Express.js là một framework chạy trên Node.js, giúp bạn:
// Nhận request từ client (browser, Postman, frontend…)
// Xử lý logic (điều kiện, dữ liệu, DB…)
// Trả response (JSON, text, status code…)
// Nếu Node.js thuần là xây nhà từ gạch, thì Express là bộ khung có sẵn.

// Node.js thuần:
// Phải tự parse URL
// Tự kiểm tra method (GET, POST…)
// Tự viết routing
// Code dài, khó đọc khi app lớn

// Express:
// Có routing rõ ràng
// Có middleware
// Có cấu trúc logic chuẩn backend
// Viết ít code hơn – dễ bảo trì
// Luồng xử lý request
//     Client
//     ↓
//     Request (URL + Method + Body)
//     ↓
//     Express App
//     ↓
//     Middleware (0 hoặc nhiều)
//     ↓
//     Route Handler
//     ↓
//     Response
//     ↓
//     Client

// Route = đường đi + hành động
// /movies + GET → lấy danh sách phim
// /movies + POST → thêm phim
// /movies/:id + PUT → sửa phim
// /movies/:id + DELETE → xóa phim

// Express ánh xạ: (URL + HTTP Method) → Function xử lý

// Middleware là hàm đứng giữa request và response.
// Nó có thể:
//     Đọc request
//     Chỉnh sửa request
//     Chặn request
//     Cho request đi tiếp
// Ví dụ: Kiểm tra dữ liệu gửi lên + Ghi log + Kiểm tra đăng nhập + Parse JSON

// 1. Import và khởi tạo express
// import express from "express";
// const app = express();

// express() → tạo application
// app là server trung tâm, mọi thứ gắn vào đây

// Middleware parse JSON (BẮT BUỘC khi dùng POST/PUT)
// app.use(express.json());  Đọc JSON từ request body -> Sau đó mới dùng được req.body
// Cú pháp:
// app.use((req, res, next) => {
//   // xử lý
//   next();
// });

// req : request
// res : response
// next() : cho request đi tiếp

// Route (định nghĩa API)
// app.get("/path", (req, res) => {
//   res.send("response");
// });

// POST
// app.post("/path", (req, res) => {
//   const data = req.body;
//   res.json(data);
// });

// PUT
// app.put("/path/:id", (req, res) => {
//   const id = req.params.id;
//   res.send(id);
// });


// DELETE
// app.delete("/path/:id", (req, res) => {
//   res.send("deleted");
// });

// Request object – cú pháp hay dùng
// req.params     // lấy từ URL (:id)
// req.query      // ?page=1
// req.body       // dữ liệu POST / PUT
// req.method     // GET, POST...
// req.url        // đường dẫn

// Response object – cú pháp hay dùng
// res.send(data);        // text / object
// res.json(object);     // JSON
// res.status(200);      // status code
// res.status(404).send("Not found");

// Error handling cơ bản
// app.use((err, req, res, next) => {
//   res.status(500).send(err.message);
// });

// Chạy server
// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// HTTP Status Code
// https://www.npmjs.com/package/http-status-codes
// 200	OK – request thành công
// 201	Created – tạo mới thành công
// 400	Bad Request
// 401	Unauthorized
// 404	Not Found
// 500	Server Error





const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Log middleware
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

// Database 
let users = [
    { id: 1, username: "admin", password: "123456" },
    { id: 2, username: "hanh", password: "password" }
];

// Routes

// Trang chủ
app.get("/", (req, res) => {
    res.send(" Login & User API is running");
});

// Login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Missing data" });
    }

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
        message: "Login successful",
        user: {
            id: user.id,
            username: user.username
        }
    });
});



// READ ALL
app.get("/users", (req, res) => {
    res.json(users);
});

// READ ONE
app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
});

//  CREATE
app.post("/users", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Missing data" });
    }

    const newUser = {
        id: Date.now(),
        username,
        password
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

//  UPDATE
app.put("/users/:id", (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const { username, password } = req.body;
    if (username) user.username = username;
    if (password) user.password = password;

    res.json({
        message: "User updated",
        user
    });
});

//  DELETE
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const exists = users.some(u => u.id === id);

    if (!exists) {
        return res.status(404).json({ message: "User not found" });
    }

    users = users.filter(u => u.id !== id);
    res.json({ message: "User deleted" });
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
