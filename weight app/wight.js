     document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.front-page');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 5 || height <= 5) {
      alert('Please enter valid values for weight and height.');
      return;
    }

    const bmi = calculateBMI(weight, height);
    const bmiCategory = getBMICategory(bmi);
    window.location.href =` index.html?bmi=${bmi}&category=${bmiCategory}`;
  });

  function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(2);
  }

  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
});
