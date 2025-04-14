document.getElementById('quizForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let score = 0;
  let total = 8;

  // Question 1
const q1 = document.querySelector('input[name="q1"]:checked');
if (q1 && q1.value === "link") score++;

  // Question 2
  const q2 = Array.from(document.querySelectorAll('input[name="q2"]:checked')).map(i => i.value);
  const q2Correct = ["JavaScript", "Python"];
  if (q2.length === q2Correct.length && q2.every(val => q2Correct.includes(val))) score++;

  // Question 3
  const q3 = document.querySelector('input[name="q3"]').value.trim().toLowerCase();
  if (q3 === "cascading style sheets") score++;

  // Question 4
  const q4 = document.querySelector('input[name="q4"]:checked');
  if (q4 && q4.value === "ul") score++;

  // Question 5
  const q5 = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(i => i.value);
  const q5Correct = ["color", "font-size", "text-align"];
  if (q5.length === q5Correct.length && q5.every(val => q5Correct.includes(val))) score++;

  // Question 6
  const q6 = document.querySelector('input[name="q6"]:checked');
  if (q6 && q6.value === "function myFunc() {}") score++;

  // Question 7
  const q7 = document.querySelector('input[name="q7"]:checked');
  if (q7 && q7.value === "8") score++;

  // Question 8
  const q8 = document.querySelector('input[name="q8"]').value.trim().toLowerCase();
  if (q8 === "select * from students;" || q8 === "select * from students") score++;

  // Display resultdocument.getElementById("result").innerText = `You scored ${score} out of ${total}!`;
  document.getElementById("result").innerText = `You scored ${score} out of ${total}!`;
  });