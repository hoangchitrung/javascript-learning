// Node.js = JavaScript runtime chạy ngoài trình duyệt
//     Dựa trên V8 Engine (Google Chrome)
//     Chạy JS trên server
//     Event-driven + Non-blocking I/O

// Phù hợp cho:
//     API
//     Real-time app
//     Microservices
//     Backend cho web/mobile

// JavaScript → chỉ chạy trong trình duyệt
// JavaScript → chạy được trên server

// Đặc điểm nổi bật của Node.js
// 1. Single-thread nhưng hiệu quả
// Node.js chạy 1 luồng chính
// Không tạo thread cho mỗi request
// Sử dụng Event Loop để xử lý bất đồng bộ
//2. Non-blocking I/O
// Không chờ đọc/ghi file, DB, API
// Giúp server xử lý được nhiều request cùng lúc
//3. Event-driven
// Hoạt động dựa trên sự kiện (event)
// Phù hợp cho ứng dụng real-time

// Cách Node.js hoạt động
// 1.Client gửi request
// 2.Node.js nhận request
// 3.Nếu là tác vụ tốn thời gian (I/O) → đưa sang background
// 4.Khi xong → callback / promise được xử lý
// 5.Trả response cho client

// Modules in Nodejs
// Trong Node.js, module là một đơn vị mã độc lập (thường là 1 file .js) dùng để:
//     Tổ chức code
//     Tái sử dụng
//     Tránh trùng tên biến
//     Dễ bảo trì & mở rộng

// Node.js có 3 loại module chính:
// 1 Core Modules (Built-in)
// import fs from 'node:fs';
// import path from 'node:path';
// import http from 'node:http';

// 2 Local Modules
// // math.js
// export function add(a, b) {
//   return a + b;
// }

// // app.js
// import { add } from './math.js';

// ES Modules (hiện đại)
// JSON
// {
//   "type": "module"
// }

// Import toàn bộ
// import * as math from './math.js';

// 3 Third-party Modules
// Cài từ npm npm install express

//Callback, Event Loop and EventEmitter
// Callback là một hàm được truyền vào hàm khác, và được gọi sau khi công việc hoàn thành.
// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// greet("Node", () => {
//   console.log("Done");
// });

// Callback trong Node.js dùng để:
// Xử lý bất đồng bộ
// Tránh block chương trình
// Phổ biến trong:
// đọc file
// gọi API
// truy vấn DB

// Event Loop
// Event Loop là “người điều phối công việc” của Node.js.
// Node.js chạy 1 luồng (single-thread)
// Nhưng vẫn xử lý được rất nhiều request cùng lúc
// Nhờ:
//     Event Loop
//     Non-blocking I/O
//     Callback / Promise / async-await
// Event Loop quyết định việc nào làm trước – việc nào đợi sau

// console.log("Start");
// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("Promise");
// });
// console.log("End");

// Call Stack
//   ↓
// Microtask Queue
//   ↓
// Macrotask Queue

// EVENTEMITTER
// EventEmitter là cơ chế cho phép một đối tượng phát sự kiện (emit)
// và các đối tượng khác lắng nghe sự kiện đó (on).

// Chuông cửa
// Chuông cửa → emit("ring")
// Người trong nhà → on("ring", ...)
// Ai đăng ký nghe → được thông báo
// Ai không đăng ký → không biết gì
// EventEmitter = chuông thông báo

// const EventEmitter = require("events");
// // tạo emitter
// const emitter = new EventEmitter();
// // lắng nghe sự kiện login
// emitter.on("login", (username) => {
//   console.log(` ${username} đã đăng nhập`);
// });

// // phát sự kiện login
// console.log("Before login");
// emitter.emit("login", "Alice");
// console.log("After login");

// HTTP Module & Server
// http là module core của Node.js dùng để tạo web server và xử lý HTTP request/response
// const http = require("http");
// HTTP Server là chương trình lắng nghe request từ client + trả response lại cho client
// Trong Node.js: Server được tạo bằng http.createServer()

// const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello Node.js");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

// req (request): Thông tin client gửi lên  or URL, method, headers, body…
// res (response): Thông tin server trả về, status code, headers, body…

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/" && req.method === "GET") {
//     res.end("Home page");
//   }
//   else if (req.url === "/about" && req.method === "GET") {
//     res.end("About page");
//   }
//   else  if (req.url === "/api/user" && req.method === "GET") {
//     const user = { name: "Alice", age: 22 };

//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(user)); //Trả JSON (giống API backend)
//   }
//   else {
//     res.statusCode = 404;
//     res.end("Not Found");
//   }
// });

// server.listen(3000);

// Luồng xử lý HTTP Server
// Client
//   ↓
// Request (url, method, body)
//   ↓
// http.createServer callback
//   ↓
// Logic xử lý
//   ↓
// res.end()
//   ↓
// Response trả về client
