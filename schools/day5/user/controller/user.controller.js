import { updateUserById } from "../services/user.services.js";

export const updateUser = (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;

    const updatedUser = updateUserById(id, { name, email });

    if (!updateUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
}