import { useState } from "react";

export default function Register({ isAuthenticated, setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    console.log('log')
    if (email && password) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      setIsAuthenticated(true);
    } else {
      setError("Please fill both fields");
    }
  };

  return (
    <div>
      <p>Registration form</p>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>

        {isAuthenticated ? <p>Details saved</p> : null}
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
