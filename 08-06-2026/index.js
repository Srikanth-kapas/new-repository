export const employees = [
    { id: 1, name: "Srikanth", salary: 50000 },
    { id: 2, name: "Rahul", salary: 65000 },
    { id: 3, name: "Priya", salary: 80000 },
    { id: 4, name: "Anjali", salary: 45000 }
];// Module
import { employees } from "./employee.js";

// Closure
function employeeCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(`Button Clicked: ${count} times`);
    };
}

const counter = employeeCounter();

// Higher-Order Function
function processEmployees(callback) {
    callback(employees);
}

// Event Listener
document.getElementById("showBtn").addEventListener("click", () => {}

    counter();
                                                 
    processEmployees((employeeList) => {

        // Array Methods
        const highSalaryEmployees = employeeList.filter(
            employee => employee.salary > 50000
        );

        highSalaryEmployees.forEach(employee => {
            console.log(
                `${employee.name} - ₹${employee.salary}`
            );
        });
    });
});

// ES6 Features
const companyName = "Tech Solutions";

const showCompany = (name) => {
    console.log(`Company: ${name}`);
};

showCompany(companyName);