//your JS code here. If required.
function generateNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const numbers = [];
      for (let i = 1; i <= 10; i++) {
        numbers.push(i);
      }
      resolve(numbers);
    }, 3000);
  });
}

function filterOddNumbers(numbers) {
  return new Promise((resolve) => {
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
    resolve(oddNumbers);
  });
}

function doubleEvenNumbers(numbers) {
  return new Promise((resolve) => {
    const evenNumbers = numbers.map(num => num % 2 === 0 ? num * 2 : num);
    resolve(evenNumbers);
  });
}

function updateOutputText(text) {
  document.getElementById("output").innerText = text;
}

generateNumbers()
  .then(filterOddNumbers)
  .then(doubleEvenNumbers)
  .then(result => {
    updateOutputText(result.join(', '));
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
