import "./App.css";

import { useState } from "react";
import Header from "./shared/Header";
import TodoPage from "./features/Todos/TodoPage";
import Logon from "./features/Logon";

export default function App() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  return (
    <div>
      <Header></Header>
      {token ? (
        <TodoPage token={token}></TodoPage>
      ) : (
        <Logon onSetEmail={setEmail} onSetToken={setToken}></Logon>
      )}
    </div>
  );
}
