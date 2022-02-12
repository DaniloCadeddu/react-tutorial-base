import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, LoginRequest } from "./api";
import { setToken } from "./redux/tokenSlice";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = () => {
    const request: LoginRequest = {
      username,
      password,
    };

    login(request)
      .then((token) => {
        dispatch(setToken(token));
        navigate("/admin");
      })
      .catch(() => setError("Username o password errati"));
  };

  return (
    <>
      {error && <div>{error}</div>}
      <input
        value={username}
        placeholder="username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        value={password}
        placeholder="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleSubmit}>Accedi</button>
    </>
  );
};
