import React, { useState } from "react";
import { motion } from "framer-motion";
import faqData from "../data/faqData";
import "../styles/styles.css";

const FAQItem = ({ faq, activeId, toggleFAQ }) => {
  const isActive = activeId === faq.id;

  return (
    <motion.div
      className={`faq-item ${isActive ? "active" : ""}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="faq-question" onClick={() => toggleFAQ(faq.id)}>
        {faq.question}
        <span className="faq-icon">{isActive ? "−" : "+"}</span>
      </div>
      {isActive && (
        <motion.div
          className="faq-answer"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {faq.answer}
        </motion.div>
      )}
    </motion.div>
  );
};

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);
  const [search, setSearch] = useState("");

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="faq-container">
      <input
        type="text"
        className="search-box"
        placeholder="Search FAQs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {faqData
        .filter((faq) =>
          faq.question.toLowerCase().includes(search.toLowerCase())
        )
        .map((faq) => (
          <FAQItem key={faq.id} faq={faq} activeId={activeId} toggleFAQ={toggleFAQ} />
        ))}
    </div>
  );
};

export default FAQ;


