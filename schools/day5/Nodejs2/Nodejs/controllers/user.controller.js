// Controller điều phối request–response
// Nhận req, res
// Đọc:
//   req.params
//   req.query
//   req.body
// Gọi service
// Trả response (JSON / View)
// Mapping lỗi → HTTP status
// Không chứa logic nghiệp vụ phức tạp

import { createUser, getAllUsers } from "../services/user.service.js";

export const createUserController = (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = createUser(name, email);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getUsersController = (req, res) => {
    const users = getAllUsers();
    res.json(users);
};
