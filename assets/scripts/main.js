// Grab the required elements and establish an array to store the transaction data.
const balance = document.querySelector('.sum');
const income = document.querySelector('.income');
const expense = document.querySelector('.expense');
const name = document.querySelector('#name');
const amount = document.querySelector('#amount');
const btn = document.querySelector('#submit');
const list = document.querySelector('#list');

const transactionsArray = [];
let incomeCounter = 0;
let expenseCounter;

// Listen for any button clicks.
btn.addEventListener("click", e => {
    e.preventDefault();
    addTransaction();
})

// Function to add a new transaction to the transaction list and take care of modifying the html.
function addTransaction() {

    // Add a transaction to the list.
    let div = document.createElement('div');
    div.classList.add("list-item");
    let namep = document.createElement('p');
    let amountp = document.createElement('p');
    namep.textContent = name.value;
    amountp.textContent = amount.value + " €";

    if (amount.value >= 0) {
        div.classList.add("income-item");
    }

    else {
        div.classList.add("expense-item");
    }

    div.appendChild(namep);
    div.appendChild(amountp);

    list.appendChild(div);

    // Adjust the income/expense total.
    incomeCounter = incomeCounter + amount.value;
    income.innerHTML = "";
    income.innerHTML = incomeCounter;

    // Add the transaction to an array.
    let transaction = {
        type : "transaction",
        title : name.value,
        amount : amount.value
    }
    transactionsArray.push(transaction);
}