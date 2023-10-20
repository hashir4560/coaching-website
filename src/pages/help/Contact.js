import { Form, redirect, useActionData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  const data = useActionData();
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Name</span>
          <textarea name="name" required></textarea>
        </label>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
      {/* Add links to LinkedIn, Instagram, Facebook, and WhatsApp */}
      <div className="social-links">
        <a
          href="mailto:quantumlearningacademy299@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </a>

        <a
          href="https://instagram.com/quantum_learningacademy?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
          Instagram
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61552548781170&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </a>
        <a
          href="https://wa.me/923208874814"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </a>
      </div>
    </div>
  );
}
export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    name: data.get("name"),
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log(submission);

  //send post request
  if (submission.message.length < 10) {
    return { error: "Meesage must be over 10 chars Long " };
  }

  //redirect the user
  return redirect("/");
};
