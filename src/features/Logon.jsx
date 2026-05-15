import { useState } from "react";

export default function Logon({ onSetEmail, onSetToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isLoggingOn, setLoggingOn] = useState(false);

  async function HandleSubmit() {
    try {
      const response = await fetch("/api/users/logon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.status === 200 && data.name && data.csrfToken) {
        onSetEmail(data.name);
        onSetToken(data.csrfToken);
      } else {
        setAuthError(`Authentication failed: ${data?.message}`);
      }
    } catch (error) {
      setAuthError(`Error: ${error.name} | ${error.message}`);
    } finally {
      setLoggingOn(false);
    }
  }

  return (
    <form>
      {authError ? <p>{authError}</p> : ""}

      <p>Email:</p>
      <input type="email" required></input>
      <p>Password:</p>
      <input type="password" required></input>
      <button
        onClick={() => {
          console.log("cil");
          HandleSubmit();
        }}
      >
        Submit
      </button>
    </form>
  );
}
