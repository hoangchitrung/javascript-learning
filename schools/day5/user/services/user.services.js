import { users } from "../data/user.data.js";

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