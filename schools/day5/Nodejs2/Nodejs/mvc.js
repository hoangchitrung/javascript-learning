// // app.js
app.post("/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Missing data" });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

// app.post("/users", (req, res) => {...});


// Tasks
// Việc đang làm	Ví dụ trong code
// Nhận request	req.body
// Validate dữ liệu	if (!name || !email)
// Xử lý logic	tạo newUser, push
// Trả response	res.status().json()

// Vấn đề:
// Một function đang làm quá nhiều việc
// Code dài ra → rất khó sửa
// Copy-paste logic ở nhiều API khác

//Hướng giải quyết: MVC = mỗi người làm 1 việc
// Route: đường đi (URL, HTTP method)
// Controller: nhận request – trả response
// Service / Model: xử lý logic, dữ liệu

// project/
// │── app.js
// │── routes/
// │   └── user.route.js
// │── controllers/
// │   └── user.controller.js
// │── services/
// │   └── user.service.js
// │── data/
// │   └── user.data.js

