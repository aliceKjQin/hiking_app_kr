import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { signIn } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const {data, error} = await signIn(email)
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Check your email for the login link!");
      console.log(data)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send magic link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default LoginPage;
