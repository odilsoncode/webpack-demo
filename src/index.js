import _ from "lodash";
import "./style.css";
// import your function
import myName from "./myName";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());

function component2() {
  const element = document.createElement("div");

  // use your function!
  element.textContent = myName("Cody");
  return element;
}

document.body.appendChild(component2());
