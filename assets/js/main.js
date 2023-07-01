"use strict";

function calculateAge(event) {
    event.preventDefault();
    const ageOne = document.getElementById("ageone").value;
    const ageTwo = document.getElementById("agetwo").value;
    calculateAge.innerHTML = ageOne-ageTwo;
}
console.log(calculateAge)