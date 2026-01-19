// BÀI 1: KIỂM TRA ĐĂNG NHẬP NGƯỜI DÙNG
// Yêu cầu:
// Viết hàm login(username, password)
// Điều kiện:
    // Username phải >= 4 ký tự
    // Password phải >= 6 ký tự
    // Nếu hợp lệ:
        // In "Login successful"
    // Nếu không:
        // In lý do cụ thể:
            // "Username too short"
            // "Password too short"

// BÀI 2: TÍNH TỔNG TIỀN GIỎ HÀNG
// Yêu cầu:
// Tạo mảng cart = []
// Cho phép nhập 3 sản phẩm, mỗi sản phẩm là object:
// {
//   name: "Book",
//   price: 20000,
//   quantity: 2
// }
// Viết hàm:
//     calculateTotal(cart)
//     Áp dụng khuyến mãi:
//         Tổng ≥ 100.000 → giảm 10%
//         In:
//         Tổng ban đầu
//         Tổng sau giảm giá

// BÀI 3: QUẢN LÝ ĐIỂM SINH VIÊN
// Yêu cầu:
// Tạo mảng students = []
// Nhập thông tin 3 sinh viên:
// {
//   name: "An",
//   scores: [7, 8, 6]
// }
// Viết hàm:
// calculateAverage(scores)
// classifyStudent(avg)
// In:
// Tên sinh viên
// Điểm trung bình
// Xếp loại:
//     ≥ 8 → Giỏi
//     ≥ 6.5 → Khá
//     ≥ 5 → Trung bình
//     < 5 → Yếu

// BÀI 4: QUẢN LÝ KHO HÀNG ĐƠN GIẢN
// Yêu cầu:
// Tạo mảng products = []
// Mỗi sản phẩm gồm:
// {
//   name: "Laptop",
//   price: 15000000,
//   stock: 5
// }
// Viết hàm:
// addProduct(products, product)
// sellProduct(products, name, quantity)
// Khi bán:
// Nếu tồn kho đủ → trừ số lượng
// Nếu không → in "Not enough stock"

// BÀI 5: MÔ PHỎNG TÀI KHOẢN NGÂN HÀNG
// yêu cầu:
// Tạo object bankAccount:
// {
//   owner: "hAN",
//   balance: 5000000
// }
// Viết các hàm:
// deposit(amount)
// withdraw(amount)

// Quy tắc:
// Không cho rút số âm
// Không cho rút quá số dư
// In số dư sau mỗi giao dịch
