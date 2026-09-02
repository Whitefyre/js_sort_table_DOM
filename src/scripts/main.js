'use strict';

const tableBody = document.querySelector('tbody');
const headRow = document.querySelector('thead').querySelector('tr');
const people = [...tableBody.children];

function compareNum(i) {
  const result = [...people].sort(
    (a, b) =>
      Number(a.children[i].textContent.replace(/[$,]/g, '')) -
      Number(b.children[i].textContent.replace(/[$,]/g, '')),
  );

  return result;
}

function compareString(i) {
  const result = [...people].sort((a, b) =>
    a.children[i].textContent.localeCompare(b.children[i].textContent),
  );

  return result;
}

function sort(columnIndex, compareFunction) {
  let sorted = [];

  sorted = compareFunction(columnIndex);

  for (const person of sorted) {
    tableBody.append(person);
  }
}

headRow.addEventListener('click', (e) => {
  if (e.target.textContent === 'Age') {
    sort(2, compareNum);
  } else if (e.target.textContent === 'Salary') {
    sort(3, compareNum);
  } else if (e.target.textContent === 'Name') {
    sort(0, compareString);
  } else {
    sort(1, compareString);
  }
});
