// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data


const collectEmployees = function() {
    const employees = [];
    for (let i = 0; i < 100; i++) {
        const firstName = prompt("Enter the new employee's first name:");
        if (!firstName) {
            break;
        }
        const lastName = prompt("Enter the new employee's last name:");
        if (!lastName) {
            break;
        }
        const salaryInput = prompt("Enter the new employee's salary:");
        let salary = parseFloat(salaryInput);
        if (isNaN(salary)) {
            salary = 0 ; // Default to $0 if input is not a valid number
        }
        employees.push({ firstName, lastName, salary });
        
        const addAnother = confirm("Would you like to add another employee?");
        if (!addAnother) {
            break;
        }
    }
    return employees;
}





// Display the average salary
const displayAverageSalary = function(employeesArray) {
    let totalSalary = 0;
    const numEmployees = employeesArray.length;

    for (const employee of employeesArray) {
        totalSalary += employee.salary;
    }
    const averageSalary = totalSalary / numEmployees;

console.log(`The average salary is ${averageSalary}`);
}




// Select a random employee
const getRandomEmployee = function(employeesArray) {
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    console.log(`Our random employee is ${randomEmployee.firstName} ${randomEmployee.lastName}`);
    console.table(randomEmployee);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);