import React from "react";

export function Hero({ heroName }) {
  if (heroName === "Mak chaudhary") {
    throw new Error("Not a hero ! ");
  }
  return <div>{heroName}</div>;
}
