import { useState } from "react";
import { Navigate } from "react-router-dom";
import hashir from "../assets/hashir.png";
import osama from "../assets/osama.png";
export default function About() {
  const [user, setUser] = useState("hashir");
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="about">
      <h2>About Quantum Learning Academy</h2>
      <p>
        Quantum Learning Academy is your gateway to a world of knowledge and
        growth. We are committed to providing a diverse array of educational
        programs, meticulously designed to cater to students of all levels, from
        early education to advanced courses such as Matriculation, Intermediate,
        O Levels, and beyond.
      </p>
      <p>
        Our academy specializes in offering comprehensive Aptitude Preparation,
        English Courses, and Computer Courses, empowering you to enhance your
        academic foundation, advance your professional skills, or excel in
        upcoming exams.
      </p>
      <p>
        We invite you to explore our website, where you'll discover a treasure
        trove of engaging courses and expert instructors. At Quantum Learning
        Academy, we are dedicated to supporting your educational aspirations,
        fostering your academic and professional growth, and guiding you towards
        a path of success.
      </p>
      <h2 style={{ color: "orange" }}>Meet Us</h2>
      <div className="personality">
        <img
          src={hashir}
          alt="Personality 1"
          className="personality-image"
          style={{ maxWidth: "200px", maxHeight: "200px" }}
        />
        <div className="personality-details">
          <h3 style={{ color: "#bc4123" }}>
            {" "}
            Raja Hashir{" "}
            <p>
              <strong>Software Engineer | Teacher @ QLA </strong>
            </p>
          </h3>
          <div style={{ backgroundColor: "grey", padding: "10px" }}>
            <strong>
              <strong style={{ color: "orange" }}>
                Founder & CEO of Quantum Learning Academy.{" "}
              </strong>{" "}
              A graduate in Software Engineering with a great focus in Learning
              New Technologies and Exploring them all and help others and our
              students to gather latest knowledge and ideas.
            </strong>
          </div>
        </div>
      </div>
      <div className="personality">
        <img
          src={osama}
          alt="Personality 1"
          className="personality-image"
          style={{ maxWidth: "200px", maxHeight: "200px" }}
        />
        <div className="personality-details">
          <h3 style={{ color: "#bc4123" }}>
            {" "}
            Osama Akbar{" "}
            <p>
              <strong>Course Instructor @QLA </strong>
            </p>
          </h3>
          <div style={{ backgroundColor: "grey", padding: "10px" }}>
            <strong>
              <strong style={{ color: "orange" }}>
                Co-Founder & CEO of Quantum Learning Academy.{" "}
              </strong>{" "}
              A teacher with a great focus in Learning New things and Exploring
              them all and help others and our students to gather latest
              knowledge and ideas.
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
