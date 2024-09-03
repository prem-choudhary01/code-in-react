import React from "react";
import { Person } from "./Person";

export function NameList() {
  const persons = [
    {
      id: 1,
      name: "Prem",
      age: 21,
      skill: "React",
    },
    {
      id: 2,
      name: "Kailash",
      age: 19,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Bharat",
      age: 23,
      skill: "Vue",
    },
  ];
  //   const names = ["Prem", "Kailash", "Bharat"];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;

  //   return(
  //     <div>
  //         <h1>{names[0]}</h1>
  //         <h1>{names[1]}</h1>
  //         <h1>{names[2]}</h1>
  //     </div>
  //   )
}
