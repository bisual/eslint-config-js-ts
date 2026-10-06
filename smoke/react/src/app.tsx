import React from "react";

export function App(): React.JSX.Element {
  const user = { name: "Ada" };
  // prefer-destructuring
  const name = user.name;
  // no-nested-ternary
  const label = name ? (name.length > 1 ? name : "x") : "y";
  // eqeqeq
  if (name == "Ada") {
    console.log(label);
  }
  return <div>{name}</div>;
}
