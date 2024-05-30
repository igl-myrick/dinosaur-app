import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import DinosaurService from './dinosaur-service';

// business logic

function getDinosaurs(num) {
  let promise = DinosaurService.getDinosaurs(num);
  promise.then(function(output) {
    printDinosaurs(output[0]);
  }, function(errorArray) {
    printError(errorArray);
  });
}

// ui logic

function printError(error) {
  document.querySelector("#output").innerText = `There was an error: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function printDinosaurs(output) {
  if (document.querySelector("#output-list")) {
    document.querySelector("#output-list").remove();
  }
  const outputDiv = document.getElementById("output");
  const list = document.createElement("ul");
  list.setAttribute("id", "output-list");
  output.forEach(function(element) {
    const listElement = document.createElement("li");
    listElement.innerText = element;
    list.append(listElement);
  });
  outputDiv.append(list);
}

function handleForm(e) {
  e.preventDefault();
  const inputLength = parseInt(document.querySelector("#list-length").value);
  document.querySelector("#list-length").value = null;
  getDinosaurs(inputLength);
}

document.querySelector("#list-form").addEventListener("submit", handleForm);