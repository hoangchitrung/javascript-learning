// LUỒNG CHẠY
// Request → Middleware → Route → Response

// POST /login
// → express.json
// → log middleware
// → route /login
// → res.json


// Middleware là hàm đứng giữa Request và Response, có nhiệm vụ:
//     xử lý request
//     kiểm tra điều kiện
//     chỉnh sửa dữ liệu
//     hoặc chặn request nếu không hợp lệ

// Request → Middleware → Controller → Response
// Cấu trúc middleware

// function middleware(req, res, next) {
//   // xử lý logic
//   next(); // cho phép đi tiếp
// }

// Trường hợp sử dụng
// Logging	ghi log request
// Authentication	kiểm tra đăng nhập
// Authorization	phân quyền admin/user
// Validation	kiểm tra dữ liệu
// Error handling	xử lý lỗi tập trung
// Parse dữ liệu	JSON, form

// Middleware kiểm tra đăng nhập (Authentication)
// Người dùng gọi API: /profile
// Nếu CHƯA đăng nhập → chặn lại
// Nếu ĐÃ đăng nhập → cho truy cập

import express from "express";
const app = express();
const PORT = 3000;

// GLOBAL MIDDLEWARE
app.use(express.json()); // middleware:đọc raw request body --> chuyển JSON 
// → JavaScript object -> Gán vào req.body


// Data
const users = [
    { id: 1, username: "admin", password: "123", role: "admin" },
    { id: 2, username: "user", password: "123", role: "user" }
];

//  MIDDLEWARE: LOGGER
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);
// MIDDLEWARE: AUTH CHECK
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    // chưa đăng nhập
    if (!token || token !== "logged-in") {
        // JWT, API, Bearer token - Auth check
        return res.status(401).json({
            message: "User not logged in"
        });
    }

    req.user = {
        id: 1,
        username: "admin",
        role: "admin"
    };
    next();
};

// ROUTES
// login
// POST /login
//  → kiểm tra username/password
//  → trả token
//  → client lưu token
//  → gửi token khi gọi API

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    // fake token test middleware
    const token = "logged-in";
    res.json({
        message: "Login successful",
        token
    });
});

// public route
app.get("/", (req, res) => {
    res.json({ message: "Public home page" });
});



// protected route
// Request
//  ↓
// express.json()
//  ↓
// logger
//  ↓
// authMiddleware
//    ├─ FAIL → return 401 (STOP)
//    └─ OK → next()
//  ↓
// Route handler (/profile)
//  ↓
// Response

app.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "Welcome to your profile",
        user: req.user
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Bài tập thực hành
// Middleware kiểm tra dữ liệu đầu vào (Validation)
// Client gửi request tạo sản phẩm
// Nếu thiếu dữ liệu / dữ liệu sai → không cho vào controller
// Nếu hợp lệ →  xử lý tiếp

// Xây dựng API quản lý sản phẩm đơn giản, trong đó:
// POST /products
// → chỉ cho phép tạo sản phẩm nếu dữ liệu hợp lệ

// Request body (JSON)
// {
//   "name": "Laptop",
//   "price": 1500,
//   "quantity": 3
// }
// Yêu cầu middleware validateProduct
// Middleware phải kiểm tra:
// name không được rỗng
// price phải là số > 0
// quantity phải là số nguyên ≥ 1
// Nếu sai:
// Trả HTTP 400 Bad Request
// Thông báo lỗi rõ ràng
// Nếu đúng:
// Gọi next()

//Test postman