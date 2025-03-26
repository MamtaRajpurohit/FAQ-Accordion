import React from "react";
import FAQ from "./components/FAQ";
import faqData from "./data/faqData";
import "./styles/styles.css";

function App() {
  return (
    <div className="app-container">
      <h1>FAQ Accordion</h1>
      <FAQ data={faqData} />
    </div>
  );
}

export default App;


