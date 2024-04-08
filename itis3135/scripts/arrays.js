let person = [];
let salaries = [];

let aaa = document.getElementById('aaa');
let bbb = document.getElementById('bbb');
let ccc = document.getElementById('ccc');

function addSalary() {
    const input = document.getElementById('addSalaryInput');
    let addSalary = document.getElementById('addSalary');
    addSalary.style.display = 'none';
    input.innerHTML = `
    <fieldset id="addSal">
    <label>Please enter a name: <input class="jsArrInputs" id="name" type="text"></label>
    <br></br>
    <label>Please enter a desired salary: <input class="jsArrInputs" id="salaryDesire" type="number"></label>
    <br></br>
    <button class="jsArray" type="button" onclick="addInputs()">Submit</button>
    </fieldset>
    `;
    document.getElementById('name').focus();
}
//^works with addInputs() !
const addInputs = () => {
    if (document.getElementById('salaryDesire').value == "" || document.getElementById('name').value == "") {
        alert("Please enter a person and/or their salary.");
        return addSalary();
    }
    let addSal = document.getElementById('addSal');
    addSal.style.display = "none";
    let name = document.getElementById('name').value;
    let salary = document.getElementById('salaryDesire').value;

    person.push(name);
    salaries.push(salary);
    aaa.innerHTML = `<p id="savedis" class="glowy">Previous inputs saved :D !</p>`;

    let addAnother = confirm("Do you want to add another submission? (p.s. cancel = no!)");
    if (addAnother) {
        // If user wants to add another submission, show the form again
        addSalary();
    } else {
        // Otherwise, display a message or perform any other action
        let savedis = document.getElementById('savedis');
        savedis.style.display = "none";
        aaa.innerHTML += "<p>All peeps added!</p>";
    }
}

/*BELOW IS MODIFY SALARY */
function modifySalary() {
    if (person == "" || salaries == "") {
        alert('Please add a person first.');
        return;
    }
    let msBtn = document.getElementById('modifySalaryBtn');
    msBtn.style.display = "none";
    let msInput = document.getElementById('modifySalary');

    msInput.innerHTML = `
        <fieldset id="salaryChange">
        <p>Choose below a person to modify their salary!</p>
        <select class="jsArrInputs" id="msDropdown"></select>
        <button class="jsArray" type="button" onclick="getDropdownValue()">Submit</button>
        </fieldset>`;

    let dropdown = document.getElementById('msDropdown');

    // Clear existing option 
    dropdown.innerHTML = "";
    // Create and append an option element for each item in the array
    person.forEach(function (item) {
        let option = document.createElement("option");
        option.text = item;
        dropdown.add(option);
    });
}
const getDropdownValue = () => {
    let msInput = document.getElementById('bbb');
    let salaryChange = document.getElementById('salaryChange');
    salaryChange.style.display = 'none';
    msInput.innerHTML = `
    <p> Insert their new salary: <input class="jsArrInputs" id="newSal" type="number"></p>
    <button class="jsArray" type="button" onclick="modifySal()">Submit</button>`;
}
const modifySal = () => {
    let bbb = document.getElementById('bbb');
    let dropdown = document.getElementById('msDropdown');
    let getPerson = dropdown.value;

    let personIndex = person.findIndex(function (item) {
        return item === getPerson;
    });
    let newSal = document.getElementById('newSal').value;
    salaries[personIndex] = newSal;

    bbb.innerHTML = `<p>${getPerson}'s salary was adjusted to $${newSal}!</p>`;
}
//STOPS HERE^//

function displayResults() {
    if (person == "" || salaries == "") {
        alert('Please add a person first.');
        return;
    }
    let displayResult = document.getElementById('displayResult');
    displayResult.style.display = "none";

    let resultDiv = document.getElementById('resultDiv');
    // Use the reduce method to iterate through the array and find the highest value - CHAT
    let highestValue = salaries.reduce(function (highest, currentValue) {
        // Compare the current value with the highest value found so far -CHAT
        return Math.max(highest, currentValue);
    });

    // Calculate the sum of all numbers in the array - me
    let sum = 0;
    salaries.forEach((el) => sum += parseFloat(el));
    let average = Math.round(sum / salaries.length);

    resultDiv.innerHTML = `
    <p id="results">Highest Salary: $${highestValue}</p>
    <p id="results">Average Salary: $${average}</p>
    `;

}
function displaySalary() {
    if (person == "" || salaries == "") {
        alert('Please add a person first.');
        return;
    }
    let displayTableBtn = document.getElementById('displayTableBtn');
    displayTableBtn.style.display = 'none';

    let tableDiv = document.getElementById('tableDiv');
    let tableR = document.getElementById('tableR');
    tableR.innerHTML = `
<th>Person</th>
<th>Salary</th>
`;
    for (let i = 0; i < person.length; i++) {
        let row = tableDiv.insertRow();
        let nameCell = row.insertCell(0);
        let ageCell = row.insertCell(1);
        nameCell.textContent = person[i];
        ageCell.textContent = "$" + salaries[i];
    }
}
