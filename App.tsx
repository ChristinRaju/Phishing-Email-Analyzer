import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmailAnalyzer from "./components/EmailAnalyzer";

function App() {
  return (
    <Router basename="/Phishing-Email-Analyzer">
      <Routes>
        <Route path="/" element={<EmailAnalyzer />} />
      </Routes>
    </Router>
  );
}

export default App;
