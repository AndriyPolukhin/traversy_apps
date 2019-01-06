
// 1. Calculate resutls function
const calculateResults = () => {

  // 1.1 UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // 1.2 Principal
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // 1.3 Monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  // Validation
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  } else {
    // ERROR IF
    showError('Please check your numbers');
  }

  console.log('Calculating...');
};
// Error Function
const showError = (error) => {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('results').style.display = 'none';
  // 1. Create a div
  const errorDiv = document.createElement('div');
  // get Elements from the DOM to insert the div
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  // 2. Add a class
  errorDiv.className = 'alert alert-danger';
  // 3. Create a text node and append it to div
  errorDiv.appendChild(document.createTextNode(error));
  // Insert Error Above heading
  card.insertBefore(errorDiv, heading);

  // 4. Clear error after 3 seconds
  setTimeout(clearError, 3000);
};

// Clear Error function
const clearError = () => document.querySelector('.alert').remove();

// Listen for Submit
document.getElementById('loan-form').addEventListener('submit', (e) => {
  // Hide results
  document.getElementById('results').style.display = 'none';
  // Show Loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});
