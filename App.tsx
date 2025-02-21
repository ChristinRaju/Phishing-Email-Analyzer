import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmailAnalyzer from "./components/EmailAnalyzer";

function App() {
  return (
    <BrowserRouter basename="/Phishing-Email-Analyzer">
      <div className="min-h-screen bg-gray-50">
        <main>
          <Routes>
            <Route path="/" element={<EmailAnalyzer />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
