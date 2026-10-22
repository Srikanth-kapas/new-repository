
// EVENT CAPTURING

const parentContainer = document.getElementById("parentContainer");

parentContainer.addEventListener(
    "click",
    function () {
        console.log("Parent Container Captured the Click Event");
    },
    true
);

// FORM VALIDATION


const employeeForm = document.getElementById("employeeForm");
const employeeName = document.getElementById("employeeName");
const successMessage = document.getElementById("successMessage");
const employeeList = document.getElementById("employeeList");

employeeForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = employeeName.value.trim();

    if (name === "") {
        alert("Employee Name Cannot Be Empty");
        return;
    }

    // DOM Manipulation
    const newEmployee = document.createElement("li");
    newEmployee.textContent = name;

    employeeList.appendChild(newEmployee);

    successMessage.textContent =
        `${name} has been added successfully`;

    employeeName.value = "";
    // SETTIMEOUT

    setTimeout(function () {
        successMessage.textContent = "";
    }, 3000);
});
// EVENT DELEGATION


employeeList.addEventListener("click", function (event) {

    if (event.target.tagName === "LI") {

        const selectedEmployee =
            event.target.textContent;

        alert(
            `Employee Selected: ${selectedEmployee}`
        );
    }
});


// SETINTERVAL


const timerElement = document.getElementById("timer");

let seconds = 0;

const sessionTimer = setInterval(function () {

    seconds++;

    timerElement.textContent = seconds;

    if (seconds === 30) {

        clearInterval(sessionTimer);

        alert("Session Time Completed");
    }

}, 1000);