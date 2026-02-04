// Request
//    ↓
// Route (/users)
//    ↓
// Controller
//    ↓
// Service (logic)
//    ↓
// Controller
//    ↓
// Response

import express from "express";
import userRoutes from "./routes/user.route.js";

const app = express();
const PORT = 3000;

console.log("[APP] Initializing application...");
// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("User MVC API is running");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


// Thực hành:
// xây dựng User Management API cho một hệ thống nhỏ
// Hệ thống cần thêm chức năng mới:
// Cập nhật thông tin user (UPDATE USER)
// Xây dựng API: PUT /users/:id
// Cho phép: Cập nhật name + Cập nhật email + Trả về user sau khi cập nhật

// Yêu cầu:
// 1. Route (routes/user.route.js)
// Khai báo endpoint PUT /users/:id
// Route chỉ được gọi controller

// 2. Controller (controllers/user.controller.js)
// Nhận:
// req.params.id
// req.body
// Gọi service phù hợp
// Trả response:
// 200 nếu update thành công
// 404 nếu user không tồn tại

// 3. Service (services/user.service.js)
// Viết hàm xử lý:
// Tìm user theo id
// Cập nhật dữ liệu
// Không dùng req, res
// Trả kết quả về controller

// 4. Data (data/user.data.js)
// Sử dụng users array có sẵn
// Không tạo DB mới

//Test bằng Postman
