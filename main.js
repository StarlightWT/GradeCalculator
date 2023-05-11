var grade = null;
var grades = [];
var weights = [];
var lastElement;
function addGrade() {
  const output = document.getElementById("output_grades");
  let gradeElement = document.createElement("li");
  let weight = document.getElementById("weight").value;
  if (weight > 0 && weight < 1) weight *= 100;
  gradeElement.innerHTML = `${selectedGrade} (${weight}%)`;
  if (!(selectedGrade != null && weight > 0 && weight <= 100)) return;
  output.append(gradeElement);
  //translate grade to an actual number for calculations
  console.log(selectedGrade);
  switch (selectedGrade) {
    case "1":
      grade = 1;
      break;
    case "1-":
      grade = 1.33;
      break;
    case "2+":
      grade = 1.66;
      break;
    case "2":
      grade = 2;
      break;
    case "2-":
      grade = 2.33;
      break;
    case "3+":
      grade = 2.66;
      break;
    case "3":
      grade = 3;
      break;
    case "3-":
      grade = 3.33;
      break;
    case "4+":
      grade = 3.66;
      break;
    case "4":
      grade = 4;
      break;
    case "4-":
      grade = 4.33;
      break;
    case "5":
      grade = 5;
      break;
  }
  console.log(grade);
  grades.push(grade);
  weights.push(weight);
  let avgOutput = document.getElementById("avg_output");
  let averageGrade = calculateAverage().toFixed(2);
  avgOutput.innerHTML = `Average : ${averageGrade}`;
  if (averageGrade >= 4.5) avgOutput.style.color = "red";
  else avgOutput.style.color = "green";
}

function selectGrade(element) {
  selectedGrade = element.innerHTML;
  if (lastElement) lastElement.style.backgroundColor = "#202020";
  element.style.backgroundColor = "green";
  lastElement = element;
}

function calculateAverage() {
  let totalWeight = 0;
  let totalGrades = 0;
  for (let i = 0; i < grades.length; i++) {
    totalWeight += parseInt(weights[i]);
    totalGrades += grades[i] * weights[i];
  }
  console.log(
    `Total weight: ${totalWeight} \n Total grades: ${totalGrades} \n Weights: ${weights} \n Grades: ${grades}`
  );
  return totalGrades / totalWeight;
}

function refresh() {
  setTimeout(function () {
    location.reload();
  }, 100);
}
