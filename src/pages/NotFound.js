import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
        <h1>Not Found!</h1>
        <p> The page you're looking for doesn't exist in our job search universe. Don't worry, though; we're here to help you get back on track.

You can always return to the home page to explore our vast array of job opportunities and resources. If you believe this is a mistake or you're searching for something specific, feel free to reach out to our support team for assistance. We're dedicated to providing you with the best job search experience, and we're here to assist you every step of the way.</p>
      <p>Go to the <Link to ="/">HomePage</Link>.</p>
    </div>
  )
}
