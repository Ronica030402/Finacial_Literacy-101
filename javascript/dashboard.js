// Select elements from the HTML code
const form = document.getElementById('dashboard-form');
const typeInput = document.getElementById('type');
const dateInput = document.getElementById('date');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const expensesTableBody = document.querySelectorAll('table')[0].querySelector('tbody');
const savingsTableBody = document.querySelectorAll('table')[1].querySelector('tbody');
const expensesTotal = document.getElementById('expenses-total');
const savingsTotal = document.getElementById('savings-total');
const netWorth = document.getElementById('net-worth');

// Initialize variables to store the expenses and savings
let expenses = [];
let savings = [];

// Add event listener to the form submit button
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();
  
  // Get the values from the form
  const type = typeInput.value;
  const date = dateInput.value;
  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);
  
  // Validate the values
  if (isNaN(amount) || amount <= 0 || date === '' || description === '') {
    alert('Please enter a valid amount, date and description.');
    return;
  }
  
  // Add the expense or savings to the corresponding array
  if (type === 'expense') {
    expenses.push({ date, description, amount });
  } else if (type === 'savings') {
    savings.push({ date, description, amount });
  }
  
  // Clear the form
  typeInput.value = 'expense';
  dateInput.value = '';
  descriptionInput.value = '';
  amountInput.value = '';
  
  // Update the financial dashboard
  updateExpensesTable();
  updateSavingsTable();
  updateTotals();
});

// Function to update the expenses table
function updateExpensesTable() {
  // Clear the current table content
  expensesTableBody.innerHTML = '';
  
  // Add the expenses to the table
  expenses.forEach((expense) => {
    const row = expensesTableBody.insertRow();
    row.insertCell().textContent = expense.date;
    row.insertCell().textContent = expense.description;
    row.insertCell().textContent = `- R${expense.amount.toFixed(2)}`;
  });
}

// Function to update the savings table
function updateSavingsTable() {
  // Clear the current table content
  savingsTableBody.innerHTML = '';
  
  // Add the savings to the table
  savings.forEach((saving) => {
    const row = savingsTableBody.insertRow();
    row.insertCell().textContent = saving.date;
    row.insertCell().textContent = saving.description;
    row.insertCell().textContent = `+ R${saving.amount.toFixed(2)}`;
  });
}

// Function to update the totals
function updateTotals() {
  // Calculate the total expenses and update the UI
  const expensesTotalValue = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  expensesTotal.textContent = `- R${expensesTotalValue.toFixed(2)}`;
  
  // Calculate the total savings and update the UI
  const savingsTotalValue = savings.reduce((acc, saving) => acc + saving.amount, 0);
  savingsTotal.textContent = `+ R${savingsTotalValue.toFixed(2)}`;
  
  // Calculate the net worth and update the UI
  const netWorthValue = savingsTotalValue - expensesTotalValue;
  netWorth.textContent = `R${netWorthValue.toFixed(2)}`;
}

  
