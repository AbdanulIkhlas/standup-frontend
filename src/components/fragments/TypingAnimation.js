import React, { useState, useEffect } from "react";
import "../../style/custom.css";

const benefits = [
  "Menghibur diri sendiri",
  "Mendapatkan relasi",
  "Peluang mendapatkan pekerjaan",
  "Menambah portfolio",
];

const TypingAnimation = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % benefits.length;
      const fullText = benefits[i];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="flex gap-2 text-[22pt] font-normal">
      <h3>Manfaat nya?</h3>
      <div className="typewriter-container p-0">
        <span className="typewriter-text">{currentText}</span>
      </div>
    </div>
  );
};

export default TypingAnimation;
