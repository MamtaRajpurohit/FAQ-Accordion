import React from "react";
import { motion } from "framer-motion"; // Animations
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

export default FAQItem;
