//UC 8
// const salary = document.querySelector('#salary');
// const output = document.querySelector('.salary-output');
// output.textContent = salary.value;
// salary.addEventListener('input', function () {
//     output.textContent = salary.value;
// });

//UC 10
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayRoll()).name = name.value;
            textError.textContent = "";
        }
        catch (e) {           
            textError.textContent = e;
        }
    });
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
});

// UC 9
const save = () => {
    try {
        let EmployeePayRoll = createEmployeePayroll();
    }
    catch (e) {
        alert(e);
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayRoll();
    try {
        employeePayrollData.name = getInputValueById('#name');
    }
    catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }

    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day') + "," + getInputValueById('#month') + "," + getInputValueById('#year');
    employeePayrollData.startDate = new Date(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let sellItems = [];
    allItems.forEach(item => {
        if (item.checked)
            sellItems.push(item.value);
    });
    return sellItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
} 