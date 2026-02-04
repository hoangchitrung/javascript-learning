import { users } from "../data/data.js";

export function updateUserById(id, { name, email }) {
    const userId = Number(id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return null;
    }

    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;

    return user;
}

export function loginUserByEmail(email, password) {

    if (!email || !password) {
        throw new Error(`Please enter email and password ${email} ${password}`);
    }

    const userEmail = users.find(u => u.email === email);
    const userPassword = users.find(u => u.password === password);

    if (!userEmail) return false;
    if (!userPassword) return false;

    return true;
}