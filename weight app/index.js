document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const bmi = params.get('bmi');
  const category = params.get('category');

  const bmiResultElement = document.getElementById('bmi-result');
  const bmiCategoryElement = document.getElementById('bmi-category');

  bmiResultElement.textContent =` Your BMI is: ${bmi}`;
  bmiCategoryElement.textContent =` You are : ${category}`;
});