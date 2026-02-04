import { users } from "../data/user.data.js";

// Chứa business logic
// Validate nghiệp vụ
// Xử lý dữ liệu
// Gọi database / repository
// Gọi API bên ngoài


export const createUser = (name, email) => {
    if (!name || !email) {
        throw new Error("Name and email are required");
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    return newUser;
};

export const getAllUsers = () => {
    return users;
};
