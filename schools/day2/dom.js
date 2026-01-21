// DOM (Document Object Model) là mô hình đối tượng biểu diễn toàn bộ cấu trúc HTML/XML của trang web dưới dạng cây (tree), để JavaScript có thể truy cập và thao tác.

// DOM là “cây HTML” được trình duyệt tạo ra để JS có thể đọc – sửa – xóa – thêm nội dung trang web.
// Nhiệm vụ chính DOM
// 1. Biểu diễn cấu trúc trang web
// 2. Cho phép JavaScript truy cập & thao tác UI - Đọc, sửa nội dung; Thêm, xóa, thay thế phần tử; Thay đổi class, style
// 3. Lắng nghe & xử lý sự kiện người dùng - Click, input, submit, scroll, keydown…
// 4. Cập nhật giao diện theo thời gian thực - Không reload trang; Tạo trải nghiệm SPA


// Trình duyệt load trang web theo thứ tự:
    // Tải HTML
    // Parse HTML → tạo DOM Tree
    // Tải CSS → tạo CSSOM
    // DOM + CSSOM → Render Tree
    // Vẽ giao diện

// Cấu trúc DOM Tree
//HTML
/*
<html>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html>
*/

//DOM TREE
/*
document
 └── html
     └── body
         ├── h1
         │   └── "Hello"
         └── p
             └── "World"
*/

// Các loại Node trong DOM
    // Document	document
    // Element	thẻ HTML
    // Text	nội dung text
    // Attribute	thuộc tính
    // Comment	<!-- -->

// DOM Tree & Node - DOM (Document Object Model) là cây đối tượng đại diện cho HTML - Mỗi thành phần là một Node



