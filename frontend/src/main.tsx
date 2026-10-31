import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <main>
      <h1>BookTravaling</h1>
      <p>Технический каркас. Макет интерфейса находится на этапе подготовки.</p>
    </main>
  );
}

const root = document.getElementById("root");
if (!root) throw new Error("Root element is missing");
createRoot(root).render(<React.StrictMode><App /></React.StrictMode>);
