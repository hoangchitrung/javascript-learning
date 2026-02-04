import { updateUserById, loginUserByEmail } from "../services/user.services.js";

export const updateUser = (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;

    const updatedUser = updateUserById(id, { name, email });

    if (!updateUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
}

export const loginUser = (req, res) => {
    const { email, password } = req.body;

    const logUser = loginUserByEmail(email, password);

    if (!logUser) {
        return res.status(404).json({ message: "Account not found" });
    }

    res.status(200).json({ message: "Login Successful" });
}