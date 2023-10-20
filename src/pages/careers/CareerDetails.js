import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  // eslint-disable-next-line
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p> APPLY NOW!</p>
        <p>We Wish You Best Of Luck for your future!</p>
      </div>
    </div>
  );
}
//loader Function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) {
    throw Error("Could not find that Career");
  }
  return res.json();
};
