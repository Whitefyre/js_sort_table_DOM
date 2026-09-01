"use strict";
const tableBody = document.querySelector("tbody");
const headRow = document.querySelector("thead").querySelector("tr");
const people = [
    ...tableBody.children
];
let ascendingAge = true;
let ascendingSalary = true;
let ascendingName = true;
let ascendingPosition = true;
function positionSort() {
    let sortedPosition = [];
    if (ascendingPosition) {
        sortedPosition = [
            ...people
        ].sort((a, b)=>a.children[1].textContent.localeCompare(b.children[1].textContent));
        ascendingPosition = false;
    } else {
        sortedPosition = [
            ...people
        ].sort((a, b)=>b.children[1].textContent.localeCompare(a.children[1].textContent));
        ascendingPosition = true;
    }
    for (const person of sortedPosition)tableBody.append(person);
}
function nameSort() {
    let sortedName = [];
    if (ascendingName) {
        sortedName = [
            ...people
        ].sort((a, b)=>a.children[0].textContent.localeCompare(b.children[0].textContent));
        ascendingName = false;
    } else {
        sortedName = [
            ...people
        ].sort((a, b)=>b.children[0].textContent.localeCompare(a.children[0].textContent));
        ascendingName = true;
    }
    for (const person of sortedName)tableBody.append(person);
}
function salarySort() {
    let sortetSalary = [];
    if (ascendingSalary) {
        sortetSalary = [
            ...people
        ].sort((a, b)=>Number(a.children[3].textContent.replace(/[$,]/g, "")) - Number(b.children[3].textContent.replace(/[$,]/g, "")));
        ascendingSalary = false;
    } else {
        sortetSalary = [
            ...people
        ].sort((a, b)=>Number(b.children[3].textContent.replace(/[$,]/g, "")) - Number(a.children[3].textContent.replace(/[$,]/g, "")));
        ascendingSalary = true;
    }
    for (const person of sortetSalary)tableBody.append(person);
}
function ageSort() {
    let sortedAge = [];
    if (ascendingAge) {
        sortedAge = [
            ...people
        ].sort((a, b)=>a.children[2].textContent - b.children[2].textContent);
        ascendingAge = false;
    } else {
        sortedAge = [
            ...people
        ].sort((a, b)=>b.children[2].textContent - a.children[2].textContent);
        ascendingAge = true;
    }
    for (const person of sortedAge)tableBody.append(person);
}
headRow.addEventListener("click", (e)=>{
    if (e.target.textContent === "Age") ageSort();
    else if (e.target.textContent === "Salary") salarySort();
    else if (e.target.textContent === "Name") nameSort();
    else positionSort();
});

//# sourceMappingURL=index.f75de5e1.js.map
