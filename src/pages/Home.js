import React, { useState, useEffect } from "react";
export default function Home() {
  const [text, setText] = useState("");
  const welcomeText = "Welcome to Quantum Learning Academy!";
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= welcomeText.length) {
        setText(welcomeText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // After typing is complete, set the text without the cursor
        setText(welcomeText);
      }
    }, 100); // Adjust the typing speed by changing the interval duration
  }, []);

  return (
    <div className="home">
      <h2>{text}</h2>
      <p>
        Welcome to Quantum Learning Academy, your ultimate destination for
        quality education. We offer a diverse range of courses tailored to meet
        the educational needs of students from Class 1 to Class VIII,
        Matriculation, Intermediate, O Levels, and more.
      </p>
      <p>
        At Quantum Learning Academy, we provide comprehensive Aptitude
        Preparation, English Courses, and Computer Courses. Whether you're
        looking to strengthen your academic foundation, enhance your
        professional skills, or prepare for upcoming exams, we have the
        resources and expertise to support your learning journey.
      </p>
      <p>
        Explore our website to discover our exciting courses and expert
        instructors. We are dedicated to helping you achieve your educational
        goals and excel in your academic and professional endeavors. Your path
        to success starts here!
      </p>
    </div>
  );
}
