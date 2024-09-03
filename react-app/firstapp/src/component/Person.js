import React from "react";

export function Person(person) {
  return (
    <div>
      <h2>
         I am {person.name}. I am {person.age} years old. I Know {person.skill}
      </h2>
    </div>
  );
}
