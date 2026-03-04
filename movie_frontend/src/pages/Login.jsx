import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login(form);
            localStorage.setItem("token", res.data.token);
            navigate("/movies");
        } catch (err) {
            alert("Login failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                placeholder="Email"
                onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                }
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                }
            />
            <button type="submit">Login</button>
        </form>
    );
}
export default Login;