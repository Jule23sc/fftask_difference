"use strict";
const output = document.querySelector(".output");
function calculateAge(event) {
    event.preventDefault();
    const ageOne = document.getElementById("ageone").value;
    const ageTwo = document.getElementById("agetwo").value;
    output.innerHTML = ageOne-ageTwo;
}