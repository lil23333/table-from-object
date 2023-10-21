let table = document.querySelector('table');

let obj = {};

let employees = [
  {name: 'employee1', age: 30, salary: 
    400}, 
  {name: 'employee2', age: 31, salary: 
    500}, 
  {name: 'employee3', age: 32, salary: 
    600}, 
];

employees.push(obj);

function getT (table, employees) {
      for (let i = 0; i < employees.length; i++) {
      let tr = document.createElement('tr');
        
       for (let j = 0; j < Object.values(employees[i]).length; j++) {
       let td = document.createElement('td');
       td.innerHTML = Object.values(employees[i])[j];

        td.addEventListener('click', function f () {
        let input = document.createElement('input');
        input.value = td.textContent;

        td.textContent = '';
        td.appendChild(input);

        input.addEventListener('blur', () => {
        td.textContent = input.value;
        td.addEventListener('click', f);
        });
        
       td.removeEventListener('click', f);
    });

      tr.appendChild(td);
      }
      table.appendChild(tr);
      }
      }

let input1 = document.createElement('input');
table.appendChild(input1);
let input2 = document.createElement('input');
table.appendChild(input2);
let input3 = document.createElement('input');
table.appendChild(input3);

input1.addEventListener('blur', () => {
obj.name = input1.value;
});
input2.addEventListener('blur', () => {   
obj.age = input2.value;
});
input3.addEventListener('blur', () => {
obj.salary = input3.value;
});

getT (table, employees) 