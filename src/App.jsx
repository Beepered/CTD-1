import "./App.css";

import { useState } from "react";
import Header from "./shared/Header";
import TodoPage from "./features/Todos/TodoPage";

export default function App() {
  return (
    <div>
      <Header></Header>
      <TodoPage></TodoPage>
    </div>
  );
}
